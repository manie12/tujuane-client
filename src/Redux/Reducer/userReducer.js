import { POST_USER, LOG_OUT, LOGIN_USER } from '../Constants.js';


const userReducer = (state = { authUser: [] }, action) => {


    switch (action.type) {

        case POST_USER:


            return {

                ...state, ...state.authUser = action.payload

            };



        case LOGIN_USER:
            return {
                ...state, ...state.authUser = action.payload
            }


        case LOG_OUT:
            //   const LogOut = localStorage.removeItem("jwtToken");
            return {
                ...state, authUser: []
            };
        default:
            return state
    }


}

export default userReducer;