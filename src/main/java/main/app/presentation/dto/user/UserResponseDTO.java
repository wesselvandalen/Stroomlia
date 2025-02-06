package main.app.presentation.dto.user;

import main.app.domain.User;

public class UserResponseDTO {

    private Long id;
    private String email;
    private String password;
    private String name;
    private String imagePath;

    public UserResponseDTO(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.name = user.getName();
        this.imagePath = user.getImagePath();
    }

  
    public String getImagePath() {
        return imagePath;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }
}