package main.app.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class OrderPersonalia {
    
    @Id
    @GeneratedValue
    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private String phonenumber;
    private String adres;
    private String country;
    private String zipcode;
    
    protected OrderPersonalia() { }

    public OrderPersonalia(String email, String firstName, String lastName, String phonenumber, String adres, String country, String zipcode) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phonenumber = phonenumber;
        this.adres = adres;
        this.country = country;
        this.zipcode = zipcode;
    }

    public String getAdres() {
        return adres;
    }

    public String getCountry() {
        return country;
    }

    public String getEmail() {
        return email;
    }
    
    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public String getZipcode() {
        return zipcode;
    }
}