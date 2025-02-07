import './product-block.css';
import ReviewStars from "./review-stars.jsx";
import React from 'react';


export default function ProductBlock(product) {
    const handleClick = () => {
        window.location.replace(`/produkter/${product.id}`);
    };

    const stars = product.numberOfRatings === 0 ? null : <ReviewStars numberOfStars={product.averageRating}/>;
    const rating = product.numberOfRatings === 0 ? 'noreviews' : product.numberOfRatings;
    const style = {
        color: product.numberOfRatings === 0 ? '#888' : '#ffb400'
    }
    return (
        <div className="product-card" onClick={handleClick}>
            <div className="product-image">
                <img src={product.imagePath} alt={product.title} />
            </div>
            <div className="product-details">
                <div className="title-review-container">
                    <h2>{product.title}</h2>
                    <div className="rating-container" style={style}>
                        {stars} ({rating})
                    </div>
                    <p>{product.price} kr</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
}