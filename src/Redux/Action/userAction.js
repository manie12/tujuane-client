import { POST_USER, LOGIN_USER } from '../Constants';

export const setUserAction = (data) => async (dispatch) => {
    try {
        console.log(data)
        dispatch({ type: POST_USER, payload: data })
    } catch (error) {
        console.log(error)
    }


}

export const setLoginAction = (data) => async (dispatch) => {

    try {
        dispatch({ type: LOGIN_USER, payload: data })
    } catch (error) {
        console.log(error)

    }


}