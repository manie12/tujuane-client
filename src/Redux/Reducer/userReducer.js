import { POST_USER, LOG_OUT, LOGIN_USER } from '../Constants.js';


const userReducer = (state = { authUser: [] }, action) => {
    switch (action.type) {

        case POST_USER:
            // console.log(localStorage.getItem("jwtToken"))
            //const localToken = localStorage.setItem("jwtToken", JSON.stringify(action.payload));
            // console.log(localToken)
            localStorage.setItem("jwtToken", JSON.stringify(action.payload));
            const decodeToken = JSON.parse(localStorage.getItem("jwtToken"))
            console.log(decodeToken)

            return {
                ...state, ...state.authUser = decodeToken,

            };


        case LOGIN_USER:
            localStorage.setItem("jwtToken", JSON.stringify(action.payload));
            const decodeToke = JSON.parse(localStorage.getItem("jwtToken"))
            console.log(decodeToken)

            return {
                ...state, ...state.authUser = decodeToke
            }



        case LOG_OUT:
            const LogOut = localStorage.removeItem("jwtToken");
            return {
                ...state, authUser: LogOut
            };
        default:
            return state
    }


}

export default userReducer;