package main.app.presentation;

import main.app.application.OrderService;
import main.app.presentation.dto.order.OrderRequestDTO;
import main.app.presentation.dto.order.OrderResponseDTO;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001", "http://localhost:3002"})
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

    @DeleteMapping("/{id}")
    public void deleteOrderById(@PathVariable Long id) {
        this.orderService.deleteOrderById(id);
    }
}