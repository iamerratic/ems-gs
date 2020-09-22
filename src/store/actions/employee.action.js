import { db } from '../../config/firebase.config';

export function showModal() {

    return {
        type: 'SHOW_MODAL',
    };
}


export function hideModal() {

    return {
        type: 'HIDE_MODAL',
    };
}

export function setModalContent({ content, footer }) {

    return {
        type: 'SET_MODAL_CONTENT',
        content: content,
        footer: footer
    };
}


export function initRequest() {
    return {
        type: 'EMP_START_REQUEST'
    };
}


export function setLeaveSuccess() {

    return {
        type: 'SET_LEAVE_SUCCESS'
    };
}

export function setLeavesAsync(state, { id }) {

    return function (dispatch) {

        dispatch(initRequest());

        db.collection('users').doc(id).collection('leaves').add(state).then(function () {
            dispatch(setLeaveSuccess());
            dispatch(hideModal());
        });
    }
}

