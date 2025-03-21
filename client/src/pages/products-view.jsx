import './products-view.css';
import { fetchProducts, sortByProductCategory } from "../service/product-service.js";
import ProductBlock from "../components/product-block.jsx";
import { useEffect, useState, React } from "react";
import Footer from '../components/footer.jsx';
import { useLocation } from 'react-router-dom';
import LoadingScreen from '../components/loading-screen.jsx';

export default function ProductsView() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation();
    const [selectedCategories, setSelectedCategories] = useState({
        mobiltelefoner: true,
        laptoper: true,
        tvogskjermer: true,
        tilbehør: true,
        smartklokker: true,
        audio: true
    });

    // Hent produkter én gang
    useEffect(() => {
        async function fetchAndSetProducts() {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchAndSetProducts();
    }, []);

    // Filtrer produkter basert på URL og valgte kategorier
    useEffect(() => {
        const categoryFromUrl = getCategoryFromUrl();
        let filtered = products;

        if (categoryFromUrl) {
            filtered = filtered.filter(
                (product) => product.productCategory.toLowerCase() === categoryFromUrl.toLowerCase()
            );
        }

        filtered = filtered.filter((product) => selectedCategories[product.productCategory.toLowerCase()]);

        setFilteredProducts(filtered);
    }, [products, location, selectedCategories]);

    const getCategoryFromUrl = () => {
        const params = new URLSearchParams(location.search);
        return params.get("kategori");
    };

    const handleCategoryChange = (e) => {
        const { name, checked } = e.target;
        setSelectedCategories((prev) => ({
            ...prev,
            [name]: checked
        }));
    };

    if (!products.length) {
        return <LoadingScreen message="Vi lader produktene..." />;
    }

    return (
        <div className="projects-view">
            <div className="projects-container">
                <div className="projects-content">
                    <div className="product-list">
                        <div className="product-list-header">
                            <div className="product-list-left-header">
                                <h3>Assortimentet vårt</h3>
                                <p>
                                    Oppdag topp elektronikk som setter standarden for ytelse, design og innovasjon.
                                    Utforsk vårt brede utvalg av smarttelefoner, bærbare datamaskiner, og tilbehør fra ledende merker.
                                </p>
                            </div>
                        </div>

                        <div className="product-list-filter-container">
                            <div className="product-list-filter">
                                <h3 className="product-list-filter-title">Filtrer produkt</h3>
                                <div className="filtering-block">
                                    <h3>Velg produktkategorier</h3>
                                    {Object.keys(selectedCategories).map((category) => (
                                        <div key={category}>
                                            <input
                                                type="checkbox"
                                                name={category}
                                                checked={selectedCategories[category]}
                                                onChange={handleCategoryChange}
                                                className="input-box"
                                            />
                                            <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="product-list-products">
                                {filteredProducts.map((product) => (
                                    <ProductBlock
                                        key={product.id}
                                        id={product.id}
                                        title={product.name}
                                        imagePath={product.imagePaths[0]}
                                        description={product.description}
                                        price={product.price}
                                        ratings={product.ratings}
                                        averageRating={product.averageRating}
                                        numberOfRatings={product.numberOfRatings}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}