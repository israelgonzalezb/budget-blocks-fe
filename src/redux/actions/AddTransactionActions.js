import { axiosWithAuth } from '../../components/AxiosWithAuth';
import { getManualTrans } from '../actions/ManualActions';

export const ADD_TRANSACTION_LOADING = 'ADD_TRANSACTION_LOADING';
export const ADD_TRANSACTION_SUCCESS = 'ADD_TRANSACTION_SUCCESS';
export const ADD_TRANSACTION_FAILED = 'ADD_TRANSACTION_FAILED';

export const DELETE_TRANS_SUCCESS = 'DELETE_TRANS_SUCCESS';
export const DELETE_TRANS_LOADING = 'DELETE_TRANS_LOADING';
export const DELETE_TRANS_FAIL = 'DELETE_TRANS_FAIL  ';

export const addTransactionLoading = () => ({ type: ADD_TRANSACTION_LOADING });
export const addTransactionSuccess = data => ({
	type: ADD_TRANSACTION_SUCCESS,
	payload: data
});
export const addTransactionFailure = error => ({
	type: ADD_TRANSACTION_FAILED,
	payload: error
});

export const CATEGORIES_LOADING = 'CATEGORIES_LOADING';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_FAILED = 'CATEGORIES_FAILED';

export const categoriesLoading = () => ({ type: CATEGORIES_LOADING });
export const categoriesSuccess = data => ({
	type: CATEGORIES_SUCCESS,
	payload: data
});
export const categoriesFailure = error => ({
	type: CATEGORIES_FAILED,
	payload: error
});

export function addTransaction(transaction, userID) {
	console.log('transaction', transaction);
	return function(dispatch) {
		dispatch(addTransactionLoading());
		return axiosWithAuth()
			.post(
				`https://lambda-budget-blocks.herokuapp.com/manual/transaction/${userID}`,
				transaction
			)
			.then(response => {
				console.log('addTransaction response', response.data);
				return dispatch(getManualTrans(userID));
			})
			.catch(error => {
				dispatch(addTransactionFailure(error.response.data.message));
			});
	};
}

export function getCategories(userID) {
	return function(dispatch) {
		dispatch(categoriesLoading());
		return axiosWithAuth()
			.get(
				`https://lambda-budget-blocks.herokuapp.com/api/users/categories/${userID}`
			)
			.then(response => {
				dispatch(categoriesSuccess(response.data));
			})
			.catch(error => {
				dispatch(categoriesFailure(error.response.data.message));
			});
	};
}

// delete trans
export function deleteTrans(userID, transID) {
	return function(dispatch) {
		dispatch({ type: DELETE_TRANS_LOADING });

		return axiosWithAuth()
			.delete(
				`https://lambda-budget-blocks.herokuapp.com/manual/transaction/${userID}/${transID}`
			)
			.then(response => {
				return dispatch(getManualTrans(userID));
			})
			.catch(error => {
				dispatch({
					type: DELETE_TRANS_FAIL,
					payload: error.response.data.message
				});
			});
	};
}
