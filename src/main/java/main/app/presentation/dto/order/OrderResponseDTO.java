package main.app.presentation.dto.order;

import main.app.domain.Order;
import main.app.domain.OrderLine;
import main.app.domain.OrderPersonalia;

import java.util.List;

public class OrderResponseDTO {

    private Long id;
    private double totalPrice;
    private List<OrderLine> orderLines;
    private OrderPersonalia orderPersonalia;

    public OrderResponseDTO(Order order) {
        this.id = order.getId();
        this.totalPrice = order.getTotalPrice();
        this.orderLines = order.getOrderLines();
        this.orderPersonalia = order.getOrderPersonalia();
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public OrderPersonalia getOrderPersonalia() {
        return orderPersonalia;
    }

    public List<OrderLine> getOrderLines() {
        return orderLines;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "OrderResponseDTO{" +
                "id=" + id +
                ", totalPrice=" + totalPrice +
                ", orderLines=" + orderLines +
                ", orderPersonalia=" + orderPersonalia +
                '}';
    }

}