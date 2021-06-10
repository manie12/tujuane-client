import { POST_USERS_DATA } from '../Constants';

const postUsers = (posts = [], action) => {

    switch (action.type) {
        case POST_USERS_DATA:

            return action.payload

        default:
            return posts
    }


}
export default postUsers