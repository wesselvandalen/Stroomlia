import { useParams } from 'react-router-dom';
import Footer from '../components/footer.jsx';
import './order-succes.css';
import { useEffect, useState } from 'react';
import { getOrderById } from '../service/order-service.js';
import ConfettiExplosion from 'react-confetti-explosion';
import { getShoppingCart } from '../service/shopping-cart-service.js';
import { fetchProductById } from '../service/product-service.js';
import React from 'react';
import { strokeWidth } from '../service/config.js';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { makeNumbersReadable } from '../service/utils.js';

export default function OrderSucces() {
    const { orderId } = useParams();
    const [order, setOrder] = useState();
    const [products, setProducts] = useState(null);
    const { width, height } = useWindowSize()

    useEffect(() => {
        fetchOrderById(orderId);
    }, []);

    function getProductIds(cart) {
        return cart.products.map((product) => product.productId);
    }

    const fetchOrderById = async (id) => {
        const fetchedOrder = await getOrderById(id);
        setOrder(fetchedOrder);
        const ids = getProductIds(getShoppingCart());
        fetchProductsByIds(ids);
        localStorage.removeItem('orderData');
        localStorage.removeItem('shopping-cart');
    };

    async function fetchProductsByIds(ids) {
        let fetchedProducts = [];
        for (let i = 0; i < ids.length; i++) {
            const fetchedProduct = await fetchProductById(ids[i]);
            console.log(fetchedProduct);
            fetchedProducts.push(fetchedProduct);
        }
        setProducts(fetchedProducts);
    }

    if (!order) {
        return <div>loading order...</div>
    };

    if (!products) {
        return <div>Loading products...</div>
    }

    return (
        <div className="final-order-container">
            <div className="minimal-order-container">

                <div className="overview-info-container">
                    <div>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L17.25 19L14.75 21L12 19L9.25 21L6.75 19L4 21V7.8Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h2>Kvitteringen din</h2>
                    </div>
                    <p>Takk for bestillingen! Din nye teknologi er snart på vei til deg.</p>
                </div>

                <h3>Hei {order.orderPersonalia.firstName},</h3>
                <p>You placed order #{order.id}. Here are your products:</p>

                <Confetti
                    width={width-20}
                    height={height-20}
                />

                <div className="minimal-order-details">
                    {products.map((product) => (
                        <div className="product" key={product.id}>
                            {product && (
                                <div className="shopping-cart-item-container">
                                    <div className="shopping-cart-item-title-image-container">
                                        <img src={product.imagePaths[0]} alt={product.name} />
                                        <div className="shopping-cart-item-info">
                                            <h3>{product.name}</h3>
                                            <p>{makeNumbersReadable(Number(product.price))} kr</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="minimal-order-total">
                    <p>Totalpris: {makeNumbersReadable(order.totalPrice)} kr</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}