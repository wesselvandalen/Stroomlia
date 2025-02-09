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

export default function OrderSucces() {
    const { orderId } = useParams();
    const [order, setOrder] = useState();
    const [isExploding, setIsExploding] = useState(false);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetchOrderById(orderId);
        setIsExploding(true);
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
                {isExploding && <ConfettiExplosion />}
                <div className="minimal-order-details">
                    {products.map((product) => (
                        <div className="order-product-item" key={product.id}>
                            <div className="order-product-image">
                                <img src={product.imagePath} alt={product.name} />
                            </div>
                            <div className="order-product-info">
                                <h4>{product.name}</h4>
                                <p className="product-description">{product.description}</p>
                                <p className="product-rating">
                                    {product.averageRating} / 5 ⭐ ({product.numberOfRatings} reviews)
                                </p>
                                <p className="product-price">Price: €{product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="minimal-order-total">
                    <p>Total: €{order.totalPrice.toFixed(2)}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}