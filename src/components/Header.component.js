import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

function Header({ currentUser }) {

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo" style={{ padding: '0px 20px' }}>EMS</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {!currentUser ? <SignOutLinks /> : <SignInLinks />}
                </ul>
            </div>
        </nav >
    );
}


var mapStateToProps = function ({ user: { currentUser } }) {

    return {
        currentUser: currentUser
    };
}

export default connect(mapStateToProps)(Header);