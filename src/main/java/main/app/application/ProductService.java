package main.app.application;

import jakarta.transaction.Transactional;
import main.app.data.ProductRepository;
import main.app.domain.Produkt;
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

    public Produkt createProduct(ProductRequestDTO dto) {
        Produkt product = new Produkt(dto.getName(), dto.getDescription(), dto.getPrice(), dto.getProductCategory(), dto.getImagePaths());
        this.productRepository.save(product);
        return product;
    }

    public Produkt getProductById(Long id) {
        Optional<Produkt> product = this.productRepository.findById(id);
        if (product.isEmpty()) {
            throw new ProductNotFoundException("Produktet med id " + id + " ble ikke funnet.");
        }
        return product.get();
    }

    public List<Produkt> getAllProducts() {
        return this.productRepository.findAll();
    }

    public List<Produkt> getProductsByCategory(String category) {
        List<Produkt> products = this.getAllProducts();
        List<Produkt> categoryProducts = new ArrayList<>();

        for (int i = 0; i < products.size(); i++) {
            Produkt product = products.get(i);
            if (product.getProductCategory().toString().equals(category)) {
                categoryProducts.add(product);
            }
        }

        return categoryProducts;
    }


    public List<Produkt> getProductsById(List<Long> idList) {
        List<Produkt> products = new ArrayList<>();
        for (Long id : idList) {
            products.add(this.getProductById(id));
        }
        return products;
    }

    public void deleteProductById(Long id) {
        this.productRepository.deleteById(id);
    }

    public void writeRating(Long productId, RatingRequestDTO dto) {
        Produkt product = this.getProductById(productId);
        product.addRating(new Rating(dto.getNumberOfStars(), dto.getComment(), dto.getUserId()));
    }
}