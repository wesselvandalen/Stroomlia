package main.app.domain;

import jakarta.persistence.*;

import static jakarta.persistence.CascadeType.ALL;

@Entity
public class ProductAmount {

    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne(cascade = ALL)
    private Produkt product;
    private int amount;

    protected ProductAmount() { }
    public ProductAmount(Produkt product, int amount) {
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

    public Produkt getProduct() {
        return product;
    }

    public int getAmount() {
        return amount;
    }
}