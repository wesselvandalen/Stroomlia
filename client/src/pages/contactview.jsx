import './contactview.css';
import Footer from '../components/footer';

export default function ContactView() {

    const locations = [
        'Bergen',
        'Stavanger',
        'Oslo',
        'Drammen',
        'Tromsø',
        'Trondheim',
        'Kristiansand',
        'Fredrikstad',
        'Sandnes',
        'Ålesund',
        'Bodø',
        'Skien'
    ];

    return (
        <div className="cv-container">
            <div className="cv-content">
                <h1>Kontakt</h1>

                <h3>Butikkene våre</h3>
                <p>Hvis du vil besøke oss i én av våre butikker, kan du gå til følgende byer:</p>

                <ul>
                    {locations.map((location, index) => {
                        return <li key={index}>{location}</li>
                    })}
                </ul>

                <h3>Kontaktinformasjon</h3>
                <p>Du kan også nå oss på følgende informasjon:</p>

                <ul>
                    <li><strong>E-post:</strong> stroomlia@gmail.no</li>
                    <li><strong>Tel:</strong> +47 76 35 02 40</li>
                    <li><strong>Postbuss:</strong> 4588, Kvås, Lyndal, Vest-Agder, Sørlandet</li>
                </ul>

                <h3>Kundeservice</h3>
                <p>
                    Kundeservice er tilgjengelig 24/7, og er helt gratis å ringe.
                    <br /> <strong>Tel:</strong> +47 76 35 02 40
                </p>
            </div>
            <Footer/>
        </div>
    )
}