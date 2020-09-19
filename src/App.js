import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomeScreen from './screen/Home.screen';
import SigninScreen from './screen/Signin.screen';
import SignupScreen from './screen/Signup.screen';
import Header from './components/Header.component';
import DashboardScreen from './screen/Dashboard.screen'
import withAuth from './hoc/withAuth';
import { auth, db } from './config/firebase.config';
import { trackInitUser } from './store/actions/user.action';
import Loader from './ui/Loader';

class App extends React.Component {

  state = {
    isLoading: true
  };

  componentDidMount() {
    var { trackInitUser } = this.props;
    auth.onAuthStateChanged((user) => {

      if (user) {
        var id = user.uid;
        db.collection('users').doc(id).get().then((userSnap) => {
          var data = userSnap.data();
          trackInitUser({ ...data, id: id });
          this.setState({
            isLoading: false
          });
        });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.isLoading ? <Loader /> : (
          <React.Fragment>
            <Header />
            <Route exact path="/" component={HomeScreen} />
            <Route path="/signup" component={SignupScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/dashboard" component={withAuth(DashboardScreen)} />
          </React.Fragment>
        )}
      </BrowserRouter>
    );
  }
}

var mapDispatchToProps = (dispatch) => ({
  trackInitUser: function (user) {
    dispatch(trackInitUser(user));
  }
});

export default connect(null, mapDispatchToProps)(App);
