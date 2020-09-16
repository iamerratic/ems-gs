import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from './screen/Home.screen';
import SigninScreen from './screen/Signin.screen';
import SignupScreen from './screen/Signup.screen';
import Header from './components/Header.component';
import DashboardScreen from './screen/Dashboard.screen'
import withAuth from './hoc/withAuth';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={HomeScreen} />
      <Route path="/signup" component={SignupScreen} />
      <Route path="/signin" component={SigninScreen} />
      <Route path="/dashboard" component={withAuth(DashboardScreen)} />
    </BrowserRouter>
  );
}

export default App;
