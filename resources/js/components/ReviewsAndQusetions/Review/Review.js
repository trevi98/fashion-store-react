import React from "react";
import "./Review.css";
import Rate from "../../Rate/Rate";
function Review() {
    return (
        <div className="answer">
            <div className="info">
                <p className="userNmae"></p>
                <div className="content">
                    <div className="detailes">
                        <p className="name">name</p>
                        <p className="date">date</p>
                    </div>
                    <div className="rate">
                        <Rate />
                    </div>
                </div>
            </div>
            <div className="text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata
            </div>
        </div>
    );
}

export default Review;
