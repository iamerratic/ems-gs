import React from 'react';

import { Link } from 'react-router-dom';


function SignOutLinks() {

    return (
        <React.Fragment>
            <li><Link to="/signin">SignIn</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
            <li><a href="collapsible.html" className="btn btn-primary">Login With Google</a></li>
        </React.Fragment>
    );
}


export default SignOutLinks;