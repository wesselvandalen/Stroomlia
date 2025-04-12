package main;

import main.app.application.ProductService;
import main.app.application.UserService;
import main.app.domain.Product;
import main.app.domain.ProductCategory;
import main.app.domain.ProductManual;
import main.app.domain.ProductStatus;
import main.app.domain.User;
import main.app.presentation.dto.product.ProductRequestDTO;
import main.app.presentation.dto.rating.RatingRequestDTO;
import main.app.presentation.dto.user.UserRequestDTO;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import static main.app.domain.ProductCategory.*;
import static main.app.domain.ProductStatus.*;

import java.io.IOException;
import java.io.InputStream;
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
                Product appleIphone14Pro = productService.createProduct(new ProductRequestDTO(
                                "Apple iPhone 14 Pro",
                                "En kraftig smarttelefon med A15 Bionic-chip, ProMotion-skjerm og et avansert trippelkameraoppsett for fantastisk foto og video.",
                                15990,
                                MOBILTELEFONER,
                                List.of("iphone-14.jpg"),
                                new ProductManual(
                                                "Slå på enheten ved å holde inne sideknappen. Konfigurer Face ID, Apple ID og tilpass innstillinger etter behov. Bruk sveipebevegelser for å navigere, og aktiver alltid-på-skjerm for rask tilgang til varsler. Kameraet har nattmodus og ProRAW-funksjon for profesjonell bildekvalitet.",
                                                List.of(
                                                                "A16 Bionic-chip for lynrask ytelse",
                                                                "6,1-tommers Super Retina XDR-skjerm med ProMotion (120Hz)",
                                                                "Trippelkamera med 48 MP hovedsensor og avansert nattmodus",
                                                                "Dynamic Island for interaktive varsler og multitasking",
                                                                "5G-støtte for rask tilkobling"),
                                                "Støtter iOS 16 og nyere. Kompatibel med Apple Watch, AirPods og MagSafe-tilbehør."),
                                ProductStatus.LIMITED));

                Product appleIphoneSE = productService.createProduct(new ProductRequestDTO(
                                "Apple iPhone SE (3. generasjon)",
                                "En rimelig iPhone med den kraftige A15 Bionic-chipen, et flott kamera og design inspirert av iPhone 8.",
                                7990,
                                MOBILTELEFONER,
                                List.of("https://cdn.webshopapp.com/shops/351150/files/459201562/1652x1652x2/apple-iphone-se-2020-64gb-refurbished-smartphone-m.jpg"),
                                new ProductManual(
                                                "Slå på enheten med sideknappen og følg oppstartsveiledningen. Touch ID lar deg låse opp telefonen raskt og sikkert. Kameraet har Smart HDR 4 og portrettmodus for skarpe bilder. Batterisparing kan aktiveres via Innstillinger.",
                                                List.of(
                                                                "A15 Bionic-chip for rask ytelse",
                                                                "4,7-tommers Retina HD-skjerm",
                                                                "12 MP vidvinkelkamera med portrettmodus",
                                                                "Hjem-knapp med Touch ID for sikker autentisering",
                                                                "5G-støtte for raskere mobilnettverk"),
                                                "Støtter iOS 16 og nyere. Kompatibel med AirPods, Apple Watch og MagSafe-ladere."),
                                ProductStatus.AVAILABLE));

                Product appleMacbookPro13 = productService.createProduct(new ProductRequestDTO(
                                "Apple MacBook Pro 13\" (M2, 2022)",
                                "Den ultimate MacBook for både profesjonelle og studenter, med M2-chip for eksepsjonell ytelse og batterilevetid.",
                                16990,
                                LAPTOPER,
                                List.of("https://www.forza-refurbished.nl/media/catalog/product/cache/9ba303bd5937bdef953006c58868d903/m/a/macbook-pro-13-inch-m1-2020-zilver-voorkant.jpg",
                                                "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp13touchbar-performance-silver-gallery-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1591921673000"),
                                new ProductManual(
                                                "Trykk på strømknappen for å starte enheten. Logg inn med Apple ID og tilpass Touch Bar. Bruk macOS-verktøy for produktivitet, og aktiver batterisparemodus for lengre batteritid.",
                                                List.of(
                                                                "Apple M2-chip for kraftig ytelse",
                                                                "13,3-tommers Retina-skjerm med True Tone",
                                                                "Touch Bar og Touch ID for enkel navigering",
                                                                "Opptil 20 timer batteritid",
                                                                "Aktiv kjøling for vedvarende ytelse"),
                                                "Leveres med macOS Monterey eller nyere. Kompatibel med iCloud, AirDrop og eksterne skjermer via Thunderbolt 4."),
                                ProductStatus.UNAVAILABLE));

                Product appleMacbookPro16 = productService.createProduct(new ProductRequestDTO(
                                "Apple MacBook Pro 16\" (M3 Max, 2023)",
                                "MacBook Pro 16-tommer er den ultimate bærbare maskinen for profesjonelle. Med Apples nyeste M3 Max-chip, opptil 128 GB RAM og en fantastisk Liquid Retina XDR-skjerm, gir denne maskinen utrolig ytelse og batteritid.",
                                52990,
                                LAPTOPER,
                                List.of(
                                                "https://mac-center.com/cdn/shop/files/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__ESES.jpg?v=1700303935&width=1445",
                                                "https://cdn.awsli.com.br/2510/2510599/produto/255527541/macbook-pro-14-chip-m3-8gb-512gb-ssd-cinza-espacial-68790285-sw9k3p33hj.png"),
                                new ProductManual(
                                                "Åpne lokket og start opp maskinen. Konfigurer med Apple ID og iCloud. Bruk Touch ID for rask innlogging. Tilpass skjermens fargeinnstillinger for optimal arbeidsopplevelse, og bruk MagSafe-laderen for effektiv lading.",
                                                List.of(
                                                                "Apple M3 Max-chip med opptil 128 GB RAM",
                                                                "16,2-tommers Liquid Retina XDR-skjerm",
                                                                "Opptil 22 timers batteritid",
                                                                "Tre Thunderbolt 4-porter, HDMI, SD-kortleser",
                                                                "Avansert aktiv kjølesystem for maksimal ytelse"),
                                                "Leveres med macOS Sonoma eller nyere. Full støtte for Xcode, Final Cut Pro, Adobe Suite og 3D-grafikkprogramvare."),
                                ProductStatus.AVAILABLE));

                Product appleProDisplayXDR32 = productService.createProduct(new ProductRequestDTO(
                                "Apple Pro Display XDR 32\"",
                                "En profesjonell 6K Retina-skjerm med ekstrem dynamisk rekkevidde, perfekt for kreative yrker som videoredigering og grafisk design.",
                                49990,
                                TVOGSKJERMER,
                                List.of("https://gfx3.senetic.com/akeneo-catalog/e/4/e/5/e4e5a5db2c3ade82cbcd6f44849a26c7fee1caa8_1690708_MWPE2MP_A_image3.jpg",
                                                "https://upgreatest.nl/images/products/pro-display-4.jpg"),
                                new ProductManual(
                                                "Koble skjermen til en kompatibel Mac via Thunderbolt 3. Juster fargetemperatur og lysstyrke i macOS for optimal bildekvalitet. Bruk Pro Stand eller VESA-feste for fleksibel montering.",
                                                List.of(
                                                                "32-tommers 6K Retina XDR-skjerm",
                                                                "Extreme Dynamic Range (XDR) for eksepsjonell kontrast",
                                                                "P3 fargerom og 10-bits fargedybde",
                                                                "1 000 000:1 kontrastforhold",
                                                                "Nano-texture glass for redusert gjenskinn"),
                                                "Kompatibel med macOS Catalina og nyere. Krever en Mac med Thunderbolt 3 og dedikert GPU-støtte for 6K-oppløsning."),
                                ProductStatus.LIMITED));

                Product appleTV4K = productService.createProduct(new ProductRequestDTO(
                                "Apple TV 4K (2022)",
                                "En kraftig mediespiller med A15 Bionic-chip, støtte for Dolby Vision og HDR10+ for en fantastisk visuell opplevelse.",
                                2190,
                                TVOGSKJERMER,
                                List.of("https://m.media-amazon.com/images/I/51Y-Dulc3bL._AC_SL1024_.jpg",
                                                "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111929_appletv4k.png"),
                                new ProductManual(
                                                "Koble Apple TV til en HDMI-kompatibel TV. Konfigurer med Apple ID og last ned apper fra App Store. Bruk Siri Remote for stemmestyring og navigering.",
                                                List.of(
                                                                "A15 Bionic-chip for lynrask ytelse",
                                                                "Støtte for 4K HDR, Dolby Vision og HDR10+",
                                                                "Dolby Atmos-lyd for kinoopplevelse hjemme",
                                                                "64 GB eller 128 GB lagring for apper og innhold",
                                                                "Siri Remote med USB-C-lading"),
                                                "Kompatibel med iOS, macOS, HomeKit, AirPlay 2 og Bluetooth-tilbehør."),
                                ProductStatus.AVAILABLE));

                Product appleAirPodsPro = productService.createProduct(new ProductRequestDTO(
                                "Apple AirPods Pro (2. generasjon)",
                                "Avanserte trådløse ørepropper med aktiv støydemping og Adaptiv Transparens-modus.",
                                3290,
                                AUDIO,
                                List.of("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-gen2",
                                                "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUYG3_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1701189162296"),
                                new ProductManual(
                                                "Åpne ladeetuiet nær en iPhone eller iPad for å pare. Trykk og hold stilken for å veksle mellom støydemping og transparensmodus. Bruk Adaptive EQ for personlig lydopplevelse.",
                                                List.of(
                                                                "Aktiv støydemping og Adaptiv Transparens",
                                                                "Spatial Audio med dynamisk hodesporing",
                                                                "IPX4 svette- og vannbestandighet",
                                                                "Touch-kontroller for volum og avspilling",
                                                                "Opptil 6 timers lyttetid (30 timer med etui)"),
                                                "Kompatibel med iOS 16 og nyere, macOS og Apple Watch."),
                                ProductStatus.LIMITED));

                Product appleMagicMouse = productService.createProduct(new ProductRequestDTO(
                                "Apple Magic Mouse",
                                "En elegant og presis trådløs mus med Multi-Touch-overflate for intuitive bevegelser.",
                                1090,
                                TILBEHØR,
                                List.of("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXK53_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1730508287095",
                                                "https://www.partly.nl/wp-content/uploads/2023/02/Apple-Magic-Mouse-3-600x600-1.png.webp"),
                                new ProductManual(
                                                "Slå på musen og koble til via Bluetooth. Bruk Multi-Touch-overflaten for å scrolle, sveipe og zoome i macOS.",
                                                List.of(
                                                                "Trådløs med innebygd oppladbart batteri",
                                                                "Multi-Touch-overflate for presis navigering",
                                                                "Opptil én måneds batteritid",
                                                                "Bluetooth-tilkobling uten ekstra mottaker",
                                                                "Designet for macOS-bruk"),
                                                "Kompatibel med macOS Monterey og nyere. Støtter iPadOS for begrenset bruk."),
                                ProductStatus.AVAILABLE));

                Product appleWatchSeries8 = productService.createProduct(new ProductRequestDTO(
                                "Apple Watch Series 8",
                                "En avansert smartklokke med EKG, temperatursensor og krasjdeteksjon for økt sikkerhet.",
                                4990,
                                SMARTKLOKKER,
                                List.of("https://www.partly.nl/wp-content/uploads/2023/11/Apple-Watch-Series-8-45mm-Middernacht-Aluminium-Middernacht-Sportband.png"),
                                new ProductManual(
                                                "Trykk på sideknappen for å slå på klokken. Koble til iPhone via Apple Watch-appen. Tilpass urskiver og aktiver helseovervåkning.",
                                                List.of(
                                                                "EKG- og oksygenmåling",
                                                                "Temperatursensor for helseanalyse",
                                                                "Krasjdeteksjon og nødanrop",
                                                                "Always-On Retina-skjerm",
                                                                "Støtte for Apple Pay og Siri"),
                                                "Krever iPhone 8 eller nyere med iOS 16 eller nyere."),
                                ProductStatus.UNAVAILABLE));

                Product appleWatchSE = productService.createProduct(new ProductRequestDTO(
                                "Apple Watch SE (2. generasjon)",
                                "En rimelig Apple Watch med viktige helse- og treningsfunksjoner.",
                                3290,
                                SMARTKLOKKER,
                                List.of("https://shorturl.at/3yKCa"),
                                new ProductManual(
                                                "Slå på klokken ved å holde inne sideknappen. Koble til en iPhone og synkroniser helse- og treningsdata via Apple Health.",
                                                List.of(
                                                                "Retina-skjerm med høy lysstyrke",
                                                                "Pulsmåling og treningsregistrering",
                                                                "Nødanrop og fallregistrering",
                                                                "Støtte for Apple Pay",
                                                                "Opptil 18 timers batteritid"),
                                                "Krever iPhone 8 eller nyere med iOS 16 eller nyere."),
                                ProductStatus.LIMITED));

                Product appleAirPodsMax = productService.createProduct(new ProductRequestDTO(
                                "Apple AirPods Max",
                                "Premium trådløse hodetelefoner med Hi-Fi-lyd og aktiv støydemping.",
                                6990,
                                AUDIO,
                                List.of("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero",
                                                "https://bsimg.nl/images/apple-airpods-max-zwart_1.png/5ZfPC-JZASXOYo1iWngZ7xR-Tak%3D/fit-in/365x365/filters%3Aformat%28png%29%3Aupscale%28%29"),
                                new ProductManual(
                                                "Slå på ved å trykke på knappen på høyre øreklokke. Koble til via Bluetooth eller automatisk med Apple-enheter.",
                                                List.of(
                                                                "Hi-Fi-lyd med Adaptive EQ",
                                                                "Aktiv støydemping og Transparensmodus",
                                                                "Spatial Audio med dynamisk hodesporing",
                                                                "Digital Crown for volum- og avspillingskontroll",
                                                                "Opptil 20 timers batteritid"),
                                                "Kompatibel med iOS, iPadOS, macOS og Apple TV."),
                                ProductStatus.AVAILABLE));

                Product beatsFitPro = productService.createProduct(new ProductRequestDTO(
                                "Beats Fit Pro",
                                "Trådløse ørepropper med romtilpasset lyd og aktiv støydemping, designet for trening og daglig bruk.",
                                2490,
                                AUDIO,
                                List.of("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/beats-fit-pro",
                                                "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/black/pc-fit-pro-black-case-open.jpg"),
                                new ProductManual(
                                                "Åpne ladeetuiet og hold det nær en iPhone for rask tilkobling. Juster vinger for best passform, og veksle mellom støydemping og Transparensmodus ved å trykke på øreproppen.",
                                                List.of(
                                                                "Aktiv støydemping og Transparensmodus",
                                                                "Spatial Audio med dynamisk hodesporing",
                                                                "IPX4 vann- og svettebestandighet",
                                                                "Opptil 6 timer lyttetid (24 timer med etui)",
                                                                "Kompatibel med iOS og Android"),
                                                "Kompatibel med iOS, macOS, Android og Windows via Bluetooth."),
                                ProductStatus.AVAILABLE));

                Product ipadPro12 = productService.createProduct(new ProductRequestDTO(
                                "iPad Pro 12,9-tommer (M2)",
                                "Den kraftigste iPad-en noensinne med M2-chip, ProMotion-teknologi og Apple Pencil-støtte.",
                                14990,
                                ProductCategory.MOBILTELEFONER,
                                List.of("https://www.apple.com/v/ipad-pro/images/overview/hero/hero_static__b53h30nr8vm6_large.jpg"),
                                new ProductManual(
                                                "Slå på ved å trykke på strømknappen. Sett opp Face ID og synkroniser med iCloud for enkel tilgang til filer og apper.",
                                                List.of(
                                                                "M2-chip for høy ytelse",
                                                                "12,9-tommers Liquid Retina XDR-skjerm",
                                                                "Støtte for Apple Pencil (2. gen)",
                                                                "5G-støtte for rask tilkobling",
                                                                "USB-C med Thunderbolt 4"),
                                                "Kompatibel med iPadOS 16 og nyere. Støtter Magic Keyboard og Apple Pencil 2"),
                                ProductStatus.UNAVAILABLE));

                Product appleWatchUltra = productService.createProduct(new ProductRequestDTO(
                                "Apple Watch Ultra",
                                "Den ultimate smartklokken for eventyrere og idrettsutøvere med robust titan-design og avanserte helsesensorer.",
                                9990,
                                ProductCategory.SMARTKLOKKER,
                                List.of("https://www.apple.com/v/apple-watch-ultra/images/overview/design/design_static__b53h30nr8vm6_large.jpg"),
                                new ProductManual(
                                                "Hold inne sideknappen for å slå på. Sett opp med iPhone via Apple Watch-appen. Tilpass urskiver og helsemålinger etter behov.",
                                                List.of(
                                                                "49 mm titan-konstruksjon",
                                                                "Avansert GPS med nøyaktig posisjonering",
                                                                "Opptil 36 timer batteritid",
                                                                "EKG og oksygenmetningsmåling",
                                                                "Vannbestandig ned til 100 meter"),
                                                "Krever iPhone 8 eller nyere med iOS 16 eller nyere"),
                                ProductStatus.AVAILABLE));

                Product usbCCharger = productService.createProduct(new ProductRequestDTO(
                                "Apple 20W USB-C Lader",
                                "Rask og effektiv lader for iPhone, iPad og andre USB-C-enheter.",
                                249,
                                ProductCategory.TILBEHØR,
                                List.of("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHJA3?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1602179063000"),
                                new ProductManual(
                                                "Koble laderen til en veggkontakt og bruk en kompatibel USB-C-kabel for å lade enheten.",
                                                List.of(
                                                                "20W hurtiglading",
                                                                "USB-C-port",
                                                                "Kompatibel med iPhone og iPad",
                                                                "Kompakt design",
                                                                "Støtter MagSafe-lading"),
                                                "Fungerer med alle enheter som støtter USB-C-lading."),
                                ProductStatus.LIMITED));

                Product lightningCable = productService.createProduct(new ProductRequestDTO(
                                "Apple USB-C til Lightning-kabel (1m)",
                                "Kabel for lading og synkronisering av iPhone og iPad.",
                                199,
                                ProductCategory.TILBEHØR,
                                List.of("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLL82?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1472772632000"),
                                new ProductManual(
                                                "Koble kabelen til en USB-C-lader eller datamaskin for lading og dataoverføring.",
                                                List.of(
                                                                "1 meter lengde",
                                                                "USB-C til Lightning",
                                                                "Kompatibel med iPhone og iPad",
                                                                "MFI-sertifisert for sikker bruk",
                                                                "Støtter hurtiglading"),
                                                "Fungerer med alle enheter som har Lightning-port."),
                                ProductStatus.LIMITED));

                Product studioDisplay = productService.createProduct(new ProductRequestDTO(
                                "Apple Studio Display",
                                "27-tommers 5K Retina-skjerm med avansert bildekvalitet for profesjonelle.",
                                17990,
                                ProductCategory.TVOGSKJERMER,
                                List.of("https://www.apple.com/newsroom/images/product/mac/standard/Apple_Studio-Display_5K-Retina_screen_03182022_inline.jpg"),
                                new ProductManual(
                                                "Koble til Mac eller PC med Thunderbolt 3 eller USB-C for høyoppløst visning.",
                                                List.of(
                                                                "27-tommers 5K Retina-skjerm",
                                                                "P3 Wide Color og True Tone",
                                                                "12 MP ultravidvinkelkamera med Center Stage",
                                                                "6 høyttalere med romtilpasset lyd",
                                                                "Tre USB-C-porter og en Thunderbolt 3-port"),
                                                "Kompatibel med macOS Monterey og nyere."),
                                ProductStatus.AVAILABLE));

                Product macbookAir15 = productService.createProduct(new ProductRequestDTO(
                                "MacBook Air 15 (M2)",
                                "Ultratynn og lett bærbar med M2-chip og imponerende batteritid.",
                                18990,
                                ProductCategory.LAPTOPER,
                                List.of("https://www.apple.com/v/macbook-air/images/overview/hero/hero_static__b53h30nr8vm6_large.jpg"),
                                new ProductManual(
                                                "Slå på enheten og sett opp Touch ID. Logg inn med Apple ID og synkroniser med iCloud.",
                                                List.of(
                                                                "Apple M2-chip for kraftig ytelse",
                                                                "15-tommers Liquid Retina-skjerm",
                                                                "Opptil 18 timer batteritid",
                                                                "MagSafe-lading og to Thunderbolt-porter",
                                                                "macOS Ventura for smidig arbeidsflyt"),
                                                "Kompatibel med macOS Ventura og nyere. Støtter iCloud og Continuity-funksjoner"),
                                ProductStatus.UNAVAILABLE));

                Product iphone14 = productService.createProduct(new ProductRequestDTO(
                                "iPhone 14",
                                "En kraftig smarttelefon med A15 Bionic-chip og avansert dobbeltkamera.",
                                12990,
                                ProductCategory.MOBILTELEFONER,
                                List.of("https://www.apple.com/v/iphone-14/images/overview/hero/hero_static__b53h30nr8vm6_large.jpg"),
                                new ProductManual(
                                                "Slå på enheten og sett opp Face ID. Overfør data fra gammel enhet med Quick Start.",
                                                List.of(
                                                                "A15 Bionic-chip for rask ytelse",
                                                                "6,1-tommers Super Retina XDR-skjerm",
                                                                "Dobbeltkamera med nattmodus",
                                                                "5G-støtte for rask tilkobling",
                                                                "iOS 16 med Live Activities"),
                                                "Kompatibel med iOS 16 og nyere. Støtter MagSafe-tilbehør og AirPods"),
                                ProductStatus.LIMITED));

                Product magicKeyboard = productService.createProduct(new ProductRequestDTO(
                                "Magic Keyboard med Touch ID",
                                "Trådløst tastatur med Touch ID for sikker pålogging og rask navigasjon.",
                                1790,
                                ProductCategory.TILBEHØR,
                                List.of("https://www.apple.com/v/magic-keyboard/images/overview/hero/hero_static__b53h30nr8vm6_large.jpg"),
                                new ProductManual(
                                                "Slå på tastaturet og koble til Mac via Bluetooth eller medfølgende USB-C-kabel.",
                                                List.of(
                                                                "Touch ID for sikker pålogging",
                                                                "Lavprofil taster med stabil mekanisme",
                                                                "USB-C til Lightning-lading",
                                                                "Automatisk sammenkobling med Mac",
                                                                "Støtter macOS for full kompatibilitet"),
                                                "Kompatibel med macOS Monterey og nyere. Krever en Mac med Apple Silicon"),
                                ProductStatus.AVAILABLE));

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