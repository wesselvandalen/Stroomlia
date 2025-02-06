package main.app.domain;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;

@Entity
public class Produkt {

    @Id
    @GeneratedValue
    private Long id;
    private String navn;
    private String beskrivelse;
    // Prisen er i norske kroner
    private double pris;
    @ManyToMany(cascade = ALL)
    private List<Rating> vurderinger;
    private List<String> bildeLenker;
    private int gjennomsnittligeVurdering;
    private int antallVurderinger;

    protected Produkt() { }
    public Produkt(String name, String description, double price, ProductCategory productCategory, List<String> imagePaths) {
        this.navn = name;
        this.beskrivelse = description;
        this.pris = price;
        this.vurderinger = new ArrayList<>();
        this.productCategory = productCategory;
        this.bildeLenker = imagePaths;
        updateAverageRating();
        this.antallVurderinger = vurderinger.size();   
    }

    public int getAntallVurderinger() {
        return antallVurderinger;
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
        this.vurderinger.add(rating);
        updateAverageRating();
        updateNumberOfRatings();
    }

    public void updateNumberOfRatings() {
        this.antallVurderinger = this.vurderinger.size();
    }

    private void updateAverageRating() {
        this.gjennomsnittligeVurdering = calculateAverageRating(vurderinger);
    }

    public int getGjennomsnittligeVurdering() {
        return gjennomsnittligeVurdering;
    }

    public ProductCategory getProductCategory() {
        return productCategory;
    }

    public double getPris() {
        return pris;
    }

    public String getNavn() {
        return navn;
    }

    public List<String> getBildeLenker() {
        return bildeLenker;
    }

    public List<Rating> getVurderinger() {
        return vurderinger;
    }

    public String getBeskrivelse() {
        return beskrivelse;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + navn + '\'' +
                ", description='" + beskrivelse + '\'' +
                ", price=" + pris +
                ", ratings=" + vurderinger +
                ", productCategory=" + productCategory +
                '}';
    }
}