package main;

import main.app.application.ProductService;
import main.app.application.UserService;
import main.app.domain.Product;
import main.app.domain.User;
import main.app.presentation.dto.product.ProductRequestDTO;
import main.app.presentation.dto.user.UserRequestDTO;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import static main.app.domain.ProductCategory.*;

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
                Product appleMacbookPro16 = productService.createProduct(new ProductRequestDTO(
                                "Apple MacBook Pro 16\" (M3 Max, 2023)",
                                "MacBook Pro 16-tommer er den ultimate bærbare maskinen for profesjonelle. Med Apples nyeste M3 Max-chip, opptil 128 GB RAM og en fantastisk Liquid Retina XDR-skjerm, gir denne maskinen utrolig ytelse og batteritid. Perfekt for utviklere, designere og videoredigerere.",
                                52990,
                                LAPTOPER,
                                List.of(
                                                "https://mac-center.com/cdn/shop/files/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__ESES.jpg?v=1700303935&width=1445",
                                                "https://cdn.awsli.com.br/2510/2510599/produto/255527541/macbook-pro-14-chip-m3-8gb-512gb-ssd-cinza-espacial-68790285-sw9k3p33hj.png")));

                // MOBILTELEFONER
                Product appleIphone14Pro = productService.createProduct(new ProductRequestDTO(
                                "Apple iPhone 14 Pro",
                                "En kraftig smarttelefon med A15 Bionic-chip, ProMotion-skjerm og et avansert trippelkameraoppsett for fantastisk foto og video.",
                                15990,
                                MOBILTELEFONER,
                                List.of("https://example.com/iphone14pro.jpg")));

                Product appleIphoneSE = productService.createProduct(new ProductRequestDTO(
                                "Apple iPhone SE (3. generasjon)",
                                "En rimelig iPhone med den kraftige A15 Bionic-chipen, et flott kamera og design inspirert av iPhone 8.",
                                7990,
                                MOBILTELEFONER,
                                List.of("https://example.com/iphonese.jpg")));

                // LAPTOPER
                Product appleMacbookPro13 = productService.createProduct(new ProductRequestDTO(
                                "Apple MacBook Pro 13\" (M2, 2022)",
                                "Den ultimate MacBook for både profesjonelle og studenter, med M2-chip for eksepsjonell ytelse og batterilevetid.",
                                16990,
                                LAPTOPER,
                                List.of("https://example.com/macbookpro13.jpg")));

                Product appleMacbookPro14 = productService.createProduct(new ProductRequestDTO(
                                "Apple MacBook Pro 14\" (M1 Pro, 2021)",
                                "En kraftig laptop med M1 Pro-chip, fantastisk Retina-skjerm og imponerende ytelse for krevende arbeidsoppgaver som videoredigering og grafisk design.",
                                24990,
                                LAPTOPER,
                                List.of("https://example.com/macbookpro14.jpg")));

                // TVOGSKJERMER
                Product appleProDisplayXDR32 = productService.createProduct(new ProductRequestDTO(
                                "Apple Pro Display XDR (32\")",
                                "Flagship-skjermen med ekstremt høy oppløsning og fargepresisjon, perfekt for profesjonelle som arbeider med grafikk, foto og video.",
                                74990,
                                TVOGSKJERMER,
                                List.of("https://example.com/prodisplayxdr32.jpg")));

                Product appleTV4K = productService.createProduct(new ProductRequestDTO(
                                "Apple TV 4K (2022)",
                                "Apple TV 4K gir en enestående streamingopplevelse med 4K HDR, Dolby Atmos og den nye Siri Remote.",
                                2990,
                                TVOGSKJERMER,
                                List.of("https://example.com/appletv4k.jpg")));

                // TILBEHØR
                Product appleAirPodsPro = productService.createProduct(new ProductRequestDTO(
                                "Apple AirPods Pro (2. generasjon)",
                                "Aktiv støydemping og fantastisk lydkvalitet for en bedre lytteopplevelse. Perfekt for både musikk og samtaler.",
                                3990,
                                TILBEHØR,
                                List.of("https://example.com/airpodspro.jpg")));

                Product appleMagicMouse = productService.createProduct(new ProductRequestDTO(
                                "Apple Magic Mouse (2. generasjon)",
                                "En elegant og funksjonell mus med berøringsfølsom overflate for rask navigasjon.",
                                1190,
                                TILBEHØR,
                                List.of("https://example.com/magicmouse.jpg")));

                // KLOKKER
                Product appleWatchSeries8 = productService.createProduct(new ProductRequestDTO(
                                "Apple Watch Series 8",
                                "Den nyeste smartklokken fra Apple med helse- og treningsfunksjoner, alltid på-skjerm og batterilevetid som varer hele dagen.",
                                4990,
                                KLOKKER,
                                List.of("https://example.com/applewatchseries8.jpg")));

                Product appleWatchSE = productService.createProduct(new ProductRequestDTO(
                                "Apple Watch SE (2. generasjon)",
                                "En rimelig smartklokke med de viktigste helse- og treningsfunksjonene, designet for alle som ønsker å holde seg aktiv.",
                                3490,
                                KLOKKER,
                                List.of("https://example.com/applewatchse.jpg")));

                // AUDIO
                Product appleAirPodsMax = productService.createProduct(new ProductRequestDTO(
                                "Apple AirPods Max",
                                "Over-ear hodetelefoner med aktiv støydemping, eksepsjonell lydkvalitet og lang batterilevetid.",
                                7990,
                                AUDIO,
                                List.of("https://example.com/airpodsmax.jpg")));

                Product beatsFitPro = productService.createProduct(new ProductRequestDTO(
                                "Beats Fit Pro",
                                "Trådløse øretelefoner med aktiv støydemping og et sportsvennlig design. Perfekt for trening og hverdagsbruk.",
                                2490,
                                AUDIO,
                                List.of("https://example.com/beatsfitpro.jpg")));

        }
}