import '../style/Footer.scss';
import CookieConsent, { Cookies, resetCookieConsentValue } from "react-cookie-consent"
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
        <CookieConsent location="bottom"buttonText="Sure man!!"cookieName="myAwesomeCookieName2"style={{ background: "#2B373B" }}buttonStyle={{ color: "#4e503b", fontSize: "13px" }}expires={150}>
            This website uses cookies to enhance the user experience.{" "}
            <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
        </CookieConsent>
    </div>
)
