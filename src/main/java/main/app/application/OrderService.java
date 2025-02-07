package main.app.application;

import jakarta.transaction.Transactional;
import main.app.data.OrderRepository;
import main.app.domain.Order;
import main.app.domain.OrderLine;
import main.app.domain.Product;
import main.app.domain.exception.OrderNotFoundException;
import main.app.presentation.dto.order.OrderRequestDTO;
import main.app.presentation.dto.order.ProductAmountCarrier;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductService productService;

    public OrderService(OrderRepository orderRepository, ProductService productService) {
        this.orderRepository = orderRepository;
        this.productService = productService;
    }

    public Order createOrder(OrderRequestDTO dto) {
        List<Long> productIds = retrieveProductIds(dto.getProductAmountCarrierList());
        List<Product> products = this.productService.getProductsById(productIds);

        List<Integer> amounts = retrieveAmounts(dto.getProductAmountCarrierList());
        List<OrderLine> orderLines = this.convertProductListToOrderLineList(products, amounts);
        Order order = new Order(orderLines, dto.getOrderPersonalia());
        this.orderRepository.save(order);
        return order;
    }

    public Order getOrderById(Long id) {
        Optional<Order> order = this.orderRepository.findById(id);
        if (order.isEmpty()) {
            throw new OrderNotFoundException("Order with id " + id + " was not found.");
        }
        return order.get();
    }

    public void deleteOrderById(Long id) {
        this.orderRepository.deleteById(id);
    }

    private List<OrderLine> convertProductListToOrderLineList(List<Product> products, List<Integer> amounts) {
        List<OrderLine> orderlines = new ArrayList<>();
        for (int i = 0; i < products.size(); i++) {
            Product product = products.get(i);
            int amount = amounts.get(i);
            orderlines.add(new OrderLine(product.getName(), product.getPrice(), amount, product.getId()));
        }
        return orderlines;
    }

    private List<Long> retrieveProductIds(List<ProductAmountCarrier> productAmountCarrierList) {
        List<Long> productIds = new ArrayList<>();
        for (ProductAmountCarrier productAmountCarrier : productAmountCarrierList) {
            productIds.add(productAmountCarrier.getProductId());
        }
        return productIds;
    }

    private List<Integer> retrieveAmounts(List<ProductAmountCarrier> productAmountCarrierList) {
        List<Integer> amounts = new ArrayList<>();
        for (ProductAmountCarrier productAmountCarrier : productAmountCarrierList) {
            amounts.add(productAmountCarrier.getAmount());
        }
        return amounts;
    }
}