package main.app.application;

import jakarta.transaction.Transactional;
import main.app.data.UserRepository;
import main.app.domain.User;
import main.app.domain.exception.UserNotFoundException;
import main.app.presentation.dto.user.UserRequestDTO;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(UserRequestDTO dto) {
        User user = new User(dto.getEmail(), dto.getPassword(), dto.getName(), dto.getImagePath());
        this.userRepository.save(user);
        return user;
    }

    public User getUserById(Long id) {
        Optional<User> foundUser = this.userRepository.findById(id);
        if (foundUser.isEmpty()) {
            throw new UserNotFoundException("User with id " + id + " was not found.");
        }
        return foundUser.get();
    }

    public void deleteUserById(Long id) {
        this.userRepository.deleteById(id);
    }
}