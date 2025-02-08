import {useEffect, useState} from "react";
import React from "react";
import './ordering-view.css';
import {getShoppingCart} from "../service/shopping-cart-service.js";
import OrderForm from "../components/order-form.jsx";
import Footer from "../components/footer.jsx";

export default function OrderingView() {
    const [shoppingCart, setShoppingCart] = useState();

    useEffect(() => {
        loadShoppingCart();
    }, []);

    const loadShoppingCart = () => {
        setShoppingCart(getShoppingCart());
    };

    if (!shoppingCart) {
        return <div>Loading shoppingcart...</div>;
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