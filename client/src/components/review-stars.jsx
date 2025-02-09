import './review-stars.css';
import React from 'react';
import star from '../assets/utils/star.png';

export default function ReviewStars(numberOfStars) {
    return (
        <div className={"review-stars-container"}>
            <div className="review-stars-content">
                {Array.from({ length: numberOfStars.numberOfStars }).map((_, index) => (
                    <img src={star} alt="Stjerne ikon" key={index} className='star-icon' />
                ))}
            </div>
        </div>
    );
}