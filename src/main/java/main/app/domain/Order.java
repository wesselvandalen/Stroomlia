package main.app.domain;

import jakarta.persistence.*;

import java.util.List;

import static jakarta.persistence.CascadeType.ALL;

@Entity
@Table(name = "\"order\"")
public class Order {

    @Id
    @GeneratedValue
    private Long id;
    private double totalPrice;
    @OneToMany(cascade = ALL)
    private List<OrderLine> orderLines;
    @OneToOne(cascade = ALL)
    private OrderPersonalia orderPersonalia;
 

    protected Order() { }
    public Order(List<OrderLine> orderLines, OrderPersonalia orderPersonalia) {
        this.orderLines = orderLines;
        this.totalPrice = calculateTotalPrice();
        this.orderPersonalia = orderPersonalia;
    }

    public Long getId() {
        return id;
    }

    public OrderPersonalia getOrderPersonalia() {
        return orderPersonalia;
    }

    public double calculateTotalPrice() {
        double result = 0.0;
        for (OrderLine orderLine : this.orderLines) {
            result += (orderLine.getProductPrice() * orderLine.getAmount());
        }
        return Math.round(result * 100.0) / 100.0;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public List<OrderLine> getOrderLines() {
        return orderLines;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", totalPrice=" + totalPrice +
                ", orderLines=" + orderLines +
                ", uid=" + orderPersonalia +
                '}';
    }
}