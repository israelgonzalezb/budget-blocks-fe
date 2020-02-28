import axios from "axios";

export const LOGIN_USER_LOADING = "LOGIN_USER_LOADING";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export const loginUserLoading = () => ({ type: LOGIN_USER_LOADING });
export const loginUserSuccess = data => ({
    type: LOGIN_USER_SUCCESS,
    payload: data
  });
export const loginUserFailure = error => ({
    type: LOGIN_USER_FAILED,
    payload: error
});

export function loginUser(user,history){
    return function(dispatch) {
        dispatch(loginUserLoading());
        return axios.post('https://lambda-budget-blocks.herokuapp.com/api/auth/login',user)
            .then(response=>{
                sessionStorage.setItem("token",response.data.token);
                sessionStorage.setItem("userID",response.data.id);
                sessionStorage.setItem("LinkedAccount", response.data.LinkedAccount);
                sessionStorage.setItem("navState", response.data.navState);
                dispatch(loginUserSuccess(response.data));
                localStorage.clear()
                if(response.data.LinkedAccount === true || response.data.ManualOnly === true){
                    history.push("/dashboard");
                }else{
                    history.push("/onBoard/1");
                }
            })
            .catch(error=>{
                dispatch(loginUserFailure( error.response.data.message)); 
            })
    }
}