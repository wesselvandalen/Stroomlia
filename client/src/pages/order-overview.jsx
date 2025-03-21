import { useEffect, useState } from 'react';
import './order-overview.css';
import { createOrder, getOrderById } from '../service/order-service.js';
import { addDiscountToTotalPrice, getShoppingCart, getTotalPrice } from '../service/shopping-cart-service.js';
import { fetchProductById } from '../service/product-service.js';
import { discountCodeExists } from '../service/discount-codes-service.js';
import React from 'react';
import Footer from '../components/footer.jsx';
import { strokeWidth } from '../config/config.js';
import { makeNumbersReadable } from '../service/utils.js';
import LoadingScreen from '../components/loading-screen.jsx';

export default function OrderOverview() {
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
            setMessage(`Lagt til 10% rabatt på bestillingen din!`);
            const newPrice = addDiscountToTotalPrice(20);
            setTotalPrice(newPrice);
            setDiscoundUsed(true);
        } else {
            setMessage(`Rabattkoden ${discountCode} virker ikke..`);
        }
        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    if (!order) {
        return  <LoadingScreen
            message="Vi lader bestillingen din..."
        />;
    }

    if (!products) {
        return  <LoadingScreen
            message="Vi lader produktene..."
        />;
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
                    <h2 className='overview-title'>Kundeinformasjon</h2>

                    <div className="info-group">
                        <p><strong>Fornavn:</strong> {order.firstName}</p>
                        <p><strong>Etternavn:</strong> {order.lastName}</p>
                        <p><strong>E-post:</strong> {order.email}</p>
                        <p><strong>Telefonnummer:</strong> {order.phonenumber}</p>
                        <p><strong>Adresse:</strong> {order.adres}</p>
                        <p><strong>Land:</strong> {order.country}</p>
                        <p><strong>Postalnummer:</strong> {order.zipcode}</p>
                    </div>
                </div>

                <div className="section">
                    <h2 className='overview-title'>Handlekurven din</h2>

                    {products.map((product) => {
                        const matchingEntry = carrierList.find((carrierProduct) => carrierProduct.productId === product.id);
                        const amount = matchingEntry.amount;

                        return (
                            <div className="product" key={product.id}>
                                {product && (
                                    <div className="shopping-cart-item-container">
                                        <div className="shopping-cart-item-title-image-container">
                                            <img src={product.imagePaths[0]} alt={product.name} />
                                            <div className="shopping-cart-item-info">
                                                <h3>{product.name} (x{amount})</h3>
                                                <p>{makeNumbersReadable(Number(product.price))} kr</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="section">
                    <h2 className='overview-title'>Oversikt</h2>

                    <div className="discount-price-container">

                        <div className='price-container'>
                            <p><strong>Antall produkt:</strong> {carrierList.reduce((total, line) => total + line.amount, 0)}</p>
                            <p><strong>Totalpris:</strong> {makeNumbersReadable(totalPrice)} kr</p>
                        </div>

                        <div className="discount-container">
                            <h2 className='discount-title'>Har du en rabattkode?</h2>
                            <div className="discount-price-container-2">
                                <input
                                    type="text"
                                    placeholder="Rabattkode"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    className="discount-input"
                                />
                                <button onClick={handleApplyCode} className="apply-button">Bruk</button>
                            </div>
                            {message && <p className="message">{message}</p>}
                        </div>

                    </div>
                </div>

                <button onClick={placeOrder} className='apply-button'>
                    Legg inn bestilling
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

            </div>
            <Footer />
        </div>
    );
};