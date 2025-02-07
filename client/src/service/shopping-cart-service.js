export function getShoppingCart() {
    const shoppingCart = localStorage.getItem('shopping-cart');

    if (!shoppingCart) {
        const newCart = createShoppingCartLayout();
        localStorage.setItem('shopping-cart', JSON.stringify(newCart)); 
        return newCart; 
    }

    return JSON.parse(shoppingCart); 
}

function createShoppingCartLayout() {
    const totalPrice = 0.0;
    const products = [];

    const shoppingCart = {
        totalPrice,
        products
    };

    return shoppingCart;
}

export function addItemToShoppingCart(productId, productAmount, productPrice) {
    const shoppingCart = getShoppingCart();
    const existingProduct = shoppingCart.products.find((product) => product.productId === productId);

    if (existingProduct) {
        // Hvis produktet allerede er i handlekurven, øk antallet
        existingProduct.productAmount = Number(existingProduct.productAmount) + Number(productAmount);

        if (shoppingCart.totalPrice === null) {
            shoppingCart.totalPrice = 0.0;
        }

        shoppingCart.totalPrice += (productAmount * productPrice);
    } else {
        // Hvis produktet ikke finnes, legg det til handlekurven
        const newProduct = { productId, productAmount, productPrice };
        shoppingCart.totalPrice += (productPrice * productAmount);
        shoppingCart.products.push(newProduct);
    }

    // Oppdater handlekurven i localStorage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export function removeItemFromShoppingCart(productId) {
    const shoppingCart = getShoppingCart();

    // Finn produktet basert på productId
    const existingProduct = shoppingCart.products.find((product) => product.productId === productId);

    if (existingProduct) {
        // Trekk prisen basert på antall produkter
        shoppingCart.totalPrice -= existingProduct.productAmount * existingProduct.productPrice; 
        if (shoppingCart.totalPrice < 0.0) {
            shoppingCart.totalPrice = 0.0;
        }

        // Fjern produktet fullstendig fra handlekurven
        shoppingCart.products = shoppingCart.products.filter((product) => product.productId !== productId);
        console.log(`Product with id ${productId} removed from shopping cart.`);
    } else {
        console.error(`The product with id ${productId} does not exist in your shopping cart, and could therefore not be removed.`);
    }

    // Oppdater handlekurven i localStorage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export function decreaseProductAmount(productId) {
    const shoppingCart = getShoppingCart();
    const existingProduct = shoppingCart.products.find((product) => product.productId === productId);

    if (existingProduct) {
        // Hvis produktet allerede er i handlekurven, reduser antallet
        if (existingProduct.productAmount > 1) {
            existingProduct.productAmount--;
            // Trekk prisen for ett produkt fra totalPrice
            shoppingCart.totalPrice -= existingProduct.productPrice;
        } else {
            console.error(`Could not decrease the amount of product with product id ${productId}.`);
        }
    } else {
        console.error(`The product with id ${productId} does not exist in your shopping cart, and could therefore not be decreased.`);
    }

    // Oppdater handlekurven i localStorage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export function increaseProductAmount(productId) {
    const shoppingCart = getShoppingCart();
    const existingProduct = shoppingCart.products.find((product) => product.productId === productId);

    if (existingProduct) {
        // Hvis produktet allerede er i handlekurven, øk antallet
        existingProduct.productAmount++;
        // Legg til prisen for ett produkt til totalPrice
        shoppingCart.totalPrice += existingProduct.productPrice;
    } else {
        console.error(`The product with id ${productId} does not exist in your shopping cart, and could therefore not be increased.`);
    }

    // Oppdater handlekurven i localStorage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export function getTotalPrice() {
    const shoppingCart = getShoppingCart();
    // https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places
    return Number(shoppingCart.totalPrice).toFixed(2);
}

export function addDiscountToTotalPrice(discount) {
    const shoppingCart = getShoppingCart();
    const price = shoppingCart.totalPrice;
    const discountOfPrice = (price / 100 * discount);
    shoppingCart.totalPrice = price - discountOfPrice;
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

    return getTotalPrice();
}