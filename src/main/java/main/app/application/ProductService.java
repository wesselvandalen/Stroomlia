package main.app.application;

import jakarta.transaction.Transactional;
import main.app.data.ProductRepository;
import main.app.domain.Product;
import main.app.domain.ProductCategory;
import main.app.domain.Rating;
import main.app.domain.exception.ProductNotFoundException;
import main.app.presentation.dto.product.ProductRequestDTO;
import main.app.presentation.dto.rating.RatingRequestDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import static main.app.domain.ProductCategory.*;

@Service
@Transactional
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product createProduct(ProductRequestDTO dto) {
        Product product = new Product(dto.getName(), dto.getDescription(), dto.getPrice(), dto.getProductCategory(), dto.getImagePath());
        this.productRepository.save(product);
        return product;
    }

    public Product getProductById(Long id) {
        Optional<Product> product = this.productRepository.findById(id);
        if (product.isEmpty()) {
            throw new ProductNotFoundException("The product with id " + id + " was not found.");
        }
        return product.get();
    }

    public List<Product> getAllProducts() {
        return this.productRepository.findAll();
    }

    public List<Product> getProductsByCategory(String category) {
        List<Product> products = this.getAllProducts();
        List<Product> categoryProducts = new ArrayList<>();

        for (int i = 0; i < products.size(); i++) {
            Product product = products.get(i);
            if (product.getProductCategory().toString().equals(category)) {
                categoryProducts.add(product);
            }
        }

        return categoryProducts;
    }


    public List<Product> getProductsById(List<Long> idList) {
        List<Product> products = new ArrayList<>();
        for (Long id : idList) {
            products.add(this.getProductById(id));
        }
        return products;
    }

    public void deleteProductById(Long id) {
        this.productRepository.deleteById(id);
    }

    public void writeRating(Long productId, RatingRequestDTO dto) {
        Product product = this.getProductById(productId);
        product.addRating(new Rating(dto.getNumberOfStars(), dto.getComment(), dto.getUserId()));
    }
}