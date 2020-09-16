import React from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';


function withAuth(Component) {

    function AuthProtected({ currentUser, ...rest }) {

        return currentUser ? <Component {...rest} /> : <Redirect to='/signin' />;
    }

    var mapStateToProps = function ({ user: { currentUser } }) {
        return {
            currentUser: currentUser
        };
    }

    return connect(mapStateToProps)(AuthProtected);
}


export default withAuth;