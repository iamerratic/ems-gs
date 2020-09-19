import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Form from '../render-props/Form';
import Card from '../ui/Card';
import { signinAsync } from '../store/actions/user.action';

var input_metadata = [
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' }
];

function SigninScreen({ currentUser, dispatch }) {


    function handleSubmit(state) {
        dispatch(signinAsync(state));
    }

    return currentUser ? <Redirect to='/dashboard' /> : (
        <Form input_metadata={input_metadata}>
            {function (state, change) {
                return (
                    <section className="container" style={{ marginTop: '5rem' }}>
                        <Card className="row">
                            <form className="col s12" onSubmit={function (event) {
                                event.preventDefault();
                                handleSubmit(state);
                            }}>
                                {input_metadata.map(function (input) {
                                    return (
                                        <div className="row" key={input.name}>
                                            <div className="input-field col s8">
                                                <input id={input.name} name={input.name} type={input.type} className="validate" onChange={change} />
                                                <label htmlFor={input.name}>{input.label}</label>
                                            </div>
                                        </div>
                                    );
                                })}
                                <button type="submit" className="btn btn-primary btn-large">Login</button>
                            </form>
                        </Card>
                    </section>
                );
            }}
        </Form>
    );
}


var mapStateToProps = ({ user: { currentUser } }) => ({
    currentUser: currentUser
});

export default connect(mapStateToProps)(SigninScreen);