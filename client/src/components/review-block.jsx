import './review-block.css';
import ReviewStars from "./review-stars.jsx";
import {useEffect, useState, React} from "react";
import {fetchUserById} from "../service/user-service.js";

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
        return <div>Lader brukeren...</div>;
    }

    return (
        <div className="rating-block-container">
            <div className="rating-split">
                <img className="rating-block-user-profile-image" src={user.imagePath} alt={user.name}/>
                <p>{user.name}</p>
            </div>
            <div className="rating-block-content">
                <ReviewStars
                    numberOfStars={rating.numberOfStars}
                />
                <p>{rating.comment}</p>
            </div>
        </div>
    );
}