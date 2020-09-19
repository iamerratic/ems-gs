import { auth, db, provider } from '../../config/firebase.config';

export function signup(user) {

    return {
        type: 'SIGNUP',
        payload: user
    };
}


export function signupAsync({ email, password, name, mobile }) {

    return function (dispatch) {
        auth.createUserWithEmailAndPassword(email, password).then(function (userCred) {
            var uid = userCred.user.uid;
            db.collection('users').doc(uid).set({
                name,
                mobile
            })
                .then(function () {
                    dispatch(signup({ name, mobile, id: uid }));
                });
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

