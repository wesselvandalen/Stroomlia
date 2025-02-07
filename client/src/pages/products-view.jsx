import './products-view.css';
import { fetchProducts, sortByProductCategory } from "../service/product-service.js";
import ProductBlock from "../components/product-block.jsx";
import { useEffect, useState, React } from "react";
import { changeShowState, getShowState } from '../service/show-products-service.js';

export default function ProductsView() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        callProductsFetch();
    }, []);

    async function callProductsFetch() {
        try {
            const data = await fetchProducts();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error("Error fetching scents:", error);
        }
    }

    if (!products) {
        return (<p>Lader produktene...</p>)
    }

    return (
        <div className="projects-view">
            <div className="projects-container">
                <div className="projects-content">

                    {/* <div className="filter-grid">
                        <label>
                            <input
                                type="checkbox"
                                name='plants'
                                checked={showPlants}
                                onChange={handleShowPlantsChange}
                            />
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name='petsupplies'
                                checked={showPetSupplies}
                                onChange={handleShowPetSuppliesChange}
                            />
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name='garden'
                                checked={showGarden}
                                onChange={handleShowGardenChange}
                            />
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name='aquatics'
                                checked={showAquatics}
                                onChange={handleShowAquaticsChange}
                            />
                        </label>
                    </div> */}


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
                        <div className="product-list-products">
                            {products.map((product) => {
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
    );
}