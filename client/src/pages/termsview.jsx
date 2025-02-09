import './termsview.css';
import Footer from '../components/footer';

export default function TermsView() {

    return (
        <div className="tv-container">
            <div className="tv-content">
                <h1>Vilkår og Betingelser</h1>

                <h3>Generelle betingelser</h3>
                <p>Ved å handle hos Strømlia godtar du våre vilkår og betingelser. Vi forbeholder oss retten til å endre vilkårene når som helst uten forvarsel, men vi lover å gjøre vårt beste for å kun gjøre endringer du ikke merker.</p>

                <h3>Priser og tilgjengelighet</h3>
                <p>Alle priser er oppgitt i norske kroner og inkluderer eventuelle avgifter. Produkter kan bli utsolgt raskere enn vi klarer å oppdatere lagerstatusen. Hvis du bestiller et produkt som ikke er på lager, sender vi deg et vennlig blikk via e-post.</p>

                <h3>Leveringstid</h3>
                <p>Vi streber etter å levere produktene dine raskt. Standard leveringstid er 2-5 virkedager, med unntak av uforutsette hendelser som snøstormer, tidsforvrengninger eller at budet blir distrahert av en søt hund på veien.</p>

                <h3>Retur og refusjon</h3>
                <p>Du har 14 dagers angrerett, men vi setter pris på om du tenker deg om før du kjøper. Hvis du ønsker å returnere et produkt, må det være i original emballasje, ubrukt og fri for tegn på at du har prøvd å omprogrammere det til en kunstig intelligens.</p>

                <h3>Ansvarsfraskrivelse</h3>
                <p>Strømlia kan ikke holdes ansvarlig for hva du gjør med produktene etter kjøp. Hvis du for eksempel bruker en iPad som tallerken og den knuser, er det på eget ansvar.</p>

                <h3>Kundeservice</h3>
                <p>Vi er her for deg! Ta kontakt med oss via e-post eller live chat hvis du har spørsmål</p>

            </div>
            <Footer />
        </div>
    )
}