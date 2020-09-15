import React from 'react';



function Card({ children, action, actionContent }) {

    return (
        <div className="card">
            <div className="card-content">
                {children}
            </div>
            {action && (
                <div className="card-action">
                    {actionContent()}
                </div>
            )}
        </div>
    );
}


export default Card;