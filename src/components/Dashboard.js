import React, { useEffect } from 'react';
import LinkedBlocks from './Blocks_Components/LinkedBlocks';


import Header from './Header';
/*I: Presentational component that renders the user's email address */

import { connect } from 'react-redux';
import LinkedTransactions from './Transactions_Components/LinkedTransactions';
/*I: Redux connected component, shows list of user's transactions and can render a modal that allows them to add a transaction 
*/

import TotalBudget from './TotalBudget_Components/TotalBudget';
/*I: Redux connected, shows some calculations based on the user's budget, also renders a progress bar based on expenses/budget,
	also renders three custom components: BudgetGoal, TotalExpenses, ProgressBar */

import { getTransactions } from '../redux/actions/PlaidActions';
//I: Get transactions imported from Plaid service

import './dashboardStyle.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../App.css';
import './main.css';
import { getManualTrans } from "../redux/actions/ManualActions";
//I: Get transactions that were manually added into the app by the user, as opposed to getting from Plaid

import Loading from "./Loading";
//I: Conditionally renders a loader spinner if the app is in a fetching state. This is redux connected.

export const Dashboard = props => {
	useEffect(() => {
        props.LinkedAccount == true 
            ? props.getTransactions(props.userID) 
            : props.getManualTrans(props.userID,props.history);
	}, [props.LinkedAccount]);
	/*I: props.getTransactions gets data that is pulled from Plaid, props.getManualTrans is to pull in data the user entered themselves
		props.LinkedAccount seems to be a user variable defining whether that user connected their account to Plaid or not*/
	return (
		<div className='app-container'>
			<div className='app-nav'>
				<Header />
			</div>
			<Loading/>
			<div className='showcase'>
				<div className='right-showcase'>
						<TotalBudget />
				</div>
				<div className='left-showcase'>
						<LinkedBlocks /> {/* I: What are blocks?? Need to study the backend's data model */}
						<LinkedTransactions />		
				</div>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount,
		blocks: state.plaidReducer.categories,
		plaidFetching: state.plaidReducer.isFetching,
		blockFetching: state.blockReducer.isFetching,
		profileFetching: state.profileReducer.isFetching
	};
}

export default connect(mapStateToProps, { getTransactions, getManualTrans })(
	Dashboard
);
