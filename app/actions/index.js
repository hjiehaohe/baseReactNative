import * as ACTIONS from "./actionTypes" //Import the actions types constant we defined in our actions
import { create } from 'apisauce';
import { APP_CONFIG } from '../config/config';

//userLogin fucntiuon 1
export function reqLogin(email, password) {
    const api = create({
        baseURL: APP_CONFIG.BASEURL,
    });
    return (dispatch) => {
        dispatch({ type: ACTIONS.REQUEST_LOGIN_START, loading: true });
        api.post('/v1/auth/login', { email: email, password: password })
            .then((response) => {
                if (response.data && response.data.user) {
                    dispatch({ type: ACTIONS.REQUEST_LOGIN, user: response.data.user, token: response.data.token, loggedin: true, loading: false });
                } else {
                    dispatch({ type: ACTIONS.REQUEST_LOGIN, data: response.data, loggedin: false, loading: false });
                }
            });
    };
}