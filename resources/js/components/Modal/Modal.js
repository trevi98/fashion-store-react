import React from "react";
import A from "../../images/he16088he0061-2.png";
import "./Modal.css";
import Modal from "react-modal";
import Rate from "../Rate/Rate";
function Modals({
    setOpenModal,
    openModal,
    oneReview,
    askQuestion,
    setOneReview,
    setAskQuestion,
}) {
    const theModal = oneReview
        ? {
              info: "Review",
              submit: "Review",
          }
        : askQuestion
        ? {
              info: "Your Question",
              submit: "Question",
          }
        : {
              info: "Review",
              submit: "Replay",
          };
    return (
        <Modal className="scale-up-center" isOpen={openModal}>
            <div className="modal">
                <button
                    className="exit"
                    onClick={() => {
                        setOpenModal(false);
                        setOneReview(false);
                        setAskQuestion(false);
                    }}
                >
                    X
                </button>
                <div className="container">
                    <div className="image">
                        <img src={A} />
                    </div>
                    <div className="content">
                        <h4>Ask a question</h4>
                        <p>
                            A-Line/Princess Chiffon Lace V-neck Sleeveless
                            Floor-Length Wedding Dresses{" "}
                        </p>
                        {oneReview && (
                            <div className="rating">
                                <p>Rating</p>
                                <Rate />
                            </div>
                        )}
                        <form>
                            <div className="ask-input">
                                <label>Name</label>
                                <input type="text" />
                            </div>
                            {(oneReview || askQuestion) && (
                                <div className="ask-input">
                                    <label>Email</label>
                                    <input type="email" />
                                </div>
                            )}
                            {oneReview && (
                                <div className="ask-input">
                                    <label>title</label>
                                    <input type="text" />
                                </div>
                            )}
                            <div className="ask-input">
                                <label>{theModal.info}</label>
                                <textarea></textarea>
                            </div>
                            <div className="ask-submit">
                                <button>Submit {theModal.submit}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default Modals;
