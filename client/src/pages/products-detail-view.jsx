import './products-detail-view.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById, fetchProducts, getRandomItems, getRandomProductsByCategory } from "../service/product-service.js";
import Footer from '../components/footer.jsx';
import ReviewBlock from "../components/review-block.jsx";
import { addItemToShoppingCart } from "../service/shopping-cart-service.js";
import ProductBlock from '../components/product-block.jsx';
import { makeNumbersReadable } from '../service/utils.js';

export default function ProductDetailView() {
    const strokeWidth = 2;
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [amount, setAmount] = useState(1);
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        fetchProduct(productId);
    }, [productId]);

    const fetchProduct = async (id) => {
        try {
            const productData = await fetchProductById(id);
            getProductsByCategory();
            setProduct(productData);
        } catch (error) {
            console.error("Error fetching the product:", error);
        }
    };

    const handleInputChange = (event) => {
        setAmount(event.target.value);
    };

    const getProductAmountInput = () => {
        return amount < 1 ? 1 : amount;
    };

    const handleShoppingButton = () => {
        addItemToShoppingCart(product.id, Number(getProductAmountInput()), product.price);
    };

    const preventTyping = (event) => {
        event.preventDefault(); // Prevent any keypresses
    };

    if (!product || !randomProducts) {
        return <div>Loading your product...</div>;
    }

    async function getProductsByCategory() {
        const data = await fetchProducts();
        setRandomProducts(getRandomItems(data, 3));
    }

    let productRatings = product.ratings;
    if (productRatings.length > 5) {
        productRatings = productRatings.slice(0, 5);
    }

    const ratings = product.numberOfRatings === 0 ? 'Ingen anmeldelser ennå' : product.numberOfRatings;
    
    function checkAvailability() {
        const status = product.productStatus;

        if (status === "AVAILABLE") {
            return 'På lager';
        } else if (status === "") {
            return "";
        } else {
            return "Ikke på lager";
        }
    }

    function parseStringToList(inputString) {
        try {
            // Gjør Stringen om til en liste med JSON.parse
            const list = JSON.parse(inputString);
            
            // Sjekk om det er en liste
            if (Array.isArray(list)) {
                return list;
            } else {
                throw new Error("Parsed value is not an array");
            }
        } catch (error) {
            console.error("Invalid input string:", error);
            return [];
        }
    }

    return (
        <div className="product-detail-view-container">
            <div className="product-detail-view-total-container">

                <div className="product-detail-view-content">

                    <h3 className="product-detail-view-name">{product.name}</h3>
                    <div className="product-detail-view-stars">
                        <p className='number-of-ratings'>{ratings} anmelderser med en gjennomsnitt på {product.averageRating} stjerner</p>
                    </div>

                    <div className="product-info-split">
                        <div className="product-detail-view-image-container">
                            <img src={product.imagePaths[0]} alt={product.name} className="product-detail-view-product-image" />
                        </div>

                        <div className="product-detail-view-information">

                            <p className='product-availability'>
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                På lager
                            </p>

                            <p className="product-detail-view-price">{makeNumbersReadable(product.price)} kr</p>
                            <p className="product-detail-view-description">{product.description}</p>
                            <div className="product-add-button-container">
                                <input
                                    className={"amount-input"}
                                    type="number"
                                    id={"amount-input"}
                                    placeholder={"1"}
                                    value={amount}
                                    min="1"
                                    onChange={handleInputChange}
                                    onKeyDown={preventTyping}
                                />
                                <button className="product-detail-view-button" onClick={handleShoppingButton}>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.52 2.64L3.96 4.72C3.65102 5.13198 3.49652 5.33797 3.50011 5.51039C3.50323 5.66044 3.57358 5.80115 3.69175 5.89368C3.82754 6 4.08503 6 4.6 6H19.4C19.915 6 20.1725 6 20.3083 5.89368C20.4264 5.80115 20.4968 5.66044 20.4999 5.51039C20.5035 5.33797 20.349 5.13198 20.04 4.72L18.48 2.64M5.52 2.64C5.696 2.40533 5.784 2.288 5.89552 2.20338C5.9943 2.12842 6.10616 2.0725 6.22539 2.03845C6.36 2 6.50667 2 6.8 2H17.2C17.4933 2 17.64 2 17.7746 2.03845C17.8938 2.0725 18.0057 2.12842 18.1045 2.20338C18.216 2.288 18.304 2.40533 18.48 2.64M5.52 2.64L3.64 5.14666C3.40254 5.46328 3.28381 5.62159 3.1995 5.79592C3.12469 5.95062 3.07012 6.11431 3.03715 6.28296C3 6.47301 3 6.6709 3 7.06666L3 18.8C3 19.9201 3 20.4802 3.21799 20.908C3.40973 21.2843 3.71569 21.5903 4.09202 21.782C4.51984 22 5.07989 22 6.2 22L17.8 22C18.9201 22 19.4802 22 19.908 21.782C20.2843 21.5903 20.5903 21.2843 20.782 20.908C21 20.4802 21 19.9201 21 18.8V7.06667C21 6.6709 21 6.47301 20.9628 6.28296C20.9299 6.11431 20.8753 5.95062 20.8005 5.79592C20.7162 5.62159 20.5975 5.46328 20.36 5.14667L18.48 2.64M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Legg i handlekurven
                                </button>
                            </div>

                            <ul className='product-perks'>
                                <li>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 21V13.6C9 13.0399 9 12.7599 9.109 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75993 12 10.04 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M2 9.5L11.04 2.72C11.3843 2.46181 11.5564 2.33271 11.7454 2.28294C11.9123 2.23902 12.0877 2.23902 12.2546 2.28295C12.4436 2.33271 12.6157 2.46181 12.96 2.72L22 9.5M4 8V17.8C4 18.9201 4 19.4802 4.21799 19.908C4.40974 20.2843 4.7157 20.5903 5.09202 20.782C5.51985 21 6.0799 21 7.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V8L13.92 3.44C13.2315 2.92361 12.8872 2.66542 12.5091 2.56589C12.1754 2.47804 11.8246 2.47804 11.4909 2.56589C11.1128 2.66542 10.7685 2.92361 10.08 3.44L4 8Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className='perk-span'>Gratis</span>
                                    hjemmelevering
                                </li>
                                <li>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10H22V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.0799 19 5.2 19H11M14.5 21L16.525 20.595C16.7015 20.5597 16.7898 20.542 16.8721 20.5097C16.9452 20.4811 17.0147 20.4439 17.079 20.399C17.1516 20.3484 17.2152 20.2848 17.3426 20.1574L21.5 16C22.0523 15.4477 22.0523 14.5523 21.5 14C20.9477 13.4477 20.0523 13.4477 19.5 14L15.3426 18.1574C15.2152 18.2848 15.1516 18.3484 15.101 18.421C15.0561 18.4853 15.0189 18.5548 14.9903 18.6279C14.958 18.7102 14.9403 18.7985 14.905 18.975L14.5 21Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className='perk-span'>Avbetaling</span>
                                    mulig
                                </li>
                                <li>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 9H7.5C5.01472 9 3 11.0147 3 13.5C3 15.9853 5.01472 18 7.5 18H12M21 9L17 5M21 9L17 13" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className='perk-span'>Gratis</span>
                                    retur innen 30 dager
                                </li>
                                <li>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className='perk-span'>24/7</span>
                                    kundeservice
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="pdv-section">
                    <div className="pdv-section-content">
                        <h3>Bruksanvisning til {product.name}</h3>
                        <p>{product.productManual.instructions}</p>

                        <h3>Hovedfunksjoner</h3>
                        <ul>
                            {parseStringToList(product.productManual.mainFeatures).map((feature, index) => {
                                return <li key={index}>{feature}</li>
                            })}
                        </ul>

                        <h3>Kompatibilitet og Programvare</h3>
                        <p>{product.productManual.compatibilityAndSoftware}</p>
                    </div>
                </div>

                {product.ratings.length > 0 ?
                    <div className="product-detail-view-product-ratings-container">
                        <div className="product-detail-view-product-ratings">
                            <h3>Anmelderser ({product.ratings.length})</h3>
                            {productRatings.map((rating) => (
                                <ReviewBlock
                                    key={rating.id}
                                    id={rating.id}
                                    comment={rating.comment}
                                    numberOfStars={rating.numberOfStars}
                                    userId={rating.userId}
                                />
                            ))}
                        </div>
                    </div>
                    : null
                }

                <div className="product-detail-view-recommendations">
                    <h3 className='product-detail-view-recommendations-title'>Dette produktet kjøpes vanligvis med</h3>
                    <div className="recommendations-grid">
                        {randomProducts.map((product) => {
                            return <ProductBlock
                                key={product.id}
                                id={product.id}
                                title={product.name}
                                imagePath={product.imagePaths[0]}
                                description={product.description}
                                price={product.price}
                                ratings={product.ratings}
                                averageRating={product.averageRating}
                                numberOfRatings={product.numberOfRatings}
                            />
                        })}
                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    );
}