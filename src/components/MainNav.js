import React from "react";
import { Link } from "react-router-dom";
import Main from "./Main.js"

const MainNav = () =>{
    return(
        <nav className="navbar-dark bg-dark bg-opacity-75 navbar-expand rounded w-75 mx-auto mainNavbar">
        <ul className="navbar-nav mainNavList d-flex justify-content-around">
        
                <li className="nav-item"><a className = "bg-transparent border-0 text-left lead mainNavAnchor" href="/Contact">2D</a></li>
                <li className="nav-item"><button>3D</button></li>
                <li className="nav-item"><button>Game</button></li>
            </ul> 
        </nav>     
    )
}

export default MainNav