package main.app.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "\"users\"")
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String email;
    private String password;
    private String name;
    private String imagePath;

    protected User() { }
    public User(String email, String password, String name, String imagePath) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.imagePath = imagePath;
    }

    public String getImagePath() {
        return imagePath;
    }

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}