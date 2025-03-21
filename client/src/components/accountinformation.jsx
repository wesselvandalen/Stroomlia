export default function AccountInformation(props) {
    return (
        <div className="ai-p">
            <p>BrukerID: {props.props.uid}</p>
            <p>E-post: {props.props.email}</p>
            <p>E-post verifisert: {props.props.emailVerified ? 'Ja' : 'Nei'}</p>
            <p>Navn: {props.props.displayName}</p>
            <p>Telefonnummer: {props.props.phonenumber}</p>
            <p>Konto laget: {props.props.metadata.creationTime}</p>
            <p>Siste gang pålogget: {props.props.metadata.lastSignInTime}</p>
        </div>
    );
}