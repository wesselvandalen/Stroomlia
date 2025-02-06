package main;

import main.app.application.ProductService;
import main.app.application.UserService;
import main.app.domain.Produkt;
import main.app.domain.User;
import main.app.presentation.dto.product.ProductRequestDTO;
import main.app.presentation.dto.rating.RatingRequestDTO;
import main.app.presentation.dto.user.UserRequestDTO;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.io.IOException;

import static main.app.domain.ProductCategory.*;

@Component
public class StartupRunner implements CommandLineRunner {

    private final ProductService productService;
    private final UserService userService;

    public StartupRunner(ProductService productService, UserService userService) {
        this.productService = productService;
        this.userService = userService;
    }

    @Override
    public void run(String[] args) throws IOException {

        // Brukere
        User wesselicious = this.userService.createUser(new UserRequestDTO("wesselicious@gmail.com", "jegelskerhunder", "wesselicious", "https://i.ibb.co/mDyjjyJ/IMG-1110.jpg"));
        User rudopudo = this.userService.createUser(new UserRequestDTO("rudopudo@outlook.com", "puppykoekje123", "rudopudo", "https://i.ibb.co/GpnV3ts/sitesdefaultfilesstylessquare-medium-440x440public2022-09golden20retriever.jpg"));
        User arcticFox = this.userService.createUser(new UserRequestDTO("arcticfox@polarpost.com", "snelandskap123", "arcticFox", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
        User fjellgeit = this.userService.createUser(new UserRequestDTO("fjellgeit@tindene.no", "fjelltur2024", "fjellgeit", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
        User vinterbarn = this.userService.createUser(new UserRequestDTO("vinterbarn@snofnugg.no", "iskaldt123", "vinterbarn", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
        User sommerglad = this.userService.createUser(new UserRequestDTO("sommerglad@sol.no", "solvarme2024", "sommerglad", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
        User fjordfant = this.userService.createUser(new UserRequestDTO("fjordfant@havbris.no", "havblikk2024", "fjordfant", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
        User mooselover = this.userService.createUser(new UserRequestDTO("mooselover@skog.no", "elg123skog", "mooselover", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));

        // Produkt
        
    }
}