import React from 'react';
import './logout.css';
import logout from '../../../Assets/exit.png';

const Logout = (props) => {
    return(
        <img className="logout-img" src={logout} alt="logout" onClick={props.logout} />
    )
};

export default Logout;