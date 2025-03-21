package main.app.domain;

import static jakarta.persistence.CascadeType.ALL;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class OrderPersonalia {

    @Id
    @GeneratedValue
    private Long id;
    private String uid;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private Address address;

    protected OrderPersonalia() { }
    public OrderPersonalia(String uid, String email, String firstName, String lastName, String phoneNumber, Address address) {
        this.uid = uid;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    public String getUid() {
        return uid;
    }

    public Long getId() {
        return id;
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public Address getAddress() {
        return address;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return uid;
    }
}