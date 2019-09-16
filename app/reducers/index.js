import { combineReducers } from 'redux';

import * as ACTIONS from "../actions/actionTypes" //Import the actions types constant we defined in our actions

let dataState = {
    data: [],
    loading: false,
    loggedin: false,
};

let count = 0;
const dataReducer = (state = dataState, action) => {

    switch (action.type) {
        case ACTIONS.REQUEST_LOGIN:
            if (action.data) {
                state = Object.assign({}, state, {
                    data: action.data,
                    loading: false,
                    loggedin: action.loggedin
                });
            } else {
                state = Object.assign({}, state, {
                    user: action.user,
                    token: action.token,
                    loading: false,
                    loggedin: action.loggedin
                });
            }
            return state;

        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;