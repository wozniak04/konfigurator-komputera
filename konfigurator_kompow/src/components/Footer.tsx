import React from "react";
import '../style/Footer.scss'
class Footer extends React.Component {

    render() {
        return (
            <>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <div className="stopka">
                    &#169; 2023 Jakub Błażk, Mikołaj Woźniak, Michał Ruc
                    <h4>Kontakt:</h4>E-mail: kontakt@strona.com<br></br>
                    Telefon: 123-456-789
                    <h4><a href="">Warunki</a></h4>
                    <h4><a href="">Pomoc</a></h4>
                </div>
            </>
        )
    }
}

export default Footer;