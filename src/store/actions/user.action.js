import { auth, db, provider } from '../../config/firebase.config';

export function signupSuccess(user) {

    return {
        type: 'SIGNUP_SUCCESS',
        payload: user
    };
}

export function signupFailure(err) {

    return {
        type: 'SINGUP_FAILURE',
        payload: err
    };
}

export function initRequest() {
    return {
        type: 'START_REQUEST'
    };
}


export function signupAsync({ email, password, name, mobile }) {

    return function (dispatch) {
        var uid;
        auth.createUserWithEmailAndPassword(email, password)
            .then(function (userCred) {
                uid = userCred.user.uid;
                return db.collection('users').doc(uid).set({
                    name,
                    mobile,
                    isEmp: true
                });
            })
            .then(function () {
                dispatch(signupSuccess({ name, mobile, id: uid }));
            })
            .catch(function (err) {
                dispatch(signupFailure(err));
            });
    }
}


export function signin(user) {

    return {
        type: 'SIGNIN',
        payload: user
    };
}

export function signinAsync({ email, password }) {

    return function (dispatch) {
        auth.signInWithEmailAndPassword(email, password).then(function (userCred) {

            var uid = userCred.user.uid;
            db.collection('users').doc(uid).get().then(function (userSnap) {
                var data = userSnap.data();
                dispatch(signin({ ...data, id: uid }));
            });
        });
    }
}


export function signout() {

    return {
        type: 'SIGNOUT'
    };
}


export function trackInitUser(user) {
    return {
        type: 'TRACK_INIT_STATE',
        payload: user
    };
}


export function signInWithGoogle(user) {

    return {
        type: 'SIGN_IN_GOOGLE',
        payload: user
    };
}

export function signInWithGoogleAsync(redirectToDashboard) {

    return function (dispatch) {
        auth.signInWithPopup(provider).then(function (userCred) {

            dispatch(signInWithGoogle({ id: userCred.user.uid }));
            redirectToDashboard();
        });
    }
}

