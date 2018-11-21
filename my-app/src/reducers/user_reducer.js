import { ADD_USER } from '../actions';

const initialState = {
    user: [],
};

export default function(state=initialState, action) {
    switch(action.type) {
        case ADD_USER:
            return { ...state, profile: action.payload };
        default:
            return state;            
    }
}