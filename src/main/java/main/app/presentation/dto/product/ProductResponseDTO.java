package main.app.presentation.dto.product;

import main.app.domain.Product;
import main.app.domain.ProductCategory;
import main.app.domain.ProductManual;
import main.app.domain.ProductStatus;
import main.app.domain.Rating;

import java.util.List;

public class ProductResponseDTO {

    private Long id;
    private String name;
    private String description;
    private double price;
    private List<Rating> ratings;
    private List<String> imagePaths;
    private int averageRating;
    private int numberOfRatings;
    private ProductCategory productCategory;
    private ProductManual productManual;
    private ProductStatus productStatus;

    public ProductResponseDTO(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.price = product.getPrice();
        this.ratings = product.getRatings();
        this.imagePaths = product.getImagePaths();
        this.averageRating = product.getAverageRating();
        this.numberOfRatings = product.getNumberOfRatings();
        this.productManual = product.getProductManual();
        this.productCategory = product.getProductCategory();
        this.productStatus = product.getProductStatus();
    }

    public ProductStatus getProductStatus() {
        return productStatus;
    }

    public ProductManual getProductManual() {
        return productManual;
    }

    public int getNumberOfRatings() {
        return numberOfRatings;
    }

    public int getAverageRating() {
        return averageRating;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public ProductCategory getProductCategory() {
        return productCategory;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public List<String> getImagePaths() {
        return imagePaths;
    }
}