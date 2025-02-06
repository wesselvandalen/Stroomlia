package main.app.presentation.dto.product;

import main.app.domain.ProductCategory;

import java.util.List;

public class ProductRequestDTO {

    private String name;
    private String description;
    private double price;
    private ProductCategory productCategory;
    private List<String> imagePaths;

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

    public String getName() {
        return name;
    }

    public ProductCategory getProductCategory() {
        return productCategory;
    }
}