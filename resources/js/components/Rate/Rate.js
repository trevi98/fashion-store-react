import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

function Rate() {
    const [rating, setRating] = useState(0);
    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue);
    };
    return (
        <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            onStarClick={onStarClick}
        />
    );
}

export default Rate;
