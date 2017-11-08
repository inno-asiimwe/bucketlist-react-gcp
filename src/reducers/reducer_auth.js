import { REGISTER } from '../actions/action_auth';

const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
    title: "Bucketlist App",
    isAuthenticated: false

}

export default function(state={}, action) {
    switch(action.type) {
        case REGISTER:
            return [ ...state, { isAuthenticated:true }];
        default: 
            return state
    }
}