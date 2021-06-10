import { POST_USERS_DATA } from '../Constants';

export const getPosts = (data) => async (dispatch) => {
    try {
        dispatch({ type: POST_USERS_DATA, payload: data })
    } catch (error) {
        console.log(error)
    }

}