import React from "react";
import { useState } from "react";
import "./nav.css"
import  logo from "./NW-logo.svg"
import {AiOutlineClose  } from 'react-icons/ai';
const NavBar = () => {
const [toggleDatabase, setToggleDatabase] = useState (false)
const [toggleNavbar, setToggleNavbar] = useState(true)
    return(

        <div className={toggleNavbar ? "outer-box" : "outer-box-mini"}>
            <button className={toggleNavbar ? "toggle-navbar-btn": "toggle-navbar-btn-mini"}onClick={() => setToggleNavbar(!toggleNavbar)}> <i className={toggleNavbar ? 'fas fa-angle-up ': 'fas fa-angle-down '}></i></button>
            <div className={toggleNavbar ? "navbar" : "navbar-mini"}>  </div>
            <ul className={toggleNavbar ? "ul-nav" : "ul-nav-mini"} >
                <li className="home-li nav-li">Home</li>
                <li className="database-li nav-li" onClick={() => setToggleDatabase(!toggleDatabase)}>Database <i className={toggleDatabase ?'fas fa-angle-up database-li' : 'fas fa-angle-down database-li '} ></i>  
                </li>
                
               {toggleDatabase ?  <div className="database-open">   
               <h4 className="weapons-title">Weapons</h4>
               <ul className="display-flex"> 
                    <li className="weapon-list">One-handed</li>
                    <li className="weapon-list">Two-handed</li>
                    <li className="weapon-list">Ranged</li>
                    <li className="weapon-list">Magical</li>
           
               </ul>
               <h4 className="tools-title">Tools</h4>
               <ul className="display-flex"> 
                    <li className="weapon-list">Gathering</li>
                    <li className="weapon-list">Instruments</li>
               </ul>
               <h4 className="apparel-title">Apparel</h4>
               <ul className="display-flex"> 
                    <li className="weapon-list">Heavy Armor</li>
                    <li className="weapon-list">Medium Armor</li>
                    <li className="weapon-list">Light Armor</li>
                    <li className="weapon-list">Earrings</li>
                    <li className="weapon-list">Amulets</li>
                    <li className="weapon-list">Rings</li>
                    <li className="weapon-list">Bags</li>
               </ul>
               <h4 className="resources-title">Resources</h4>
               <ul className="display-flex"> 
                    <li className="weapon-list">Raw resources</li>
                    <li className="weapon-list">Arcana</li>
                    <li className="weapon-list">Potion Reagents</li>
                    <li className="weapon-list">Cooking Ingredients</li>
                    <li className="weapon-list">RefinedResources</li>
                    <li className="weapon-list">Components</li>
                    <li className="weapon-list">Craft Mods</li>
                    <li className="weapon-list">Runeglass Components</li>
               </ul>
               <h4 className="consumables-title">Consumables</h4>
               <ul className="display-flex"> 
                    <li className="weapon-list">Potions</li>
                    <li className="weapon-list">Attribute Bonus Food</li>
                    <li className="weapon-list">Trade Skill Bonus Foods</li>
                    <li className="weapon-list">Recovery Foods</li>
                    <li className="weapon-list">Bait</li>

               </ul>
                 <div className="close-btn"> <AiOutlineClose onClick={() => setToggleDatabase(!toggleDatabase) }color="orange"></AiOutlineClose></div>
                </div> : ""}
                <li className="nav-li">Cooking</li>
                <li className="nav-li">Engineering</li>
            </ul>

      
            <img src={logo} alt="logo"  className={toggleNavbar ? "nw-logo": "nw-logo-mini"}/>
            <div className="inner-box"></div>
          </div>
    )
}

export default NavBar