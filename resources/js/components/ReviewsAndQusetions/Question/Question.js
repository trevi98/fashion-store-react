import React, { useState } from "react";
import "./Question.css";
function Question({ setOpenModal }) {
    return (
        <div className="question">
            <h2>BY hassan</h2>
            <p className="date">date</p>
            <p className="what">
                Question:Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr.
            </p>
            <div className="content">
                <p className="answer">Answer:</p>
                <p className="name">hassan</p>
                <p className="text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebumeirmod{" "}
                </p>
            </div>
            <button
                onClick={() => {
                    setOpenModal(true);
                }}
            >
                Replay
            </button>
        </div>
    );
}

export default Question;
