package main.app.presentation;

import main.app.application.UserService;
import main.app.presentation.dto.user.UserRequestDTO;
import main.app.presentation.dto.user.UserResponseDTO;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = {"http://localhost:5173"})
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserResponseDTO> createUser(@RequestBody UserRequestDTO dto) {
        UserResponseDTO userResponseDTO = new UserResponseDTO(this.userService.createUser(dto));
        return new ResponseEntity<>(userResponseDTO, HttpStatusCode.valueOf(201));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> createUser(@PathVariable Long id) {
        UserResponseDTO userResponseDTO = new UserResponseDTO(this.userService.getUserById(id));
        return new ResponseEntity<>(userResponseDTO, HttpStatusCode.valueOf(200));
    }

    @DeleteMapping("/{id}")
    public void deleteUserById(@PathVariable Long id) {
        this.userService.deleteUserById(id);
    }
}