const INITIAL_STATE = {
    employees: []
};


function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SET_EMPLOYEES': return { employees: action.payload };
        default: return state;
    }
}

export default reducer;