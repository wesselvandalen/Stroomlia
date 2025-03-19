import { baseUrl } from '../config/config.js';

export async function fetchUserById(id) {
    const url = `${baseUrl}/users/${id}`;
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