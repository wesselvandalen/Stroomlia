package main.app.presentation.dto.product;

import java.util.List;

public class ProductRequestDTO {

    private String name;
    private String description;
    private double price;
    private List<String> imagePaths;

    protected ProductRequestDTO() { }
    public ProductRequestDTO(String name, String description, double price, List<String> imagePaths) {
        this.name = name;
        this.description = description;
        this.price = price;
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
}