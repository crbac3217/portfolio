import React from "react"
import {HeaderNav} from '../components/HeaderNav.js'
import Post2D from "../components/Post2d.js";

const Contact = () => {
return(
    <div>
    <div style={{height : "100vh" , width : "100vw"}}>
        <h1>This is the Contact Page!</h1>
    </div>
    <HeaderNav />
    <div style={{height : "100vh" , width : "100vw"}}>
        <h1>This is the Contact Page!</h1>
        <Post2D />
    </div>
    <div style={{height : "100vh" , width : "100vw"}}>
        <h1>This is the Contact Page!</h1>
    </div>
    </div>
)
}

export default Contact;