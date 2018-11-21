import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export const ADD_USER = 'add_user';

const API_URL = 'https://reqres.in';

export function signInAction({ email, password }, history) {
    return async (dispatch) => {
        try {
            const res = await axios.post(`${API_URL}/api/login`, { email, password });

            dispatch({ type: AUTHENTICATED });
            console.log(res.data);
            localStorage.setItem('user', res.data.token);
            history.push('/welcome');
    
        } catch(error) {
            //console.log('login is incorrect here');
            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: 'Invalid email or password'
            });
            throw error;
        }
    };
}

export function authUserAction() {

    return async (dispatch) => {
        //console.log('@authUserAction()');
        const token = localStorage.getItem('user');

        let config = {
            headers: {'Authorization': "Bearer " + token}
        };

        return await axios.get(`${API_URL}/api/users/2`, config)
            .then((res) => {
                dispatch({ type: AUTHENTICATED });
                //console.log('authUserAction');
                //console.log(res.data);
                dispatch({ type: ADD_USER, payload: res.data.user });
                localStorage.setItem('user_details', res.data.user);
                return res;
            })
            .catch(error => {
                //console.log(error.message);
                dispatch({ type: UNAUTHENTICATED });
                return Promise.reject(error);
            });
    };
}

export function signOutAction(history) {

    return async (dispatch) => {
        localStorage.clear();
        dispatch({ type: UNAUTHENTICATED });
        history.push('/');
    };
    
}