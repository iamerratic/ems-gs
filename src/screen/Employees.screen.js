import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setEmployeesAsync } from '../store/actions/admin.action';

class EmployeesScreen extends React.Component {

    componentDidMount() {
        var { dispatch } = this.props;
        dispatch(setEmployeesAsync())
    }


    render() {
        var { currentUser, employees } = this.props;
        return currentUser.isEmp ? <Redirect to='/dashboard' /> : (
            <div>
                {employees.map(function (employee) {
                    return (
                        <div>
                            <h3>{employee.name}</h3>
                            <h5>{employee.mobile}</h5>
                        </div>
                    );
                })}
            </div>
        );
    }

}

var mapStateToProps = ({ user: { currentUser }, admin: { employees } }) => ({
    currentUser: currentUser,
    employees: employees
});


export default connect(mapStateToProps)(EmployeesScreen);