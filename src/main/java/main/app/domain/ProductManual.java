package main.app.domain;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class ProductManual implements Serializable {

    private final static ObjectMapper objectMapper = new ObjectMapper();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String instructions; // En lang tekst om hvordan produktet fungerer.

    @Lob
    @Column(columnDefinition = "MEDIUMTEXT")
    private String mainFeatures; // Hovedfunksjoner
    
    @Column(columnDefinition = "MEDIUMTEXT")
    private String compatibilityAndSoftware; // Kompatibilitet og Programvare

    public String convertToDatabaseColumn(List<String> attribute) {
        try {
            return objectMapper.writeValueAsString(attribute); // Konverter liste til JSON
        } catch (Exception e) {
            throw new RuntimeException("Could not convert list to JSON", e);
        }
    }

    protected ProductManual() { }
    public ProductManual(String instructions, List<String> mainFeatures, String compatibilityAndSoftware) {
        this.instructions = instructions;
        this.mainFeatures = convertToDatabaseColumn(mainFeatures);
        this.compatibilityAndSoftware = compatibilityAndSoftware;
    }

    public String getMainFeatures() {
        return mainFeatures;
    }

    public String getCompatibilityAndSoftware() {
        return compatibilityAndSoftware;
    }

    public String getInstructions() {
        return instructions;
    }
}