import './shopping-cart-item.css';
import { useEffect, useState, React } from "react";
import { fetchProductById } from "../service/product-service.js";
import { decreaseProductAmount, increaseProductAmount, removeItemFromShoppingCart } from "../service/shopping-cart-service.js";
import { makeNumbersReadable } from '../service/utils.js';

export default function ShoppingCartItem(props) {
    const [product, setProduct] = useState({});
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setAmount(props.amount);
        fetchProduct(props.productId);
    }, [props.productId,]);

    const fetchProduct = async (id) => {
        try {
            const productData = await fetchProductById(id);
            setProduct(productData);
        } catch (error) {
            console.error("Error fetching the product:", error);
        }
    };

    const decreaseItemAmount = () => {
        if (amount === 1) {
            return;
        }

        decreaseProductAmount(props.productId);
        setAmount(amount - 1);
        window.location.reload();
    };

    const increaseItemAmount = () => {
        increaseProductAmount(props.productId);
        setAmount(amount + 1);
        window.location.reload();
    };

    const deleteProductFromShoppingCart = () => {
        removeItemFromShoppingCart(props.productId);
        fetchProduct(props.productId);
        window.location.reload();
    };

    function isEmpty(obj) {
        for (const prop in obj) {
          if (Object.hasOwn(obj, prop)) {
            return false;
          }
        }
      
        return true;
    }

    if (!product || product === undefined || product === null || isEmpty(product)) {
        return (<div>Lader produktet...</div>);
    };

    return (
        <div className="shopping-cart-item-container">
            <div className="shopping-cart-item-title-image-container">
                <img src={product.imagePaths[0]} alt={product.name} />
                <div className="shopping-cart-item-info">
                    <h3>{product.name}</h3>
                    <p>{makeNumbersReadable(Number(product.price))} kr</p>
                </div>
            </div>
            <div className="price-buttons-container">
                <div className="shopping-cart-item-amount-container">
                    <button className={"amount-button decrease cart-button"} onClick={decreaseItemAmount}>
                        -
                        <span className="bag-tooltip">Senk</span>
                    </button>
                    <p className='price-p'>{amount}</p>
                    <button className={"amount-button increase cart-button"} onClick={increaseItemAmount}>
                        +
                        <span className="bag-tooltip">Øk</span>
                    </button>
                </div>
                <button className={"delete-item-button cart-button"} onClick={deleteProductFromShoppingCart}>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="bag-tooltip">Fjern</span>
                </button>
            </div>
        </div>
    );
}