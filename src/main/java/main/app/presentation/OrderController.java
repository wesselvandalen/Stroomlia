package main.app.presentation;

import main.app.application.OrderService;
import main.app.domain.Order;
import main.app.presentation.dto.order.OrderRequestDTO;
import main.app.presentation.dto.order.OrderResponseDTO;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = {"https://stroomlia.netlify.app/"})
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<OrderResponseDTO> createOrder(@RequestBody OrderRequestDTO dto) {
        OrderResponseDTO orderResponseDTO = new OrderResponseDTO(this.orderService.createOrder(dto));
        return new ResponseEntity<>(orderResponseDTO, HttpStatusCode.valueOf(201));
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderResponseDTO> getOrderById(@PathVariable Long id) {
        OrderResponseDTO orderResponseDTO = new OrderResponseDTO(this.orderService.getOrderById(id));
        return new ResponseEntity<>(orderResponseDTO, HttpStatusCode.valueOf(200));
    }

    @GetMapping("/users/{uid}")
    public ResponseEntity<List<OrderResponseDTO>> getOrdersByUid(@PathVariable String uid) {
        List<OrderResponseDTO> orderResponseDTOList = convertOrderListToOrderResponseDTOList(this.orderService.getOrdersByUid(uid));
        return new ResponseEntity<>(orderResponseDTOList, HttpStatusCode.valueOf(200));
    }

    @DeleteMapping("/{id}")
    public void deleteOrderById(@PathVariable Long id) {
        this.orderService.deleteOrderById(id);
    }

    private List<OrderResponseDTO> convertOrderListToOrderResponseDTOList(List<Order> orders) {
        List<OrderResponseDTO> orderResponseDTOs = new ArrayList<>();

        for (int i = 0; i < orders.size(); i++) {
            orderResponseDTOs.add(new OrderResponseDTO(orders.get(i)));
        }

        return orderResponseDTOs;
    }
}