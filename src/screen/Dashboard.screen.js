import React from 'react';
import { connect } from 'react-redux';

import Modal from '../ui/Modal';
import { hideModal } from '../store/actions/employee.action';
import Loader from '../ui/Loader';

function DashboardScreen({ displayModal, dispatch, content, footer, isLoading }) {

    function closeModal() {
        dispatch(hideModal());
    }

    return (
        <div>
            {isLoading && <Loader />}
            {displayModal ? <Modal closeModal={closeModal} content={content} footer={footer} /> : (
                <div>
                    DashBoard
                </div>
            )}
        </div>
    );
}

var mapStateToProps = ({ employee: { displayModal, content, footer, isLoading } }) => ({
    displayModal: displayModal,
    content: content,
    footer: footer,
    isLoading: isLoading
});

export default connect(mapStateToProps)(DashboardScreen);