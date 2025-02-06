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

        // users
        User wesselicious = this.userService.createUser(new UserRequestDTO("wesselicious@gmail.com", "jegelskerhunder", "wesselicious", "https://i.ibb.co/mDyjjyJ/IMG-1110.jpg"));
        User rudopudo = this.userService.createUser(new UserRequestDTO("rudopudo@outlook.com", "puppykoekje123", "rudopudo", "https://i.ibb.co/GpnV3ts/sitesdefaultfilesstylessquare-medium-440x440public2022-09golden20retriever.jpg"));
        User arcticFox = this.userService.createUser(new UserRequestDTO("arcticfox@polarpost.com", "snelandskap123", "arcticFox", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
        User fjellgeit = this.userService.createUser(new UserRequestDTO("fjellgeit@tindene.no", "fjelltur2024", "fjellgeit", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
        User vinterbarn = this.userService.createUser(new UserRequestDTO("vinterbarn@snofnugg.no", "iskaldt123", "vinterbarn", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
        User sommerglad = this.userService.createUser(new UserRequestDTO("sommerglad@sol.no", "solvarme2024", "sommerglad", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
        User fjordfant = this.userService.createUser(new UserRequestDTO("fjordfant@havbris.no", "havblikk2024", "fjordfant", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));
        User mooselover = this.userService.createUser(new UserRequestDTO("mooselover@skog.no", "elg123skog", "mooselover", "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"));

        // Products
        Product aloeVera = this.productService.createProduct(new ProductRequestDTO("Aloe Vera", "A succulent plant known for its soothing gel.", 12.99, PLANTS, "https://tse3.mm.bing.net/th?id=OIP.Le9epeYsAvb8lgpdB8uewwHaJ5&w=200&h=267&c=7"));
        Product bonsaiTree = this.productService.createProduct(new ProductRequestDTO("Bonsai Tree", "A miniature tree perfect for indoor decor.", 45.00, PLANTS, "https://tse2.mm.bing.net/th?id=OIP.Gp6pEbD8waBO84TujDzstQHaHZ&w=200&h=200&c=7"));
        Product catScratcher = this.productService.createProduct(new ProductRequestDTO("Cat Scratcher", "Keep your cat entertained and furniture safe.", 15.49, PET_SUPPLIES, "https://tse1.mm.bing.net/th?id=OIP.4shpWK4qIMOWzxKWJKYB3AHaHa&w=200&h=200&c=7"));
        Product dogLeash = this.productService.createProduct(new ProductRequestDTO("Dog Leash", "Durable and stylish leash for your dog.", 8.99, PET_SUPPLIES, "https://tse1.mm.bing.net/th?id=OIP.47Ey8Od_SpxC4T7FZzNP_wHaHa&w=200&h=200&c=7"));
        Product guppyFish = this.productService.createProduct(new ProductRequestDTO("Guppy Fish", "Colorful and lively fish for your aquarium.", 2.99, AQUATICS, "https://tse2.mm.bing.net/th?id=OIP.n-MG8xKGIcTNuMmY0Kbp6wHaE6&w=200&h=132&c=7"));
        Product fishTank = this.productService.createProduct(new ProductRequestDTO("Fish Tank", "A 10-gallon tank perfect for beginners.", 50.00, AQUATICS, "https://tse1.mm.bing.net/th?id=OIP.-Pd5rPwW5GjoKWGHZEH4fQHaHa&w=200&h=200&c=7"));
        Product roseBush = this.productService.createProduct(new ProductRequestDTO("Rose Bush", "A classic plant for any garden.", 25.00, GARDEN, "https://tse2.mm.bing.net/th?id=OIP._KVrcEbuxgjfnSGtHe9-oAHaE6&w=200&h=132&c=7"));
        Product gardenHoe = this.productService.createProduct(new ProductRequestDTO("Garden Hoe", "A reliable tool for gardening enthusiasts.", 12.00, GARDEN, "https://tse1.mm.bing.net/th?id=OIP.BbmrbYTrmAfKm2t3HTPT2QHaHC&w=200&h=190&c=7"));
        Product snakePlant = this.productService.createProduct(new ProductRequestDTO("Snake Plant", "Low-maintenance indoor plant.", 19.99, PLANTS, "https://tse3.mm.bing.net/th?id=OIP.L-xB_Q07j-sEG-fh-w3cWAHaIw&w=200&h=236&c=7"));
        Product parrotToy = this.productService.createProduct(new ProductRequestDTO("Parrot Toy", "Bright and engaging toy for parrots.", 7.50, PET_SUPPLIES, "https://tse3.mm.bing.net/th?id=OIP.JZUymTfD4SPfWly4qReD8gHaHR&w=200&h=196&c=7"));
        Product aquariumFilter = this.productService.createProduct(new ProductRequestDTO("Aquarium Filter", "Keeps your aquarium water clean and clear.", 30.00, AQUATICS, "https://tse1.mm.bing.net/th?id=OIP.WTXtZ47MEJ2vXW-ziCOERQHaGo&w=200&h=179&c=7"));
        Product gardenShovel = this.productService.createProduct(new ProductRequestDTO("Garden Shovel", "Durable and lightweight shovel for all purposes.", 9.99, GARDEN, "https://tse1.mm.bing.net/th?id=OIP.Oa5QvBP-dKCASufIT1lLswHaGl&w=200&h=178&c=7"));
        Product sunflowerSeeds = this.productService.createProduct(new ProductRequestDTO("Sunflower Seeds", "Grow your own sunflowers in the garden.", 4.99, GARDEN, "https://tse2.mm.bing.net/th?id=OIP.XRrV0kvf-RN5jkslwIpOpgHaE8&w=200&h=133&c=7"));
        Product bettaFish = this.productService.createProduct(new ProductRequestDTO("Betta Fish", "Vibrant and easy-to-care-for aquarium fish.", 5.99, AQUATICS, "https://tse1.mm.bing.net/th?id=OIP.pzeY2p9w_D1vjsUuezOegwHaE8&w=200&h=133&c=7"));
        Product catLitterBox = this.productService.createProduct(new ProductRequestDTO("Cat Litter Box", "Spacious and easy to clean.", 18.99, PET_SUPPLIES, "https://tse2.mm.bing.net/th?id=OIP.a1KQ6NcELFhkw0A-kBJoRwHaHa&w=200&h=200&c=7"));
        Product lavenderPlant = this.productService.createProduct(new ProductRequestDTO("Lavender Plant", "Fragrant and calming plant for home decor.", 14.99, PLANTS, "https://tse4.mm.bing.net/th?id=OIP.iRtssbpJtmjFYmNDWQW9OgHaFj&w=200&h=150&c=7"));
        Product dogBed = this.productService.createProduct(new ProductRequestDTO("Dog Bed", "Cozy and soft bed for your furry friend.", 30.00, PET_SUPPLIES, "https://tse2.mm.bing.net/th?id=OIP.ZDYAb460owwP72CyezEQWAHaHa&w=200&h=200&c=7"));
        Product koiFish = this.productService.createProduct(new ProductRequestDTO("Koi Fish", "Elegant and colorful fish for outdoor ponds.", 25.99, AQUATICS, "https://tse3.mm.bing.net/th?id=OIP.rx51xL7Sjc1AiAzxYAMO1AHaE9&w=200&h=134&c=7"));
        Product herbGardenKit = this.productService.createProduct(new ProductRequestDTO("Herb Garden Kit", "Grow fresh herbs in your kitchen.", 20.00, GARDEN, "https://tse2.mm.bing.net/th?id=OIP.Kdrl749UP05TMoV25FmqOAHaHX&w=200&h=199&c=7"));
        Product birdFeeder = this.productService.createProduct(new ProductRequestDTO("Bird Feeder", "Attract beautiful birds to your backyard.", 10.50, GARDEN, "https://tse1.mm.bing.net/th?id=OIP.B7H6K_YvcedtfIdpPQAjBQHaHa&w=200&h=200&c=7"));
        Product succulentMix = this.productService.createProduct(new ProductRequestDTO("Succulent Mix", "A collection of small, hardy succulents for indoor decor.", 15.99, PLANTS, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJiJ8gJdNn779AfBi3saw4cQalyHA25cMyQ&s"));
        Product cactusPlant = this.productService.createProduct(new ProductRequestDTO("Cactus Plant", "A spiky, drought-resistant plant for your home.", 8.99, PLANTS, "https://images.immediate.co.uk/production/volatile/sites/10/2020/07/2048x1365-Cacti-GG-LI1814848@EasyCacti_1of2_Ro-1ddb127.jpg?quality=90&fit=700,466"));
        Product dogChewToy = this.productService.createProduct(new ProductRequestDTO("Dog Chew Toy", "Durable toy to keep your dog engaged and happy.", 6.50, PET_SUPPLIES, "https://dogtownedrygoods.com/cdn/shop/products/dog-bone-rope-chew-toy-702096_600x.jpg?v=1647981422"));
        Product aquariumDecorRocks = this.productService.createProduct(new ProductRequestDTO("Aquarium Decor Rocks", "Natural stones to enhance your aquarium.", 12.99, AQUATICS, "https://www.cdaquatics.co.uk/images/products/betta-rock-formation-aquarium-ornament_1th_1877_large.jpg"));
        Product hangingPlant = this.productService.createProduct(new ProductRequestDTO("Hanging Plant", "A lush plant in a hanging basket, perfect for balconies.", 22.00, PLANTS, "https://edsplantshop.com/cdn/shop/collections/trailing-hanging-indoor-plants-952176_1024x1024.jpg?v=1732258780"));
        Product gardenRake = this.productService.createProduct(new ProductRequestDTO("Garden Rake", "Essential for clearing leaves and soil preparation.", 10.50, GARDEN, "https://cdn.webshopapp.com/shops/281257/files/449443588/kinzo-garden-rake-rake-with-stem-garden-tools-gard.jpg"));
        Product koiPondPump = this.productService.createProduct(new ProductRequestDTO("Koi Pond Pump", "Efficient pump for maintaining healthy water flow.", 45.99, AQUATICS, "https://m.media-amazon.com/images/I/61-XVTzlqUL._AC_UF1000,1000_QL80_.jpg"));
        Product herbSeeds = this.productService.createProduct(new ProductRequestDTO("Herb Seeds", "Grow your own basil, parsley, and thyme.", 3.50, GARDEN, "https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-02/hgic_herb_FennelSeal_1600.jpg?itok=shmtAoUp"));
        Product birdHouse = this.productService.createProduct(new ProductRequestDTO("Bird House", "A cozy wooden home for garden birds.", 15.00, GARDEN, "https://www.westminsterteak.com/MIMGA/19003/19003-teak-bird-house-on-fence-post-front-view-with-trees-in-background.jpg"));
        Product tropicalFishFood = this.productService.createProduct(new ProductRequestDTO("Tropical Fish Food", "Nutritious flakes for vibrant tropical fish.", 5.99, AQUATICS, "https://apifishcare.com/images/products-us/tropical-flakes/tropical-flakes-5.7.jpg"));
        Product terrariumKit = this.productService.createProduct(new ProductRequestDTO("Terrarium Kit", "Create your own mini ecosystem.", 30.00, GARDEN, "https://i.etsystatic.com/5388059/r/il/678f09/1043687542/il_570xN.1043687542_kvz9.jpg"));
        Product hangingBirdBath = this.productService.createProduct(new ProductRequestDTO("Hanging Bird Bath", "Attract birds to your garden with this stylish bath.", 12.50, GARDEN, "https://www.songbirdgarden.com/store/ProdImages/ProdImages_Extra/22930_SBH775_3-Circles-Hanging-Bird-Bath-Jade-Green-1200.jpg"));
        Product aquariumLight = this.productService.createProduct(new ProductRequestDTO("Aquarium Light", "Bright LED light to enhance your tank's appearance.", 25.00, AQUATICS, "https://rukminim2.flixcart.com/image/850/1000/xif0q/aquarium-tools/d/y/g/super-slim-led-aquarium-light-plants-grow-lighting-clip-on-lamp-original-imagw4hzuvjm7krt.jpeg?q=20&crop=false"));
        Product organicCompost = this.productService.createProduct(new ProductRequestDTO("Organic Compost", "Boost your garden soil with nutrient-rich compost.", 6.99, GARDEN, "https://darlingorganics.co.za/wp-content/uploads/2022/09/Untitled-design-66.jpg"));
        Product hangingHerbsPlanter = this.productService.createProduct(new ProductRequestDTO("Hanging Herbs Planter", "Compact solution for growing fresh herbs indoors.", 18.99, GARDEN, "https://www.gardenandhome.co.za/wp-content/uploads/2024/01/Indoor-Herb-Garden.jpg"));
        Product clownFish = this.productService.createProduct(new ProductRequestDTO("Clown Fish", "Brightly colored marine fish, ideal for saltwater tanks.", 15.99, AQUATICS, "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_400_q85.jpg"));
        Product ecoFriendlyLitter = this.productService.createProduct(new ProductRequestDTO("Eco-Friendly Cat Litter", "Natural and biodegradable cat litter.", 9.99, PET_SUPPLIES, "https://www.habitatpets.com.au/cdn/shop/products/Breeders-Choice-Cat-Litter-30L_1400x.jpg?v=1641318912"));
        Product goldfish = this.productService.createProduct(new ProductRequestDTO("Goldfish", "Classic freshwater fish for beginners.", 2.99, AQUATICS, "https://www.mysis.com/hobbyist/wp-content/uploads/sites/2/2018/09/Goldfish-Image.jpg"));
        Product rosePetalDiffuser = this.productService.createProduct(new ProductRequestDTO("Rose Petal Diffuser", "Create a fragrant ambiance with rose aroma.", 20.00, GARDEN, "https://thesomersettoiletryco.co.uk/cdn/shop/files/the-somerset-toiletry-company-naturally-european-diffuser-rose-petal-kraft_grande.jpg?v=1724998665"));
        Product petCarrier = this.productService.createProduct(new ProductRequestDTO("Pet Carrier", "Safe and comfortable for traveling with pets.", 35.00, PET_SUPPLIES, "https://m.media-amazon.com/images/I/81oUJywa6KL._AC_UF1000,1000_QL80_.jpg"));


        // ratings
        this.productService.writeRating(fishTank.getId(), new RatingRequestDTO(4, "I just absolutely love this fish tank! I've added a few guppy fish, and now my living room feels like a serene aquatic paradise 🐠.", wesselicious.getId()));
        this.productService.writeRating(fishTank.getId(), new RatingRequestDTO(2, rudopudo.getId()));
        this.productService.writeRating(guppyFish.getId(), new RatingRequestDTO(3, "I think these fish are fine, but I personally prefer Betta fish for their vibrant colors.", rudopudo.getId()));
        this.productService.writeRating(snakePlant.getId(), new RatingRequestDTO(5, "This plant takes me back to the calm of my grandma's garden! Perfectly low maintenance and beautiful.", arcticFox.getId()));
        this.productService.writeRating(roseBush.getId(), new RatingRequestDTO(4, "A stunning plant that truly reminds me of strolling through a rose garden. A little thorny but totally worth it!", fjellgeit.getId()));
        this.productService.writeRating(lavenderPlant.getId(), new RatingRequestDTO(3, "The fragrance is cozy, but maybe a bit too subtle for my taste.", vinterbarn.getId()));
        this.productService.writeRating(sunflowerSeeds.getId(), new RatingRequestDTO(5, "Summer in a packet! These seeds grow into beautiful sunflowers that brighten up my garden.", sommerglad.getId()));
        this.productService.writeRating(aquariumFilter.getId(), new RatingRequestDTO(4, "A fantastic filter that keeps my fish tank pristine. Perfect for a beginner's setup!", fjordfant.getId()));
        this.productService.writeRating(herbGardenKit.getId(), new RatingRequestDTO(2, "I was expecting a more diverse selection of herbs, but this felt a bit underwhelming.", mooselover.getId()));
        this.productService.writeRating(bonsaiTree.getId(), new RatingRequestDTO(5, "This tree exudes elegance! I feel so tranquil whenever I see it in my living room.", wesselicious.getId()));
        this.productService.writeRating(bettaFish.getId(), new RatingRequestDTO(4, "These fish have such vibrant colors, reminding me of a tropical lagoon. A bit sensitive but worth it.", rudopudo.getId()));
        this.productService.writeRating(dogLeash.getId(), new RatingRequestDTO(3, "The leash is sturdy and functional, but it could use some extra padding for comfort.", vinterbarn.getId()));
        this.productService.writeRating(fishTank.getId(), new RatingRequestDTO(5, "I love the simplicity of this tank. It's minimalistic yet spacious enough for my fish to thrive.", fjellgeit.getId()));
        
    }
}