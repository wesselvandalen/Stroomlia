import './mainview.css';
import macbookAsset from '../assets/graphics/macbook.png';
import Footer from '../components/footer';
import { strokeWidth } from '../service/config.js';
import { useEffect, useState } from 'react';
import { fetchProducts, getRandomItems } from '../service/product-service.js';
import ProductBlock from '../components/product-block.jsx';

export default function Mainview() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    async function loadProducts() {
        const productData = await fetchProducts();
        setProducts(getRandomItems(productData, 3));
    }

    const perks = [
        { name: '100 % Norsk – Trygg og Lokal Handel', description: 'Strømlia er en helnorsk nettbutikk, noe som betyr rask levering, ingen skjulte avgifter og kundeservice som forstår dine behov.', icon: <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M17 9.24C16.605 9.725 16.065 10 15.5 10C14.935 10 14.41 9.725 14 9.24M10 9.24C9.605 9.725 9.065 10 8.5 10C7.935 10 7.41 9.725 7 9.24M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>},
        { name: 'Kun Ekte Apple-Produkter – Ingen Kopier', description: 'Vi selger kun originale Apple-produkter og tilbehør, slik at du kan være trygg på kvalitet og garanti fra produsenten.', icon: <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C8.68629 15 6 12.3137 6 9V3.44444C6 3.0306 6 2.82367 6.06031 2.65798C6.16141 2.38021 6.38021 2.16141 6.65798 2.06031C6.82367 2 7.0306 2 7.44444 2H16.5556C16.9694 2 17.1763 2 17.342 2.06031C17.6198 2.16141 17.8386 2.38021 17.9397 2.65798C18 2.82367 18 3.0306 18 3.44444V9C18 12.3137 15.3137 15 12 15ZM12 15V18M18 4H20.5C20.9659 4 21.1989 4 21.3827 4.07612C21.6277 4.17761 21.8224 4.37229 21.9239 4.61732C22 4.80109 22 5.03406 22 5.5V6C22 6.92997 22 7.39496 21.8978 7.77646C21.6204 8.81173 20.8117 9.62038 19.7765 9.89778C19.395 10 18.93 10 18 10M6 4H3.5C3.03406 4 2.80109 4 2.61732 4.07612C2.37229 4.17761 2.17761 4.37229 2.07612 4.61732C2 4.80109 2 5.03406 2 5.5V6C2 6.92997 2 7.39496 2.10222 7.77646C2.37962 8.81173 3.18827 9.62038 4.22354 9.89778C4.60504 10 5.07003 10 6 10M7.44444 22H16.5556C16.801 22 17 21.801 17 21.5556C17 19.5919 15.4081 18 13.4444 18H10.5556C8.59188 18 7 19.5919 7 21.5556C7 21.801 7.19898 22 7.44444 22Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>},
        { name: 'Rask Frakt – Rett Hjem til Deg', description: 'Vi vet at du vil ha produktene dine raskt! Derfor tilbyr vi lynrask levering over hele Norge, slik at du får varene dine uten unødvendig ventetid.', icon: <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5 9.5L7.5 4.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>},
        { name: 'Bygget for Teknologiinteresserte – Av en Utvikler', description: 'Strømlia er laget av en fullstack-utvikler med lidenskap for teknologi, noe som betyr en smidig, moderne og trygg netthandelsopplevelse.', icon: <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5455 9.92543C15.9195 9.26103 16.2313 8.66151 16.4236 8.20521C17.3573 5.98947 16.434 3.44077 14.1769 2.40112C11.9199 1.36148 9.65341 2.4395 8.65871 4.52093C6.75657 3.2157 4.21918 3.40739 2.81989 5.44424C1.42059 7.48108 1.85975 10.142 3.77629 11.594C4.6461 12.253 6.36636 13.2242 7.98596 14.0884M16.2972 11.7499C15.8751 9.482 13.9454 7.82334 11.5156 8.27415C9.08592 8.72497 7.51488 10.9171 7.84335 13.299C8.10725 15.2127 9.56392 19.7027 10.1264 21.394C10.2032 21.6248 10.2415 21.7402 10.3175 21.8206C10.3837 21.8907 10.4717 21.9416 10.5655 21.9638C10.6732 21.9894 10.7923 21.9649 11.0306 21.916C12.7765 21.5575 17.3933 20.574 19.1826 19.8457C21.4096 18.9392 22.5589 16.4841 21.6981 14.153C20.8372 11.8219 18.4723 10.9815 16.2972 11.7499Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            </svg> }
    ];

    if (!products) {
        return (<div>Lader produktene...</div>);
    }

    return (
        <div className="mv-container">

            <div className="mv-section">
                <div className="mv-intro-tekst-container">
                    <h3>MacBook Pro (16-inch, 2021)</h3>
                    <p className='intro-tekst-2'>Opplev ytelse i toppklasse med Apples kraftigste bærbare datamaskin.</p>
                    <p className='intro-tekst-disclaimer'>Produktinformasjon kan endres uten forvarsel, så vi anbefaler at du alltid dobbeltsjekker spesifikasjonene før kjøp.*</p>
                </div>
                <img src={macbookAsset} alt="MacBook Pro (16-inch, 2021) asset." className='mv-intro-graphic'/>
            </div>

            <div className="mv-perks">
                <div className="mv-perks-content">
                    {perks.map((perk, index) => {
                        return <div className="mv-perk" key={index}>
                            {perk.icon}
                            <h3>{perk.name}</h3>
                            <p>{perk.description}</p>
                        </div>  
                    })}
                </div>
            </div>

            <div className="mv-bts">
                <div className="mv-bts-content">
                    <h3 className='bts-title'>Back to School – Klar for en Ny Start!</h3>
                    <p className='bts-description'>Gjør deg klar for skoleåret med kraftige MacBooks, iPads og AirPods som hjelper deg å studere smartere. Strømlia har alt du trenger for en produktiv og inspirerende hverdag!</p>

                    <div className="mv-bts-products-container">
                        {products.map(product => {
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

            <Footer/>
        </div>
    );
}