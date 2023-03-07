import TextField from "@mui/material/TextField";
import "../style/Konfigurator.scss"
import Komponenty from "./Komponenty";
import Konfigurator from "./KonfigProps";
import KompPol from "./KomponentyPol";
const Konfigur=()=>{
    return <KonfigLayout />
}
const KonfigLayout=()=>{
    return(
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="konf">
                <div className="konf_wlasc">
                    <div className="search">
                        <TextField id="outlined-basic" variant="outlined" fullWidth label="Szukaj"/>
                    </div>
                    <div className="komponent">

                    </div>
                    <div className="komponent">

                    </div>
                    
                </div>
                <div className="polecane">
                    <h3>Polecane komponenty do komputerów:</h3>
                    <KompPol src="" opis=""/>
                    <KompPol src="" opis=""/>
                    <KompPol src="" opis=""/>
                </div>
                <div className="stopka">
                        &#169; 2023 Jakub Błażk, Mikołaj Woźniak, Michał Ruc
                        <h4>Kontakt:</h4>E-mail: kontakt@strona.com Telefon: 123-456-789
                        <h4><a href="">Warunki</a></h4>
                        <h4><a href="">Pomoc</a></h4>
                </div>
            </div>
        </>
    )
}

export default Konfigur;
/** Strona się zawieszała przy uruchomieniu konfiguratora, teraz próbuję naprawienia błędów.
 * {props.opis}
 * 
                            <Konfig src="" opis="" />
                            <Konfig src="" opis="" />
                            <Konfig src="" opis="" />
                            <Konfig src="" opis="" />
                            <Konfig src="" opis="" />
                            <Konfig src="" opis="" />

                            S
                            <div className="polecane">
                    <h3>Polecane komponenty do komputerów:</h3>
                    <div className="komponentyPol">
                        <img src={props.src} className="zdj"/>
                        <p className="opis">Lorem ipsum</p>
                        <button id="btnDodaj">Dodaj</button>
                    </div>
                    <div className="komponentyPol">
                        <img src={props.src} className="zdj"/>
                        <p className="opis">Lorem ipsum</p>
                        <button id="btnDodaj2">Dodaj</button>
                    </div>
                    <div className="komponentyPol">
                        <img src={props.src} className="zdj"/>
                        <p className="opis">Lorem ipsum</p>
                        <button id="btnDodaj3">Dodaj</button>
                    </div>
                </div>


                
                <div className="polecane">
                    <h3>Polecane komponenty do komputerów:</h3>
                    <div className="komponentyPol">
                        <img src={props.src} className="zdj"/>
                        <p className="opis">Lorem ipsum</p>
                        <button id="btnDodaj">Dodaj</button>
                    </div>
                    <div className="komponentyPol">
                        <img src={props.src} className="zdj"/>
                        <p className="opis">Lorem ipsum</p>
                        <button id="btnDodaj2">Dodaj</button>
                    </div>
                    <div className="komponentyPol">
                        <img src={props.src} className="zdj"/>
                        <p className="opis">Lorem ipsum</p>
                        <button id="btnDodaj3">Dodaj</button>
                    </div>
                </div>
*/