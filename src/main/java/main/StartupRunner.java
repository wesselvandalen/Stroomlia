package main;

import main.app.application.ProductService;
import main.app.application.UserService;
import main.app.domain.Product;
import main.app.domain.User;
import main.app.presentation.dto.product.ProductRequestDTO;
import main.app.presentation.dto.rating.RatingRequestDTO;
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
                User fjellgeit = this.userService.createUser(new UserRequestDTO("fjellgeit@tindene.no", "fjelltur2024",
                                "fjellgeit", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));

                // Produkt

                // MOBILTELEFONER
                Product appleIphone14Pro = productService.createProduct(new ProductRequestDTO(
                                "Apple iPhone 14 Pro",
                                "En kraftig smarttelefon med A15 Bionic-chip, ProMotion-skjerm og et avansert trippelkameraoppsett for fantastisk foto og video.",
                                15990,
                                MOBILTELEFONER,
                                List.of("https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg")));

                Product appleIphoneSE = productService.createProduct(new ProductRequestDTO(
                                "Apple iPhone SE (3. generasjon)",
                                "En rimelig iPhone med den kraftige A15 Bionic-chipen, et flott kamera og design inspirert av iPhone 8.",
                                7990,
                                MOBILTELEFONER,
                                List.of("https://m.media-amazon.com/images/I/61A0Zu4K-TL.jpg")));

                // LAPTOPER
                Product appleMacbookPro13 = productService.createProduct(new ProductRequestDTO(
                                "Apple MacBook Pro 13\" (M2, 2022)",
                                "Den ultimate MacBook for både profesjonelle og studenter, med M2-chip for eksepsjonell ytelse og batterilevetid.",
                                16990,
                                LAPTOPER,
                                List.of("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp13-m2-spacegray-202208?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1659374923283")));

                Product appleMacbookPro16 = productService.createProduct(new ProductRequestDTO(
                                "Apple MacBook Pro 16\" (M3 Max, 2023)",
                                "MacBook Pro 16-tommer er den ultimate bærbare maskinen for profesjonelle. Med Apples nyeste M3 Max-chip, opptil 128 GB RAM og en fantastisk Liquid Retina XDR-skjerm, gir denne maskinen utrolig ytelse og batteritid. Perfekt for utviklere, designere og videoredigerere.",
                                52990,
                                LAPTOPER,
                                List.of(
                                                "https://mac-center.com/cdn/shop/files/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__ESES.jpg?v=1700303935&width=1445",
                                                "https://cdn.awsli.com.br/2510/2510599/produto/255527541/macbook-pro-14-chip-m3-8gb-512gb-ssd-cinza-espacial-68790285-sw9k3p33hj.png")));

                // TVOGSKJERMER
                Product appleProDisplayXDR32 = productService.createProduct(new ProductRequestDTO(
                                "Apple Pro Display XDR (32\")",
                                "Flagship-skjermen med ekstremt høy oppløsning og fargepresisjon, perfekt for profesjonelle som arbeider med grafikk, foto og video.",
                                74990,
                                TVOGSKJERMER,
                                List.of("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/pro-display-gallery1-201909?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1574201024213")));

                Product appleTV4K = productService.createProduct(new ProductRequestDTO(
                                "Apple TV 4K (2022)",
                                "Apple TV 4K gir en enestående streamingopplevelse med 4K HDR, Dolby Atmos og den nye Siri Remote.",
                                2990,
                                TVOGSKJERMER,
                                List.of("https://www.apple.com/newsroom/images/product/tv/standard/Apple-TV-4K-hero-221018_big.jpg.large.jpg")));

                // TILBEHØR
                Product appleAirPodsPro = productService.createProduct(new ProductRequestDTO(
                                "Apple AirPods Pro (2. generasjon)",
                                "Aktiv støydemping og fantastisk lydkvalitet for en bedre lytteopplevelse. Perfekt for både musikk og samtaler.",
                                3990,
                                TILBEHØR,
                                List.of("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836")));

                Product appleMagicMouse = productService.createProduct(new ProductRequestDTO(
                                "Apple Magic Mouse (2. generasjon)",
                                "En elegant og funksjonell mus med berøringsfølsom overflate for rask navigasjon.",
                                1190,
                                TILBEHØR,
                                List.of("https://www.appleparts.nl//Files/5/19000/19015/ProductPhotos/1000/2015374107.jpg")));

                // KLOKKER
                Product appleWatchSeries8 = productService.createProduct(new ProductRequestDTO(
                                "Apple Watch Series 8",
                                "Den nyeste smartklokken fra Apple med helse- og treningsfunksjoner, alltid på-skjerm og batterilevetid som varer hele dagen.",
                                4990,
                                KLOKKER,
                                List.of("https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg")));

                Product appleWatchSE = productService.createProduct(new ProductRequestDTO(
                                "Apple Watch SE (2. generasjon)",
                                "En rimelig smartklokke med de viktigste helse- og treningsfunksjonene, designet for alle som ønsker å holde seg aktiv.",
                                3490,
                                KLOKKER,
                                List.of("https://shorturl.at/4oTtc")));

                // AUDIO
                Product appleAirPodsMax = productService.createProduct(new ProductRequestDTO(
                                "Apple AirPods Max",
                                "Over-ear hodetelefoner med aktiv støydemping, eksepsjonell lydkvalitet og lang batterilevetid.",
                                7990,
                                AUDIO,
                                List.of("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-midnight_FV1_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1725492894525")));

                Product beatsFitPro = productService.createProduct(new ProductRequestDTO(
                                "Beats Fit Pro",
                                "Trådløse øretelefoner med aktiv støydemping og et sportsvennlig design. Perfekt for trening og hverdagsbruk.",
                                2490,
                                AUDIO,
                                List.of("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2F3?wid=5332&hei=3555&fmt=jpeg&qlt=95&.v=1634663474000")));

                // Anmeldelser
                this.productService.writeRating(appleIphone14Pro.getId(), new RatingRequestDTO(5,
                                "Fantastisk telefon! Kameraet er utrolig, og ytelsen er lynrask. Anbefales på det sterkeste!",
                                wesselicious.getId()));
                this.productService.writeRating(appleIphone14Pro.getId(), new RatingRequestDTO(4,
                                "Veldig bra telefon, men skulle ønske batteriet varte litt lenger.", rudopudo.getId()));
                this.productService.writeRating(appleIphone14Pro.getId(), new RatingRequestDTO(5,
                                "Perfekt for fotografering! Night mode er helt fantastisk.", fjellgeit.getId()));

                this.productService.writeRating(appleIphoneSE.getId(),
                                new RatingRequestDTO(4,
                                                "God telefon til en rimelig pris. Passer perfekt for mine behov.",
                                                wesselicious.getId()));
                this.productService.writeRating(appleIphoneSE.getId(),
                                new RatingRequestDTO(3, "Helt grei telefon, men savner Face ID.", rudopudo.getId()));
                this.productService.writeRating(appleIphoneSE.getId(),
                                new RatingRequestDTO(4, "Rask og enkel å bruke. Godt kjøp!", fjellgeit.getId()));

                this.productService.writeRating(appleMacbookPro13.getId(), new RatingRequestDTO(5,
                                "Beste laptopen jeg har hatt! M2-chipen gjør underverker.", wesselicious.getId()));
                this.productService.writeRating(appleMacbookPro13.getId(), new RatingRequestDTO(4,
                                "Flott skjerm og tastatur. Skulle bare hatt flere porter.", rudopudo.getId()));
                this.productService.writeRating(appleMacbookPro13.getId(),
                                new RatingRequestDTO(5, "Super maskin for både jobb og fritid!", fjellgeit.getId()));

                this.productService.writeRating(appleMacbookPro16.getId(), new RatingRequestDTO(5,
                                "Ytelsen er helt rå! Perfekt for videoredigering.", wesselicious.getId()));
                this.productService.writeRating(appleMacbookPro16.getId(), new RatingRequestDTO(4,
                                "Litt stor og tung, men kraften er verdt det.", rudopudo.getId()));
                this.productService.writeRating(appleMacbookPro16.getId(), new RatingRequestDTO(5,
                                "Elsker denne maskinen! Super skjerm og batteritid.", fjellgeit.getId()));

                this.productService.writeRating(appleProDisplayXDR32.getId(), new RatingRequestDTO(5,
                                "Fantastisk skjerm! Fargene er utrolig presise.", wesselicious.getId()));
                this.productService.writeRating(appleProDisplayXDR32.getId(), new RatingRequestDTO(4,
                                "Veldig dyr, men bildekvaliteten er helt utrolig.", rudopudo.getId()));
                this.productService.writeRating(appleProDisplayXDR32.getId(),
                                new RatingRequestDTO(5, "Perfekt for foto- og videoredigering!", fjellgeit.getId()));

                this.productService.writeRating(appleAirPodsPro.getId(), new RatingRequestDTO(5,
                                "Beste støydempende ørepropper jeg har prøvd.", wesselicious.getId()));
                this.productService.writeRating(appleAirPodsPro.getId(), new RatingRequestDTO(4,
                                "God lyd, men batteritiden kunne vært bedre.", rudopudo.getId()));
                this.productService.writeRating(appleAirPodsPro.getId(), new RatingRequestDTO(5,
                                "Passformen er perfekt, og lyden er utrolig!", fjellgeit.getId()));

                this.productService.writeRating(appleMagicMouse.getId(),
                                new RatingRequestDTO(3, "Fin design, men upraktisk å lade.", wesselicious.getId()));
                this.productService.writeRating(appleMagicMouse.getId(), new RatingRequestDTO(4,
                                "God respons, men ergonomien kunne vært bedre.", rudopudo.getId()));
                this.productService.writeRating(appleMagicMouse.getId(), new RatingRequestDTO(4,
                                "Fungerer perfekt med MacBook. Smooth scrolling!", fjellgeit.getId()));

                this.productService.writeRating(appleWatchSeries8.getId(), new RatingRequestDTO(5,
                                "Elsker helsesensorene og treningsfunksjonene.", wesselicious.getId()));
                this.productService.writeRating(appleWatchSeries8.getId(),
                                new RatingRequestDTO(4, "Bra batteritid og mange funksjoner.", rudopudo.getId()));
                this.productService.writeRating(appleWatchSeries8.getId(),
                                new RatingRequestDTO(5, "Perfekt for trening og daglig bruk!", fjellgeit.getId()));

                this.productService.writeRating(appleWatchSE.getId(), new RatingRequestDTO(4,
                                "Godt alternativ til Series 8 til en lavere pris.", wesselicious.getId()));
                this.productService.writeRating(appleWatchSE.getId(), new RatingRequestDTO(3,
                                "Mangler noen funksjoner fra Series 8, men fortsatt bra.", rudopudo.getId()));
                this.productService.writeRating(appleWatchSE.getId(),
                                new RatingRequestDTO(4, "Enkel og brukervennlig, verdt pengene.", fjellgeit.getId()));

                this.productService.writeRating(appleAirPodsMax.getId(),
                                new RatingRequestDTO(5, "Fantastisk lydkvalitet og komfort.", wesselicious.getId()));
                this.productService.writeRating(appleAirPodsMax.getId(),
                                new RatingRequestDTO(4, "Litt tunge, men lyden er utrolig.", rudopudo.getId()));
                this.productService.writeRating(appleAirPodsMax.getId(),
                                new RatingRequestDTO(5, "Beste hodetelefonene jeg har eid!", fjellgeit.getId()));

        }
}