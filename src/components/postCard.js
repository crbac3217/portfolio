import React from "react";

const PostCard = (props) => {
    return(
        <div className="col">
        {/* <h1 className="thumbTitle text-center montserrat">{props.name}</h1> */}
        <div className="postThumbContain"><img src={props.thumb} className = "img-fluid"></img></div>
        </div>
    )
}

export default PostCard