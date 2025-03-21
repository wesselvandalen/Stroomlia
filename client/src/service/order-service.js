import { baseUrl } from '../config/config.js';

export async function createOrder(orderObject) {
    const url = `${baseUrl}/orders`; 
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderObject), 
    };
    
    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            console.error(`Response status: ${response.status}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json(); 
    } catch (error) {
        console.error('Error creating order:', error); 
        throw error; 
    }
}

export async function getOrderById(orderId) {
    const url = `${baseUrl}/orders/${orderId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Response status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function getOrdersByUid(uid) {
    const url = `${baseUrl}/orders/users/${uid}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Response status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}