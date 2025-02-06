package main.app.presentation.dto.order;

public class ProductAmountCarrier {

    private Long productId;
    private int amount;
    private double price;

    public ProductAmountCarrier() { }

    public Long getProductId() {
        return productId;
    }

    public int getAmount() {
        return amount;
    }

    public double getPrice() {
        return price;
    }
}