const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
};


function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SIGNUP_SUCCESS': return { currentUser: action.payload, isLoading: false, error: null };
        case 'SINGUP_FAILURE': return { isLoading: false, error: action.payload };
        case 'START_REQUEST': return { isLoading: true };
        case 'SIGNIN': return { currentUser: action.payload };
        case 'SIGNOUT': return { currentUser: null };
        case 'TRACK_INIT_STATE': return { currentUser: action.payload };
        case 'SIGN_IN_GOOGLE': return { currentUser: action.payload };
        default: return state;
    }
}


export default userReducer;