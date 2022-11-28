import React from "react";
import "./Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import A from "../../images/he16088he0061-2.png";
import Rate from "../Rate/Rate";
import { AiOutlineHeart } from "react-icons/ai";
import ShowMore from "../ShowMore/ShowMore";
import ReviewsAndQuestions from "../ReviewsAndQusetions/ReviewsAndQuestions";

function Product() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    vertical: false,
                    verticalSwiping: false,
                    infinite: false,
                    swipeToSlide: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    vertical: false,
                    verticalSwiping: false,
                    infinite: false,
                    swipeToSlide: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    vertical: false,
                    verticalSwiping: false,
                    infinite: false,
                    swipeToSlide: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                    infinite: false,
                    swipeToSlide: true,
                },
            },
        ],
    };

    return (
        <div className="product">
            <div className="container">
                <Slider {...settings}>
                    <img src={A} />
                    <img src={A} />
                    <img src={A} />
                    <img src={A} />
                    <img src={A} />
                    <img src={A} />
                    <img src={A} />
                    <img src={A} />
                </Slider>
                <div className="content">
                    <div className="image">
                        <img src={A} />
                    </div>
                    <div className="info">
                        <p className="title">
                            {" "}
                            A-Line/Princess Chiffon Lace V-neck Sleeveless
                            Floor-Length Wedding Dresses{" "}
                        </p>

                        <div className="sold">
                            <div className="price">
                                <h4>$200</h4>
                                <p>$260</p>
                                <button>(23% off)</button>
                            </div>
                            <div className=" rating">
                                Rate: <Rate />
                            </div>
                        </div>
                        <div className="color">
                            <h2>
                                {" "}
                                Color: <p>Show as picture</p>
                            </h2>
                            <div className="items">
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                        <div className="size">
                            <label for="size">Size:</label>
                            <select name="sizes">
                                <option disabled hidden>
                                    Select Size:
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="add">
                            <div className="button-add">
                                <button>Add to cart</button>
                            </div>
                            <div className="inc-love">
                                <div className="inc-dic">
                                    <p className="increment">+</p>
                                    <p className="num">2</p>
                                    <p className="dicrement">-</p>
                                </div>
                                <AiOutlineHeart className="heart" />
                            </div>
                        </div>
                        <div className="details">
                            <p className="title">Deatails:</p>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ShowMore name="NEW COLLECTION" />
            <ReviewsAndQuestions />
        </div>
    );
}

export default Product;
