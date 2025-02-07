package main.app.domain;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;

@Entity
public class Product {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Column(columnDefinition = "LONGTEXT")
    private String description;
    // Prisen er i norske kroner
    private double price;
    @ManyToMany(cascade = ALL)
    private List<Rating> ratings;
    // Kategorien produktet tilhører (laptoper, TV og skjermer, tilbehør osv.)
    @Enumerated
    private ProductCategory productCategory;
    private List<String> imagePaths;
    private int averageRating;
    private int numberOfRatings;

    protected Product() { }
    public Product(String name, String description, double price, ProductCategory productCategory, List<String> imagePaths) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.ratings = new ArrayList<>();
        this.productCategory = productCategory;
        this.imagePaths = imagePaths;
        updateAverageRating();
        this.numberOfRatings = ratings.size();   
    }

    public int getNumberOfRatings() {
        return numberOfRatings;
    }

    public ProductCategory getProductCategory() {
        return productCategory;
    }

    public Long getId() {
        return id;
    }

    public int calculateAverageRating(List<Rating> ratings) {
        if (ratings.size() == 0) {
            return 0;
        }

        int result = 0;
        for (Rating rating : ratings) {
            result += rating.getNumberOfStars();
        }
        
        result = result / ratings.size();
        return result;
    }

    public void addRating(Rating rating) {
        this.ratings.add(rating);
        updateAverageRating();
        updateNumberOfRatings();
    }

    public void updateNumberOfRatings() {
        this.numberOfRatings = this.ratings.size();
    }

    private void updateAverageRating() {
        this.averageRating = calculateAverageRating(ratings);
    }

    public int getAverageRating() {
        return averageRating;
    }

    public double getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }

    public List<String> getImagePaths() {
        return imagePaths;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public String getDescription() {
        return description;
    }
}