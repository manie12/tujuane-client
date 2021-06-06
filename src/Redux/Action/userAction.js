import { POST_USER } from '../Constants';

export const setUserAction = (data) => async (dispatch) => {
    try {
        console.log(data)

        dispatch({ type: POST_USER, payload: data })
    } catch (error) {
        console.log(error)
    }


}