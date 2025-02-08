import './order-form.css';
import {OrderFormState} from "../model/OrderFormState.js";
import React, {ChangeEvent, useState} from "react";
import { createOrder } from '../service/order-service.js';
import { getShoppingCart } from '../service/shopping-cart-service.js';
import { ProductAmountCarrier } from '../model/ProductAmountCarrier.js';

export default function OrderForm() {
    const [permission, setPermission] = useState(false);
    const [formState, setFormState] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        country: '',
        zipCode: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    function convertShoppingCartToProductAmountCarrier() {
        const shoppingCart = getShoppingCart(); // Hent handlekurven fra localStorage
        const productAmountCarriers = [];
    
        shoppingCart.products.forEach((product) => {
            // Opprett et nytt ProductAmountCarrier-objekt for hvert produkt
            const productAmountCarrier = new ProductAmountCarrier(
                product.productId,
                product.productAmount,
                product.productPrice // Anta at produktet også har en price-eiendom
            );
            productAmountCarriers.push(productAmountCarrier);
        });
    
        return productAmountCarriers; // Returner listen med ProductAmountCarrier-objekter
    }    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orderObject = {
            "orderPersonalia": {
                "email": formState.email,
                "firstName": formState.firstName,
                "lastName": formState.lastName,
                "phonenumber": formState.phone,
                "adres": formState.address,
                "country": formState.country,
                "zipcode": formState.zipCode
            },
            "productAmountCarrierList": convertShoppingCartToProductAmountCarrier()            
        };


        localStorage.setItem("orderData", JSON.stringify(orderObject));
        window.location.replace(`/overview`);
    };

    const handlePermissionChange = (e) => setPermission(e.target.checked);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">E-post</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="firstName">Fornavn</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="lastName">Etternavn</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="phone">Telefonnummer</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="address">Addresse</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formState.address}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="country">Land</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formState.country}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="zipCode">Postalnummer</label>
                <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formState.zipCode}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className='terms-container'>
                <input
                    id={"terms-and-conditions"}
                    type="checkbox"
                    checked={true}
                />
                <label htmlFor="terms-and-conditions" className={"terms-text"}>
                    Ved å trykke på knappen aksepterer jeg <a className={"terms-and-agreements-a"} href="/terms" target={"_blank"}>vilkårene</a>.
                </label>
            </div>

            <button type="submit">Submit Order</button>
        </form>
    );
}