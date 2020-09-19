const INITIAL_STATE = {
    currentUser: null
};


function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SIGNUP': return { currentUser: action.payload };
        case 'SIGNIN': return { currentUser: action.payload };
        case 'SIGNOUT': return { currentUser: null };
        case 'TRACK_INIT_STATE': return { currentUser: action.payload };
        case 'SIGN_IN_GOOGLE': return { currentUser: action.payload };
        default: return state;
    }
}


export default userReducer;