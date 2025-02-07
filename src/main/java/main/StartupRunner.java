package main;

import main.app.application.ProductService;
import main.app.application.UserService;
import main.app.domain.Product;
import main.app.domain.User;
import main.app.presentation.dto.product.ProductRequestDTO;
import main.app.presentation.dto.user.UserRequestDTO;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.io.IOException;
import java.util.List;

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
                User wesselicious = this.userService
                                .createUser(new UserRequestDTO("wesselicious@gmail.com", "jegelskerhunder",
                                                "wesselicious", "https://i.ibb.co/mDyjjyJ/IMG-1110.jpg"));
                User rudopudo = this.userService.createUser(new UserRequestDTO("rudopudo@outlook.com", "puppykoekje123",
                                "rudopudo",
                                "https://i.ibb.co/GpnV3ts/sitesdefaultfilesstylessquare-medium-440x440public2022-09golden20retriever.jpg"));
                User arcticFox = this.userService.createUser(new UserRequestDTO("arcticfox@polarpost.com",
                                "snelandskap123",
                                "arcticFox", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
                User fjellgeit = this.userService.createUser(new UserRequestDTO("fjellgeit@tindene.no", "fjelltur2024",
                                "fjellgeit", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
                User vinterbarn = this.userService.createUser(new UserRequestDTO("vinterbarn@snofnugg.no", "iskaldt123",
                                "vinterbarn", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
                User sommerglad = this.userService.createUser(new UserRequestDTO("sommerglad@sol.no", "solvarme2024",
                                "sommerglad", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
                User fjordfant = this.userService.createUser(new UserRequestDTO("fjordfant@havbris.no", "havblikk2024",
                                "fjordfant", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
                User mooselover = this.userService.createUser(new UserRequestDTO("mooselover@skog.no", "elg123skog",
                                "mooselover", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));

                // Produkt
                Product appleMacPro2023 = productService.createProduct(new ProductRequestDTO(
                                "Apple Mac Pro (2023)",
                                "Den ultimate stasjonære arbeidsstasjonen fra Apple, designet for profesjonelle innen film, musikkproduksjon og programmering. Med en kraftig Apple M2 Ultra-chip, opptil 192 GB RAM og en modulær design, gir Mac Pro uovertruffen ytelse og utvidelsesmuligheter. Dette er den perfekte maskinen for krevende arbeidsflyter, med støtte for flere 8K-skjermer og lynraske SSD-er. Kjølesystemet er optimalisert for maksimal ytelse med lav støy. Med en utrolig robust og elegant aluminiumsdesign, er Mac Pro et teknologisk mesterverk.",
                                99990,
                                List.of("https://example.com/macpro1.jpg", "https://example.com/macpro2.jpg")));

                Product appleMacbookPro16 = productService.createProduct(new ProductRequestDTO(
                                "Apple MacBook Pro 16\" (M3 Max, 2023)",
                                "MacBook Pro 16-tommer er den ultimate bærbare maskinen for profesjonelle. Med Apples nyeste M3 Max-chip, opptil 128 GB RAM og en fantastisk Liquid Retina XDR-skjerm, gir denne maskinen utrolig ytelse og batteritid. Perfekt for utviklere, designere og videoredigerere.",
                                52990,
                                List.of("https://example.com/macbookpro16-1.jpg",
                                                "https://example.com/macbookpro16-2.jpg")));

                Product appleMacbookAir15 = productService.createProduct(new ProductRequestDTO(
                                "Apple MacBook Air 15\" (M2, 2023)",
                                "MacBook Air 15-tommer gir den perfekte balansen mellom ytelse og bærbarhet. Med Apples M2-chip, en stor og lyssterk Retina-skjerm og et batteri som varer hele dagen, er dette en perfekt laptop for studenter og profesjonelle på farten.",
                                18990,
                                List.of("https://example.com/macbookair15.jpg")));

                Product appleStudioDisplay = productService.createProduct(new ProductRequestDTO(
                                "Apple Studio Display",
                                "En fantastisk 27-tommers 5K Retina-skjerm med utrolig fargegjengivelse og lysstyrke. Perfekt for kreative profesjonelle som jobber med foto- og videoredigering.",
                                19990,
                                List.of("https://example.com/studiodisplay.jpg")));

                Product appleProDisplayXDR = productService.createProduct(new ProductRequestDTO(
                                "Apple Pro Display XDR",
                                "Apples flaggskipskjerm for profesjonelle, med en 32-tommers 6K Retina-skjerm og ekstremt høy kontrast og lysstyrke. Ideell for profesjonell videoredigering og grafisk design.",
                                49990,
                                List.of("https://example.com/prodisplayxdr.jpg")));

                Product appleIphone15ProMax = productService.createProduct(new ProductRequestDTO(
                                "Apple iPhone 15 Pro Max",
                                "Apples mest avanserte smarttelefon, med en titanramme, A17 Pro-chip og en kraftig trippelkameraoppsett. Perfekt for fotografer og innholdsprodusenter.",
                                18990,
                                List.of("https://example.com/iphone15promax.jpg")));

                Product appleIphone15 = productService.createProduct(new ProductRequestDTO(
                                "Apple iPhone 15",
                                "En kraftig og elegant smarttelefon med A16 Bionic-chip, Dynamic Island og et fantastisk kamerasystem.",
                                12990,
                                List.of("https://example.com/iphone15.jpg")));

                Product appleIPadPro13 = productService.createProduct(new ProductRequestDTO(
                                "Apple iPad Pro 13\" (M2, 2023)",
                                "Den ultimate nettbrettopplevelsen med en stor 13-tommers Liquid Retina XDR-skjerm, M2-chip og støtte for Apple Pencil Pro.",
                                15990,
                                List.of("https://example.com/ipadpro13.jpg")));

                Product appleIPadAir11 = productService.createProduct(new ProductRequestDTO(
                                "Apple iPad Air 11\" (M2, 2023)",
                                "En kraftig, men lett iPad med M2-chip, 11-tommers Liquid Retina-skjerm og lang batteritid.",
                                10990,
                                List.of("https://example.com/ipadair11.jpg")));

                Product appleWatchUltra2 = productService.createProduct(new ProductRequestDTO(
                                "Apple Watch Ultra 2",
                                "Apples mest robuste smartklokke, med en titanramme, avanserte helsesensorer og ekstrem batteritid.",
                                12990,
                                List.of("https://example.com/applewatchultra2.jpg")));

        }
}