import './order-form.css';
import { OrderFormState } from "../model/OrderFormState.js";
import React, { ChangeEvent, useState } from "react";
import { createOrder } from '../service/order-service.js';
import { getShoppingCart } from '../service/shopping-cart-service.js';
import { ProductAmountCarrier } from '../model/ProductAmountCarrier.js';
import { strokeWidth } from '../service/config.js';

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

        if (!permission) {
            return;
        }

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
        window.location.replace(`/oversikt`);
    };

    const handlePermissionChange = (e) => setPermission(e.target.checked);

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-row'>
                <label className='form-label' htmlFor="email">E-post</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='ola.nordmann@gmail.no'
                    value={formState.email}
                    onChange={handleInputChange}
                    className='form-input'
                    required
                />
            </div>

            <div className='form-row'>
                <label className='form-label' htmlFor="firstName">Fornavn</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className='form-input'
                    placeholder='Ola'
                    value={formState.firstName}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className='form-row'>
                <label className='form-label' htmlFor="lastName">Etternavn</label>
                <input
                    className='form-input'
                    placeholder='Nordmann'
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className='form-row'>
                <label className='form-label' htmlFor="phone">Telefonnummer</label>
                <input
                    className='form-input'
                    placeholder='+47 46 83 92 71'
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-row'>
                <label className='form-label' htmlFor="address">Adresse</label>
                <input
                    className='form-input'
                    placeholder='Solbergveien 17'
                    type="text"
                    id="address"
                    name="address"
                    value={formState.address}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className='form-row'>
                <label className='form-label' htmlFor="country">Land</label>
                <input
                    className='form-input'
                    placeholder='Norge'
                    type="text"
                    id="country"
                    name="country"
                    value={formState.country}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className='form-row'>
                <label className='form-label' htmlFor="zipCode">Postalnummer</label>
                <input
                    className='form-input'
                    placeholder='0487 Oslo'
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
                    checked={permission}
                    onClick={handlePermissionChange}
                />
                <label htmlFor="terms-and-conditions" className={"terms-text"}>
                    Ved å trykke på knappen til venstre aksepterer jeg <a className={"terms-and-agreements-a"} href="/vilkår" target={"_blank"}>vilkårene og betingelsene</a>.
                </label>
            </div>

            <button type="submit">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M14 20.889L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7986 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52346 17.2909 3.37368 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42757 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37368 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7986 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42757 21 7.59889 21 7.94153L21 12.5001M7.5 4.50008L16.5 9.50008M16 18.0001L18 20.0001L22 16.0001" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Legg inn bestilling
            </button>
        </form>
    );
}