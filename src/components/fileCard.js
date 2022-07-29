import React from "react";

const FileCard = (props) => {
    return(
        <div className="cardEach">
        <h1 className="thumbTitle text-center montserrat">{props.name}</h1>
        <div className="thumbContain"><img src={props.thumb} className = "imgThumb"></img></div>
        </div>
    )
}

export default FileCard