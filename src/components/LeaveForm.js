import React from 'react';
import { connect } from 'react-redux';

import Form from '../render-props/Form';
import { setLeavesAsync } from '../store/actions/employee.action';

var input_metadata = [
    { name: 'from', type: 'date', label: 'From When' },
    { name: 'to', type: 'date', label: 'Till ' }
];

function LeaveForm({ dispatch, currentUser }) {

    function handleSubmit(state) {

        dispatch(setLeavesAsync(state, currentUser));
    }

    return (
        <Form input_metadata={input_metadata}>
            {function (state, change) {
                return (
                    <form onSubmit={function (event) {
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
                );
            }}
        </Form>
    );
}


var mapStateToProps = ({ user: { currentUser } }) => ({
    currentUser: currentUser
});

export default connect(mapStateToProps)(LeaveForm);