import React, { useState } from "react";
import img from "../../../images/he16088he0061-2.png";
import Rate from "../../Rate/Rate";
import "./Card.css";
import { useHistory, useLocation, Link } from "react-router-dom";
function Card() {
    const history = useHistory();
    const location = useLocation();

    return (
        <div
            className="card"
            onClick={() => {
                history.push("/product");
            }}
        >
            <img src={img} />
            <div className="content">
                <p>
                    A-Line/Princess Chiffon Lace V-neck Sleeveless Floor-Length
                    Wedding Dresses
                </p>
                <div className="info">
                    <div className="price">
                        <h4>$200</h4>
                        <p>$260</p>
                    </div>
                </div>
                <div className="rating">
                    <Rate />
                    <p>0 (Reviews)</p>
                </div>
                <div className="add">
                    <button type="submit">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
