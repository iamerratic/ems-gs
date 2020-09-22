import React from 'react';

import './Modal.css';

function Modal({ closeModal, content, footer }) {

    return (
        <div className="Modal">

            <div className="Modal_Body">
                <div className="Modal_Content">
                    <div className="Modal_Heading center-align">
                        <h4>Info</h4>
                    </div>
                    <div className="Modal_Main_Content">
                        {content}
                    </div>
                </div>
                <div className="Modal_Divider"></div>
                <div className="Modal_Footer">
                    {footer}
                    <div className="Modal_Footer_Actions center-align">

                        <button onClick={closeModal} className="btn waves-effect waves-light">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Modal;