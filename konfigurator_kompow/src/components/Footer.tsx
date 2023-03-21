import '../style/Footer.scss';
import CookieConsent, { Cookies, resetCookieConsentValue } from "react-cookie-consent"
const Footer = () => {
    return <FooterLayout />
}

export default Footer;

const FooterLayout = () => (
    <div className="stopka">
        &#169; 2023 Jakub Błażk, Mikołaj Woźniak, Michał Ruc
        <CookieConsent location="bottom"buttonText="Ok 👍"cookieName="myAwesomeCookieName2"style={{ background: "#2B373B" }}buttonStyle={{ color: "#4e503b", fontSize: "13px" }}expires={150}>
            Ta strona używa ciasteczek.{" "}
            <span style={{ fontSize: "10px" }}>ąąąąąąąąąąąąąąąąąąąąą</span>
        </CookieConsent>
    </div>
)
