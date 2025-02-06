package main.app.presentation.dto.product;

import main.app.domain.Produkt;
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
    private List<String> imagePaths;
    private int averageRating;
    private int numberOfRatings;

    public ProductResponseDTO(Produkt product) {
        this.id = product.getId();
        this.name = product.getNavn();
        this.description = product.getBeskrivelse();
        this.price = product.getPris();
        this.ratings = product.getVurderinger();
        this.productCategory = product.getProductCategory();
        this.imagePaths = product.getBildeLenker();
        this.averageRating = product.getGjennomsnittligeVurdering();
        this.numberOfRatings = product.getAntallVurderinger();
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

    public List<String> getImagePaths() {
        return imagePaths;
    }
}