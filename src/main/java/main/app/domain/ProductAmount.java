package main.app.domain;

import jakarta.persistence.*;

import static jakarta.persistence.CascadeType.ALL;

@Entity
public class ProductAmount {

    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne(cascade = ALL)
    private Product product;
    private int amount;

    protected ProductAmount() { }
    public ProductAmount(Product product, int amount) {
        this.product = product;
        this.amount = amount;
    }

    public void increaseAmount(int amount) {
        this.amount += amount;
    }

    public void decreaseAmount(int amount) {
        this.amount -= amount;
    }

    public Long getId() {
        return id;
    }

    public Product getProduct() {
        return product;
    }

    public int getAmount() {
        return amount;
    }
}