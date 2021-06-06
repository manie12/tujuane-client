import { POST_USER, LOG_OUT } from '../Constants.js';


const userReducer = (state = { authUser: null }, action) => {
    switch (action) {
        case POST_USER:
            //console.log(localStorage.getItem("jwtToken"))
            const localToken = localStorage.setItem("jwtToken", ...action.payload);
            console.log(action.payload)
            return {
                ...state, ...state.authUser = action.payload
            };
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