import '../style/Footer.scss';
const Footer = () => {
    return <FooterLayout />
}

export default Footer;

const FooterLayout = () => (
    <div className="stopka">
        &#169; 2023 Jakub Błażk, Mikołaj Woźniak, Michał Ruc
        <h4>Kontakt:</h4>E-mail: kontakt@strona.com<br></br>
        Telefon: 123-456-789
        <h4><a href="">Warunki</a></h4>
        <h4><a href="">Pomoc</a></h4>
    </div>
)