import React from 'react';
import { Route } from 'react-router-dom';

import HomeScreen from '../screen/Home.screen';
import SignupScreen from '../screen/Signup.screen';
import SigninScreen from '../screen/Signin.screen';
import EmployeesScreen from '../screen/Employees.screen';
import DashboardScreen from '../screen/Dashboard.screen';
import withAuth from '../hoc/withAuth';


function AppRoutes() {

    return (
        <React.Fragment>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/signup" component={SignupScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/emp" component={withAuth(EmployeesScreen)} />
            <Route path="/dashboard" component={withAuth(DashboardScreen)} />
        </React.Fragment>
    );
}


export default AppRoutes;