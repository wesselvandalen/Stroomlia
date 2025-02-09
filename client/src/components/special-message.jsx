import './special-message.css';
import emoji from '../assets/utils/heart.png';

export default function SpecialMessage() {

    return (
        <div className="sm-container">
            <div className="sm-content">
                
                <p>
                    Livet er bedre når man deler med hverandre! Bruk koden VENN for 5% rabatt!
                </p>
                <img src={emoji} alt="Hjerte emoji" />

            </div>
        </div>
    );
}