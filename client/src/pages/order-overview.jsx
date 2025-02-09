import { useEffect, useState } from 'react';
import './order-overview.css';
import { createOrder, getOrderById } from '../service/order-service.js';
import { addDiscountToTotalPrice, getShoppingCart, getTotalPrice } from '../service/shopping-cart-service.js';
import { fetchProductById } from '../service/product-service.js';
import { discountCodeExists } from '../service/discount-codes-service.js';
import React from 'react';
import Footer from '../components/footer.jsx';
import { strokeWidth } from '../service/config.js';

const OrderOverview = () => {
    const [products, setProducts] = useState();
    const [order, setOrder] = useState();
    const [carrierList, setCarrierList] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [discountCode, setDiscountCode] = useState('');
    const [message, setMessage] = useState('');
    const [discountUsed, setDiscoundUsed] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem("orderData");
        if (data) {
            const parsedData = JSON.parse(data);
            setOrder(parsedData.orderPersonalia);
            setCarrierList(parsedData.productAmountCarrierList);
            fetchProductsByIds(getProductIds(getShoppingCart()));
            setTotalPrice(getTotalPrice());
        }
    }, []);

    function getProductIds(cart) {
        return cart.products.map((product) => product.productId);
    }

    async function fetchProductsByIds(ids) {
        let fetchedProducts = [];
        for (let i = 0; i < ids.length; i++) {
            const fetchedProduct = await fetchProductById(ids[i]);
            fetchedProducts.push(fetchedProduct);
        }
        setProducts(fetchedProducts);
    }

    async function placeOrder() {
        const orderObject = localStorage.getItem('orderData');
        const response = await createOrder(JSON.parse(orderObject));
        window.location.replace(`/bestilling/${response.id}`);
    }


    const handleApplyCode = () => {
        if (discountCodeExists(discountCode) && !discountUsed) {
            setMessage(`Added 20% discount on top of your order!`);
            const newPrice = addDiscountToTotalPrice(20);
            setTotalPrice(newPrice);
            setDiscoundUsed(true);
        } else {
            setMessage(`Discount code ${discountCode} does not work..`);
        }
    };

    if (!order) {
        return <div>Lader bestillingen din...</div>;
    }

    if (!products) {
        return <div>Lader produktene...</div>;
    }

    return (
        <div className='order-overview-container'>
            <div className="order-overview">

                <div className="overview-info-container">
                    <div>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12M14 11H8M10 15H8M16 7H8M14.5 19L16.5 21L21 16.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h2>Bestillingsoversikt</h2>
                    </div>
                    <p>Nesten i mål! Se over bestillingen din før du sikrer deg den nyeste teknologien.</p>
                </div>

                <div className="section">
                    <h2>Customer Information</h2>

                    <div className="form-group">
                        <label htmlFor="firstName"><strong>First Name:</strong></label>
                        <input type="text" id="firstName" value={order.firstName} readOnly />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName"><strong>Last Name:</strong></label>
                        <input type="text" id="lastName" value={order.lastName} readOnly />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" id="email" value={order.email} readOnly />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneNumber"><strong>Phone Number:</strong></label>
                        <input type="tel" id="phoneNumber" value={order.phonenumber} readOnly />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address"><strong>Address:</strong></label>
                        <input type="text" id="address" value={order.adres} readOnly />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country"><strong>Country:</strong></label>
                        <input type="text" id="country" value={order.country} readOnly />
                    </div>

                    <div className="form-group">
                        <label htmlFor="zipcode"><strong>Zip Code:</strong></label>
                        <input type="text" id="zipcode" value={order.zipcode} readOnly />
                    </div>
                </div>

                <div className="section">
                    <h2>Product Information</h2>
                    {products.map((product, index) => {
                        const matchingEntry = carrierList.find((carrierProduct) => carrierProduct.productId === product.id);
                        const amount = matchingEntry.amount;

                        return (
                            <div className="product" key={product.id}>
                                {product && (
                                    <>
                                        <img src={product.imagePath} alt={product.name} />
                                        <div className="product-info">
                                            <p><strong>Product Name:</strong> {product.name}</p>
                                            <p><strong>Description:</strong> {product.description}</p>
                                            <p><strong>Price:</strong> €{product.price.toFixed(2)}</p>
                                            <p><strong>Amount:</strong> {amount}</p>
                                            <p><strong>Average Rating:</strong> {product.averageRating} stars</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="section">
                    <h2>Order Summary</h2>
                    <div className="discount-price-container">
                        <div className='price-container'>
                            <p><strong>Total Amount:</strong> {carrierList.reduce((total, line) => total + line.amount, 0)} item{(products.length > 1) ? 's' : ''}</p>
                            <p><strong>Total Price:</strong> €{totalPrice}</p>
                        </div>
                        <div className="discount-container">
                            <h2 className='discount-title'>Got a discount code?</h2>
                            <div className="discount-price-container">
                                <input
                                    type="text"
                                    placeholder="Discount code"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    className="discount-input"
                                />
                                <button onClick={handleApplyCode} className="apply-button">
                                    Apply
                                </button>
                            </div>
                            {message && <p className="message">{message}</p>}
                        </div>
                    </div>
                </div>
                <button onClick={placeOrder} className='apply-button'>Place order</button>

            </div>
            <Footer />
        </div>
    );
};

export default OrderOverview;