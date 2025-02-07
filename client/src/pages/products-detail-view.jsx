import './products-detail-view.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById, getRandomItems, getRandomProductsByCategory } from "../service/product-service.js";
import ReviewStars from "../components/review-stars.jsx";
import ReviewBlock from "../components/review-block.jsx";
import { addItemToShoppingCart } from "../service/shopping-cart-service.js";
import ProductBlock from '../components/product-block.jsx';

export default function ProductDetailView() {
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
            console.log(productData);
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

    async function getProductsByCategory(productCategory) {
        const data = await getRandomProductsByCategory(productCategory);
        setRandomProducts(getRandomItems(data, 4));
    }

    let productRatings = product.ratings;
    if (productRatings.length > 5) {
        productRatings = productRatings.slice(0, 5);
    }

    return (
        <div className="product-detail-view-container">
            <div className="product-detail-view-total-container">

                <div className="product-detail-view-content">

                    <div className="product-detail-view-image-container">
                        <img src={product.imagePaths[0]} alt={product.name} className="product-detail-view-product-image" />
                    </div>

                    <div className="product-detail-view-information">
                        <h3 className="product-detail-view-name">{product.name}</h3>
                        <div className="product-detail-view-stars">
                            {product.averageRating > 0 ?
                                <ReviewStars numberOfStars={product.averageRating} />
                                :
                                null
                            }
                            <p className='number-of-ratings' style={{ marginLeft: product.averageRating > 0 ? '5px' : '0' }}>({product.numberOfRatings})</p>
                        </div>
                        <p className="product-detail-view-price">{product.price} kr</p>
                        <p className="product-detail-view-description">{product.description}</p>
                        <div className="product-add-button-container">
                            <button className="product-detail-view-button" onClick={handleShoppingButton}>
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                add
                            </button>
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
                        </div>
                    </div>

                </div>

                {product.ratings.length > 0 ?
                    <div className="product-detail-view-product-ratings-container">
                        <div className="product-detail-view-product-ratings">
                            <h3>reviews ({product.ratings.length})</h3>
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
                    <h3 className='product-detail-view-recommendations-title'>interesting</h3>
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

        </div>
    );
}