import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../config/firebase.config';
import { signout } from '../store/actions/user.action';

function SignInLinks({ dispatch }) {

    function logout() {
        auth.signOut().then(function () {
            dispatch(signout());
        });
    }

    return (
        <React.Fragment>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><button onClick={logout} className="btn btn-primary">Logout</button></li>
        </React.Fragment>
    );
}


export default connect()(SignInLinks);