import './products-view.css';
import { fetchProducts, sortByProductCategory } from "../service/product-service.js";
import ProductBlock from "../components/product-block.jsx";
import { useEffect, useState, React } from "react";
import Footer from '../components/footer.jsx';
import { useLocation } from 'react-router-dom';
import { strokeWidth } from '../service/config.js';
import LoadingScreen from '../components/loading-screen.jsx';

export default function ProductsView() {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const [selectedCategories, setSelectedCategories] = useState({
        mobiltelefoner: true,
        laptoper: true,
        tvogskjermer: true,
        tilbehør: true,
        smartklokker: true,
        audio: true
    });

    useEffect(() => {
        callProductsFetch();
    }, []);

    // Filtrer produkter etter kategori
  useEffect(() => {
    const category = getCategoryFromUrl();
    if (category) {
      setProducts(products.filter((product) => product.productCategory.toLowerCase() === category.toLowerCase()));
    } else {
        setProducts(products); // Hvis ingen kategori er valgt, vis alle produkter
    }
  }, [location.search, products]);

    if (!products) {
        return (
            <LoadingScreen
                message="Vi lader produktene..."
            />
        );
    }

    async function callProductsFetch() {
        try {
            const data = await fetchProducts();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching scents:", error);
        }
    }

    const getCategoryFromUrl = () => {
        const params = new URLSearchParams(location.search);
        return params.get('kategori'); // Får ut "mobiltelefoner" for eksempel
    };

    const handleCategoryChange = (e) => {
        const { name, checked } = e.target;
        setSelectedCategories((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const filteredProducts = products.filter((product) => {
        const category = product.productCategory.toLowerCase();
        if (selectedCategories.mobiltelefoner && category === 'mobiltelefoner') {
            return true;
        }
        if (selectedCategories.laptoper && category === 'laptoper') {
            return true;
        }
        if (selectedCategories.tvogskjermer && category === 'tvogskjermer') {
            return true;
        }
        if (selectedCategories.tilbehør && category === 'tilbehør') {
            return true;
        }
        if (selectedCategories.smartklokker && category === 'smartklokker') {
            return true;
        }
        if (selectedCategories.audio && category === 'audio') {
            return true;
        }

        return false;
    });

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
                                <h3 className="product-list-filter-title">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4.6C2 4.03995 2 3.75992 2.10899 3.54601C2.20487 3.35785 2.35785 3.20487 2.54601 3.10899C2.75992 3 3.03995 3 3.6 3H20.4C20.9601 3 21.2401 3 21.454 3.10899C21.6422 3.20487 21.7951 3.35785 21.891 3.54601C22 3.75992 22 4.03995 22 4.6V5.26939C22 5.53819 22 5.67259 21.9672 5.79756C21.938 5.90831 21.8901 6.01323 21.8255 6.10776C21.7526 6.21443 21.651 6.30245 21.4479 6.4785L15.0521 12.0215C14.849 12.1975 14.7474 12.2856 14.6745 12.3922C14.6099 12.4868 14.562 12.5917 14.5328 12.7024C14.5 12.8274 14.5 12.9618 14.5 13.2306V18.4584C14.5 18.6539 14.5 18.7517 14.4685 18.8363C14.4406 18.911 14.3953 18.9779 14.3363 19.0315C14.2695 19.0922 14.1787 19.1285 13.9971 19.2012L10.5971 20.5612C10.2296 20.7082 10.0458 20.7817 9.89827 20.751C9.76927 20.7242 9.65605 20.6476 9.58325 20.5377C9.5 20.4122 9.5 20.2142 9.5 19.8184V13.2306C9.5 12.9618 9.5 12.8274 9.46715 12.7024C9.43805 12.5917 9.39014 12.4868 9.32551 12.3922C9.25258 12.2856 9.15102 12.1975 8.94789 12.0215L2.55211 6.4785C2.34898 6.30245 2.24742 6.21443 2.17449 6.10776C2.10986 6.01323 2.06195 5.90831 2.03285 5.79756C2 5.67259 2 5.53819 2 5.26939V4.6Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Filtrer produkt
                                </h3>

                                <div className="filtering-block">
                                    <h3>Velg produktkategorier</h3>
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="mobiltelefoner"
                                            checked={selectedCategories.mobiltelefoner}
                                            onChange={handleCategoryChange}
                                            className="input-box"
                                        />
                                        <p>Mobiltelefoner</p>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="laptoper"
                                            checked={selectedCategories.laptoper}
                                            onChange={handleCategoryChange}
                                            className="input-box"
                                        />
                                        <p>Laptoper</p>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="tvogskjermer"
                                            checked={selectedCategories.tvogskjermer}
                                            onChange={handleCategoryChange}
                                            className="input-box"
                                        />
                                        <p>TV og skjermer</p>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="tilbehør"
                                            checked={selectedCategories.tilbehør}
                                            onChange={handleCategoryChange}
                                            className="input-box"
                                        />
                                        <p>Tilbehør</p>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="smartklokker"
                                            checked={selectedCategories.smartklokker}
                                            onChange={handleCategoryChange}
                                            className="input-box"
                                        />
                                        <p>Smartklokker</p>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="audio"
                                            checked={selectedCategories.audio}
                                            onChange={handleCategoryChange}
                                            className="input-box"
                                        />
                                        <p>Audio</p>
                                    </div>
                                </div>
                            </div>

                            <div className="product-list-products">
                                {filteredProducts.map((product) => {
                                    return <ProductBlock
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
                                })}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}