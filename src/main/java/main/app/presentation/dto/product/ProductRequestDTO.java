package main.app.presentation.dto.product;

import java.util.List;

import main.app.domain.ProductCategory;
import main.app.domain.ProductManual;
import main.app.domain.ProductStatus;

public class ProductRequestDTO {

    private String name;
    private String description;
    private double price;
    private List<String> imagePaths;
    private ProductCategory productCategory;
    private ProductManual productManual;
    private ProductStatus productStatus;

    protected ProductRequestDTO() { }
    public ProductRequestDTO(String name, String description, double price, ProductCategory productCategory, List<String> imagePaths, ProductManual productManual, ProductStatus productStatus) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.productCategory = productCategory;
        this.imagePaths = imagePaths;
        this.productManual = productManual;
        this.productStatus = productStatus;
    }

    public ProductStatus getProductStatus() {
        return productStatus;
    }

    public ProductManual getProductManual() {
        return productManual;
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