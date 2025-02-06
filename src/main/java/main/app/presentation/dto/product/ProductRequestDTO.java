package main.app.presentation.dto.product;

import main.app.domain.ProductCategory;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public class ProductRequestDTO {

    private String name;
    private String description;
    private double price;
    private ProductCategory productCategory;
    private String imagePath;

    protected ProductRequestDTO() { }
    public ProductRequestDTO(String name, String description, double price, ProductCategory productCategory, String imagePath) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.productCategory = productCategory;
        this.imagePath = imagePath;
    }

    public String getDescription() {
        return description;
    }

    public String getImagePath() {
        return imagePath;
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