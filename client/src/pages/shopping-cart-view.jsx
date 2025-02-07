import './shopping-cart-view.css';
import ShoppingCartItem from "../components/shopping-cart-item.jsx";
import { useEffect, useState, React } from "react";
import { getShoppingCart, getTotalPrice } from "../service/shopping-cart-service.js";

export default function ShoppingCartView() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchShoppingCartItems();
    }, []);

    const fetchShoppingCartItems = () => {
        const items = getShoppingCart();
        setCartItems(items.products);
    };

    const handleOrderButton = () => {
        window.location.replace(`/order/`);
    };

    if (!cartItems) {
        return <div style={{ color: 'black' }}>Vi lader handlekurven for deg...</div>;
    }

    if (cartItems.length === 0) {
        return <div className={"shopping-cart-view"}>
            <div className="shopping-cart-container">
                <div className="shopping-cart-content">
                    <div className="bag-info-container">
                        <div>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h2>Handlekurv</h2>
                        </div>
                        <p>Legg til produkt i handlekurven.</p>
                        <p>Det er ganske tomt her ute...</p>
                    </div>
                </div>
            </div>
        </div>
    };

    return (
        <div className="shopping-cart-view">
            <div className="shopping-cart-container">
                <div className="shopping-cart-content">
                    <div className="bag-info-container">
                        <div>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h2>Handlekurv</h2>
                        </div>
                        <p>Legg til produkt i handlekurven.</p>
                    </div>
                    <div className="shopping-cart-items">
                        {cartItems.map((product) => {
                            return <ShoppingCartItem
                                key={product.productId}
                                productId={product.productId}
                                amount={product.productAmount}
                            />
                        })}
                    </div>
                    <div className="shopping-cart-summary">
                        <button className="shopping-cart-view-order-button" onClick={handleOrderButton}>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.5 9.5L7.5 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Legg inn bestilling
                        </button>
                        <p className={"total-price"}>{getTotalPrice()} kr <span className={"tax-text"}>*frakt beregnes etterpå</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}