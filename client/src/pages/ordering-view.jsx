import { useEffect, useState, useContext } from "react";
import React from "react";
import './ordering-view.css';
import { getShoppingCart } from "../service/shopping-cart-service.js";
import OrderForm from "../components/order-form.jsx";
import Footer from "../components/footer.jsx";
import LoadingScreen from '../components/loading-screen.jsx';
import { AuthContext } from '../contexts/authcontext';
import OrderAccountForm from "../components/orderaccountform.jsx";
import { signUserOut } from '../service/auth-service.js';

export default function OrderingView() {
    const [shoppingCart, setShoppingCart] = useState();
    const { user } = useContext(AuthContext);
    const [continueAsGuest, setContinueAsGuest] = useState(false);

    useEffect(() => {
        loadShoppingCart();
    }, []);

    const loadShoppingCart = () => {
        setShoppingCart(getShoppingCart());
    };

    if (!shoppingCart) {
        return <LoadingScreen
            message="Vi henter handlekurven for deg..."
        />
    }

    return (
        <div className="ordering-view-container">
            <div className="ordering-view-total-container">

                {user ?
                    <>
                        <div className="ordering-view-user-profile">
                            <p>Du er pålogget som</p>
                            <div className="ov-user-block">
                                <img src={user.photoURL} alt={user.displayName} />
                                <h3>{user.displayName}</h3>
                                <button onClick={() => signUserOut()}>
                                    Logg deg ut
                                </button>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <OrderAccountForm
                            onContinueAsGuest={() => setContinueAsGuest(true)}
                        />
                    </>
                }

                <OrderForm accountChosen={user ? true : continueAsGuest} />
            </div>
            <Footer />
        </div>
    );
}