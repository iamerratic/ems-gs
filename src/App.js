import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header.component';
import { auth, db } from './config/firebase.config';
import { trackInitUser } from './store/actions/user.action';
import AppRoutes from './routes/app.routes';

class App extends React.Component {

  componentDidMount() {
    var { trackInitUser } = this.props;
    auth.onAuthStateChanged((user) => {

      if (user) {
        var id = user.uid;
        db.collection('users').doc(id).get().then((userSnap) => {
          var data = userSnap.data();
          trackInitUser({ ...data, id: id });
        });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <AppRoutes />
        </React.Fragment>
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
