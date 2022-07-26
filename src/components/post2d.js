import React, {useState, useEffect} from "react";
import Datacaller from "../services/datacaller.js";
import { Link } from "react-router-dom";

const List2D = props => {
    // const [posts, setPosts] = useState([]);
    // const [searchName, setSearchName] = useState("");
    // const [searchTag, setSearchTag] = useState("");
    // const [searchType, setSearchType] = useState("");

    useEffect(() => {
        findByType();
    }, []);

    function findByType(){
        Datacaller.findType("3D").then(response => {
            console.log("at least we doin something")
            console.log(response.data);
            setPostThumbnails(response.data.posts)
        }).catch(e => {
            console.log(e)
        })
    }

    const setPostThumbnails = () => {

    }
    return(
        <div>
        <h1>
            hellers
        </h1>
        <button
        className="btn"
        onMouseDown={findByType}>
            searcheroonie!
        </button>
        </div>
    )
}

export default List2D;