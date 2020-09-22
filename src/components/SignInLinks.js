import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../config/firebase.config';
import { signout } from '../store/actions/user.action';
import { showModal, setModalContent } from '../store/actions/employee.action';
import LeaveForm from '../components/LeaveForm';

function SignInLinks({ dispatch, currentUser }) {

    function logout() {
        auth.signOut().then(function () {
            dispatch(signout());
        });
    }

    function handleClick(event) {
        event.preventDefault();
        dispatch(setModalContent({
            content: <LeaveForm />,
            footer: <div>Footer</div>
        }));
        dispatch(showModal());
    }

    return (
        <React.Fragment>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            {currentUser && !currentUser.isEmp && <li><Link to='/emp'>Employees</Link></li>}
            {currentUser && currentUser.isEmp && <li><a onClick={handleClick}>Apply For Leave</a></li>}
            <li><button onClick={logout} className="btn btn-primary">Logout</button></li>
        </React.Fragment>
    );
}


var mapStateToProps = ({ user: { currentUser } }) => ({
    currentUser: currentUser
});

export default connect(mapStateToProps)(SignInLinks);