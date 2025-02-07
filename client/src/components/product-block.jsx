import './product-block.css';
import ReviewStars from "./review-stars.jsx";
import React from 'react';
import { addItemToShoppingCart } from '../service/shopping-cart-service.js';
import { makeNumbersReadable } from '../service/utils.js';

export default function ProductBlock(product) {

    // Sender brukeren til siden hvor den kan se på produktet
    const handleClick = () => {
        window.location.replace(`/produkter/${product.id}`);
    };

    // Legg til produktet i handlekurven
    const addProductToShoppingcart = () => {
        addItemToShoppingCart(product.id, 1, product.price);
    }

    // Inneholder en rekke med SVG stjerner (eller null)
    const stars = product.numberOfRatings === 0 ? null : <ReviewStars numberOfStars={product.averageRating}/>;
    // Viser antall vurderinger eller en placeholder tekst
    const rating = product.numberOfRatings === 0 ? 'Ingen vurderinger ennå' : product.numberOfRatings;
    // Stilen på teksten avhengig av hvor mange vurderinger finnes
    const style = {
        color: product.numberOfRatings === 0 ? '#888' : '#ffb400'
    }

    // Kutt teksten slik at den passer i produktkortet
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
    
        let truncated = text.slice(0, maxLength);
    
        // Finn siste mellomrom for å unngå å kutte midt i et ord
        let lastSpace = truncated.lastIndexOf(" ");
        if (lastSpace > 0) {
            truncated = truncated.slice(0, lastSpace);
        }
    
        return truncated + "..."; // Legger til ellipsis for å indikere at teksten er kuttet
    }

    return (
        <div className="product-card">
            <div>
                <div className="product-image" onClick={handleClick}>
                    <img src={product.imagePath} alt={product.title} />
                </div>
                <div className="product-details">
                    <div className="title-review-container">
                        <h2 className='product-title' onClick={handleClick}>{product.title}</h2>
                        <div className="rating-container" style={style}>
                            {stars} {rating}
                        </div>
                        <p className='product-description'>{truncateText(product.description, 150)}</p>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <p className='product-price'>{makeNumbersReadable(product.price)} kr</p>
                <button className='product-add-button' onClick={addProductToShoppingcart}>
                    Legg i handlekurv
                </button>
            </div>
        </div>
    );
}