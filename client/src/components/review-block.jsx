import './review-block.css';
import ReviewStars from "./review-stars.jsx";
import {useEffect, useState, React} from "react";
import {fetchUserById} from "../service/user-service.js";
import loadingGIF from '../assets/utils/loading.gif';

export default function ReviewBlock(rating) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser(rating.userId);
    }, [rating.userId]);

    const fetchUser = async (id) => {
        try {
            setUser(await fetchUserById(id));
        } catch (error) {
            console.error("Error fetching the user:", error);
        }
    };

    if (!user) {
        return (
            <div className="loading-products">
                <img src={loadingGIF} alt="Lader GIF" />
                <p>Lader brukeren...</p>
            </div>
        );
    }

    return (
        <div className="rating-block-container">
            <div className="rating-split">
                <p>{user.name}, {rating.numberOfStars}/5</p>
                
            </div>
            <div className="rating-block-content">
                <p>{rating.comment}</p>
            </div>
        </div>
    );
}