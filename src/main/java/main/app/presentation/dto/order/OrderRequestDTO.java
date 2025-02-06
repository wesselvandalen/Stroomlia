package main.app.presentation.dto.order;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import main.app.domain.OrderPersonalia;

public class OrderRequestDTO {

    private List<ProductAmountCarrier> productAmountCarrierList;
    private OrderPersonalia orderPersonalia;

    // No-arg constructor (needed by Jackson)
    protected OrderRequestDTO() { }

    // Mark the constructor with @JsonCreator and use @JsonProperty for parameters
    @JsonCreator
    public OrderRequestDTO(
        @JsonProperty("productAmountCarrierList") List<ProductAmountCarrier> productAmountCarrierList,
        @JsonProperty("orderPersonalia") OrderPersonalia orderPersonalia) {
        this.productAmountCarrierList = productAmountCarrierList;
        this.orderPersonalia = orderPersonalia;
    }

    public OrderPersonalia getOrderPersonalia() {
        return orderPersonalia;
    }

    public List<ProductAmountCarrier> getProductAmountCarrierList() {
        return productAmountCarrierList;
    }
}
