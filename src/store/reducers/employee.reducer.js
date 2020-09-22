const INITIAL_STATE = {
    isLoading: false,
    error: null,
    displayModal: false,
    content: null,
    footer: null
}


function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SHOW_MODAL': return { ...state, displayModal: true };
        case 'HIDE_MODAL': return { ...state, displayModal: false };
        case 'SET_MODAL_CONTENT': return { ...state, content: action.content, footer: action.footer };
        case 'EMP_START_REQUEST': return { ...state, isLoading: true };
        case 'SET_LEAVE_SUCCESS': return { ...state, isLoading: false };
        default: return state;
    }
}

``
export default reducer;