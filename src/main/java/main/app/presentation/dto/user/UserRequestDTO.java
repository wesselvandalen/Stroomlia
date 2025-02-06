package main.app.presentation.dto.user;

public class UserRequestDTO {

    private String email;
    private String password;
    private String name;
    private String imagePath;

    public UserRequestDTO() { }
    public UserRequestDTO(String email, String password, String name, String imagePath) {
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

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }
}