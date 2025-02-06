package main.app.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class OrderLine {

    @Id
    @GeneratedValue
    private Long id;
    private String productName;
    private double productPrice;
    private int amount;
    private Long productId;

    protected OrderLine() { }
    public OrderLine(String productName, double productPrice, int amount, Long productId) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.amount = amount;
        this.productId = productId;
    }

    public Long getId() {
        return id;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public int getAmount() {
        return amount;
    }

    public Long getProductId() {
        return productId;
    }

    public String getProductName() {
        return productName;
    }

    @Override
    public String toString() {
        return "OrderLine{" +
                "id=" + id +
                ", productName='" + productName + '\'' +
                ", productPrice=" + productPrice +
                ", amount=" + amount +
                ", productId=" + productId +
                '}';
    }
}