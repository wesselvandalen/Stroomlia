import './special-message.css';
import emoji from '../assets/utils/heart.png';

export default function SpecialMessage() {

    return (
        <div className="sm-container">
            <div className="sm-content">
                
                <p>
                    Livet er bedre når man deler med hverandre! Send en gave til en venn(inne)!
                </p>
                <img src={emoji} alt="Hjerte emoji" />

            </div>
        </div>
    );
}