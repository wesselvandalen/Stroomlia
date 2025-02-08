import { baseUrl } from './config.js';

export async function fetchProducts() {
    const url = `${baseUrl}/products`;
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

export async function fetchProductById(productId) {
    const url = `${baseUrl}/products/${productId}`;
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

export async function sortByProductCategory(productList, productCategory) {
    const sortedProductListByCategory= [];
    
    productList.forEach((product) => {
        if (product.productCategory === productCategory.toUpperCase()) {
            sortedProductListByCategory.push(product);
        }
    });

    return sortedProductListByCategory;
}

export async function getRandomProductsByCategory(productCategory) {
    const url = `${baseUrl}/products`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Response status: ${response.status}`);
        }

        return sortByProductCategory(await response.json(), productCategory);
    } catch (error) {
        console.error(error);
    }
}

export function getRandomItems(list, numItems) {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }

    return list.slice(0, numItems);
}