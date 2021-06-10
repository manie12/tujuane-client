import { POST_USER, LOGIN_USER } from '../Constants';

export const setUserAction = (data) => async (dispatch) => {

    try {
        // sessionStorage.setItem("jwtToken", JSON.stringify(JSON.stringify(data)));



        // const getToken = await JSON.parse(sessionStorage.getItem("jwtToken"));


        dispatch({ type: POST_USER, payload: data })


    } catch (error) {
        console.log(error)
    }


}

export const setLoginAction = (data) => async (dispatch) => {

    try {
        //   sessionStorage.setItem("jwtToken", JSON.stringify(data));

        // const DecodedToken = await JSON.parse(sessionStorage.getItem("jwtToken"))
        dispatch({
            type: LOGIN_USER, payload: data
        })




    } catch (error) {
        console.log(error)

    }


}