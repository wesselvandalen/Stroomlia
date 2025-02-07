package main.app.domain;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Address implements Serializable {

    // En adresse trenger egentlig ikke noe ID, men dette holder for nå. Det er OrderPersonalia.java klassen som må ha full kunnskap / kontroll over denne klassen tenker jeg.
    @Id
    @GeneratedValue
    private Long id;
    private String streetAddress;
    private String postalCode;
    private String city;
    private String country;

    protected Address() { }
    public Address(String streetAddress, String postalCode, String city, String country) {
        this.streetAddress = streetAddress;
        this.postalCode = postalCode;
        this.city = city;
        this.country = country;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }

    @Override
    public String toString() {
        return streetAddress + ", " + postalCode + " " + city + ", " + country;
    }
}