import React from "react";
import Card from "../Cards/Card.js/Card";
import "./ShowMore.css";

function ShowMore({ name }) {
    return (
        <div className="showMore">
            <div className="title-showMore">
                <h2>{name}</h2>
                <button type="submit">Show more</button>
            </div>
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default ShowMore;
