import {useEffect, useState} from "react";
import React from "react";
import './ordering-view.css';
import {getShoppingCart} from "../service/shopping-cart-service.js";
import OrderForm from "../components/order-form.jsx";
import Footer from "../components/footer.jsx";
import LoadingScreen from '../components/loading-screen.jsx';

export default function OrderingView() {
    const [shoppingCart, setShoppingCart] = useState();

    useEffect(() => {
        loadShoppingCart();
    }, []);

    const loadShoppingCart = () => {
        setShoppingCart(getShoppingCart());
    };

    if (!shoppingCart) {
        return  <LoadingScreen
            message="Vi henter handlekurven for deg..."
        />;
    }

    return (
        <div className="ordering-view-container">
            <div className="ordering-view-total-container">
                <OrderForm/>
            </div>
            <Footer/>
        </div>
    );
}