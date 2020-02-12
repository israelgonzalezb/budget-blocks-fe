
import {
    BLOCKS_CATEGORY_LOADING,
    BLOCKS_CATEGORY_FAILED,
    BLOCKS_CATEGORY_SUCCESS
    } from "../actions/userBlocks"

    import {
        CLEAR_BLOCKS
    } from "../actions/LogoutAction";

export const initialState = {
        blocks:[],
        error:null,
        isFetching:false,
    };
export const reducer = (state=initialState, action) => {
   
    switch(action.type){
        case BLOCKS_CATEGORY_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case BLOCKS_CATEGORY_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case BLOCKS_CATEGORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                blocks:action.payload,
                error: null
            }
        case CLEAR_BLOCKS:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

