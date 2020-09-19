import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { signInWithGoogleAsync } from '../store/actions/user.action';

function SignOutLinks({ dispatch, history }) {

    function redirectToDashboard() {
        history.push('/dashboard');
    }

    function logInWithGoogle() {
        dispatch(signInWithGoogleAsync(redirectToDashboard));
    }

    return (
        <React.Fragment>
            <li><Link to="/signin">SignIn</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
            <li><button onClick={logInWithGoogle} className="btn btn-primary">Login With Google</button></li>
        </React.Fragment>
    );
}


export default connect()(withRouter(SignOutLinks));