import React from 'react';
import './Navbar.css';
import piePic from "../../Assets/pie.png";
import Logout from "../Navbar/logout/logout";

const Navbar = (props) => {
    return(
        //this is jsx, it looks like html but it's really JS.
        <nav>
            <img className="nav-img" src={piePic} alt="pie"/>
            <h1>Pie Client</h1>
            <Logout/>

        </nav>
    )
}

export default Navbar;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//? Props are just parameters that we pass through our functional components (jsx)