import { LOG_OUT } from '../Constants';

export const setLogOutAction = () => async (dispatch) => {
    try {
        dispatch({ type: LOG_OUT })
    } catch (error) {
        console.log(error)
    }


}