export class ProductAmountCarrier {
    productId;
    amount;
    price;

    constructor(productId, amount, price) {
        this.productId = productId;
        this.amount = amount;
        this.price = price;
    }
}