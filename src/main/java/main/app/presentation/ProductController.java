package main.app.presentation;

import main.app.application.ProductService;
import main.app.domain.Product;
import main.app.presentation.dto.product.ProductRequestDTO;
import main.app.presentation.dto.product.ProductResponseDTO;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001", "http://localhost:3002"})
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<ProductResponseDTO> createProduct(@RequestBody ProductRequestDTO dto) {
        ProductResponseDTO productResponseDTO = new ProductResponseDTO(this.productService.createProduct(dto));
        return new ResponseEntity<>(productResponseDTO, HttpStatusCode.valueOf(201));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> getProductById(@PathVariable Long id) {
        ProductResponseDTO productResponseDTO = new ProductResponseDTO(this.productService.getProductById(id));
        return new ResponseEntity<>(productResponseDTO, HttpStatusCode.valueOf(200));
    }

    @GetMapping
    public ResponseEntity<List<ProductResponseDTO>> getAllProducts() {
        List<Product> products = this.productService.getAllProducts();
        return new ResponseEntity<>(convertProductListToProductResponseDTOList(products), HttpStatusCode.valueOf(200));
    }

    @DeleteMapping("/{id}")
    public void deleteProductById(@PathVariable Long id) {
        this.productService.deleteProductById(id);
    }

    private List<ProductResponseDTO> convertProductListToProductResponseDTOList(List<Product> products) {
        List<ProductResponseDTO> dtoList = new ArrayList<>();
        for (Product product : products) {
            dtoList.add(new ProductResponseDTO(product));
        }
        return dtoList;
    }
}