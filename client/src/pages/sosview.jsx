import './sosview.css';
import Footer from '../components/footer';

export default function SosView() {

    return (
        <div className="sos-container">
            <div className="sos-content">
                <h1>Spørsmål og Svar</h1>

                <h3>Hvor lang tid tar levering?</h3>
                <p>Normalt leverer vi innen 1–3 virkedager i Norge. Bestillinger som legges inn før kl. 14:00 sendes samme dag.</p>

                <h3>Hva skjer hvis jeg mottar et defekt produkt?</h3>
                <p>Dersom du mottar et defekt produkt, ta kontakt med oss så snart som mulig. Vi hjelper deg med retur, bytte eller reparasjon gjennom Apple-garantien.</p>

                <h3>Kan jeg returnere en vare hvis jeg ombestemmer meg?</h3>
                <p>Ja, vi tilbyr 14 dagers angrerett i henhold til norsk lov, så lenge produktet er uåpnet og i original emballasje.</p>

                <h3>Hvordan kontakter jeg kundeservice?</h3>
                <p>Du kan nå oss via e-post, telefon eller live chat på nettsiden vår. Våre åpningstider finner du på kontaktsiden.</p>

                <h3>Er produktene deres originale Apple-produkter?</h3>
                <p>Ja, alle våre produkter er 100 % originale og kommer enten direkte fra Apple eller autoriserte distributører.</p>

                <h3>Tilbyr dere garanti på produktene?</h3>
                <p>Ja, alle Apple-produkter har standard Apple-garanti på ett år. I tillegg kan du kjøpe AppleCare+ for utvidet dekning.</p>

                <h3>Tilbyr dere finansiering eller delbetaling?</h3>
                <p>Ja, vi samarbeider med ulike finansieringsløsninger slik at du kan betale i avdrag. Du finner mer informasjon om dette i kassen.</p>

            </div>
            <Footer/>
        </div>
    )
}