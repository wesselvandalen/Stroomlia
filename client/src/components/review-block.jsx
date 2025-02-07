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
        <div className={"rating-block-container"}>
            <img className={"rating-block-user-profile-image"} src={user.imagePath} alt={user.name}/>
            <div className="rating-block-content">
                <p>{user.name}</p>
                <ReviewStars
                    numberOfStars={rating.numberOfStars}
                />
                <p>{rating.comment}</p>
            </div>
        </div>
    );
}