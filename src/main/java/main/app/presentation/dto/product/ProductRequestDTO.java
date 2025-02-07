package main.app.presentation.dto.product;

import java.util.List;

import main.app.domain.ProductCategory;

public class ProductRequestDTO {

    private String name;
    private String description;
    private double price;
    private List<String> imagePaths;
    private ProductCategory productCategory;

    protected ProductRequestDTO() { }
    public ProductRequestDTO(String name, String description, double price, ProductCategory productCategory, List<String> imagePaths) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.productCategory = productCategory;
        this.imagePaths = imagePaths;
    }

    public String getDescription() {
        return description;
    }

    public List<String> getImagePaths() {
        return imagePaths;
    }

    public double getPrice() {
        return price;
    }

    public ProductCategory getProductCategory() {
        return productCategory;
    }

    public String getName() {
        return name;
    }
}