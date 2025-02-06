package main.app.presentation.dto.product;

import main.app.domain.Product;
import main.app.domain.ProductCategory;
import main.app.domain.Rating;

import java.util.ArrayList;
import java.util.List;

public class ProductResponseDTO {

    private Long id;
    private String name;
    private String description;
    private double price;
    private List<Rating> ratings;
    private ProductCategory productCategory;
    private String imagePath;
    private int averageRating;
    private int numberOfRatings;

    public ProductResponseDTO(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.price = product.getPrice();
        this.ratings = product.getRatings();
        this.productCategory = product.getProductCategory();
        this.imagePath = product.getImagePath();
        this.averageRating = product.getAverageRating();
        this.numberOfRatings = product.getNumberOfRatings();
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

    public ProductCategory getProductCategory() {
        return productCategory;
    }

    public String getImagePath() {
        return imagePath;
    }
}