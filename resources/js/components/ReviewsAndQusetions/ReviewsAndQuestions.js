import React, { useState } from "react";
import "./ReviewsAndQuestions.css";
import Rate from "../Rate/Rate";
import Question from "./Question/Question";
import Review from "./Review/Review";
import Modals from "../Modal/Modal";
function ReviewsAndQuestions() {
    const [isQusetions, setIsQusetions] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [askQuestion, setAskQuestion] = useState(false);
    const [oneReview, setOneReview] = useState(false);
    let question = isQusetions
        ? {
              borderBottom: "2px solid #000000",
              color: "#000000",
          }
        : null;
    let review = !isQusetions
        ? {
              borderBottom: "2px solid #000000",
              color: "#000000",
          }
        : null;
    return (
        <div className="rev-que">
            <div className="title">
                <h2
                    style={review}
                    onClick={() => {
                        setIsQusetions(false);
                    }}
                >
                    Reviews
                </h2>
                <h2
                    style={question}
                    onClick={() => {
                        setIsQusetions(true);
                    }}
                >
                    Questions
                </h2>
            </div>
            {isQusetions ? (
                <div className="questions">
                    <div
                        className="ask"
                        onClick={() => {
                            setAskQuestion(true);
                            setOpenModal(true);
                        }}
                    >
                        <p>?</p>
                        <h4>Ask a question</h4>
                    </div>
                    <hr />
                    <Question setOpenModal={setOpenModal} />
                    <Question setOpenModal={setOpenModal} />
                    <Question setOpenModal={setOpenModal} />
                </div>
            ) : (
                <div className="reviews">
                    <div className="all-rate">
                        <h4>Overall Rating</h4>
                        <div className="rate">
                            5 <Rate />
                        </div>
                        <p>Base on 20 reviews</p>
                        <button
                            onClick={() => {
                                setOneReview(true);
                                setOpenModal(true);
                            }}
                        >
                            Write a review
                        </button>
                    </div>
                    <Review />
                    <Review />
                    <Review />
                </div>
            )}
            <div className="show">
                <button>Show more</button>
            </div>
            <Modals
                setOpenModal={setOpenModal}
                openModal={openModal}
                askQuestion={askQuestion}
                oneReview={oneReview}
                setAskQuestion={setAskQuestion}
                setOneReview={setOneReview}
            />
        </div>
    );
}

export default ReviewsAndQuestions;
