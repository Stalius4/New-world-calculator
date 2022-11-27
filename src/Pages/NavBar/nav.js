import React from "react";
import { useState } from "react";
import "./nav.css"
import  logo from "./NW-logo.svg"

const NavBar = () => {
const [toggleDatabase, setToggleDatabase] = useState (false)
const [toggleNavbar, setToggleNavbar] = useState(false)
    return(

        <div className={toggleNavbar ? "outer-box" : "outer-box-mini"}>
            <button className={toggleNavbar ? "toggle-navbar-btn": "toggle-navbar-btn-mini"}onClick={() => setToggleNavbar(!toggleNavbar)}> <i className={toggleNavbar ? 'fas fa-angle-up ': 'fas fa-angle-down '}></i></button>
            <div className="navbar">
                <div className="inner-navbar">
 <ul >
  <li className="home-li">Home</li>
  <li className="database-li" onClick={() => setToggleDatabase(!toggleDatabase)}>Database <i className={toggleDatabase ?'fas fa-angle-up database-li' : 'fas fa-angle-down database-li '} ></i></li>
  <li>Cooking</li>
  <li>Engineering</li>
</ul>
</div>
            </div>
            <img src={logo} alt="logo"  className={toggleNavbar ? "nw-logo": "nw-logo-mini"}/>
            <div className="inner-box"></div></div>
    )
}

export default NavBar