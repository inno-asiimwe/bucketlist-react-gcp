import { REGISTER } from '../actions/action_auth';

const initialState = {
    username:"",
    isAuthenticated: false

}

export default function(state=initialState, action) {
    switch(action.type) {
        default: 
            return state
    }
}