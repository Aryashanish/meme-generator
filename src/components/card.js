import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
    const navigate = useNavigate();
    return (
        <div className="main-card">
            <div className="img">
                <img src={props.url} alt="not found"></img>
            </div>
            <h3>{props.title}</h3>
            <button
                onClick={(e) => navigate(`/edit?url=${props.url}`)}
                className="btn">
                Edit
            </button>
        </div>
    )
}

export default Card;