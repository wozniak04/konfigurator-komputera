import TextField from "@mui/material/TextField";
import "../style/Konfigurator.scss"
import Komponenty from "./Komponenty";
import Menus from "./Menus";
import Konfigurator from "./KonfigProps";
import KompPol from "./KomponentyPol";
import '../style/Footer.scss'
const Konfigur=()=>{
    return <KonfigLayout />
}
const KonfigLayout=()=>{
    return(
        <>
        <Menus/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="konf">
                <div className="konf_wlasc">
                    <div className="search">
                        <TextField id="outlined-basic" variant="outlined" fullWidth label="Szukaj"/>
                    </div>
                    <div className="komponent" id="procesor">
                        <h3>Procesor</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="plyta-glowna">
                        <h3>Płyta Główna</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="karta-graficzna">
                        <h3>Karta graficzna</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="ram">
                        <h3>Pamięć RAM</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="hdd">
                        <h3>Pamięć HDD</h3>   
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="ssd">
                        <h3>Pamięć SSD</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="zasilacz">
                        <h3>Zasilacz</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="obudowa">
                        <h3>Obudowa</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                </div>
                <div className="polecane">
                    <h3>Polecane komponenty do komputerów:</h3>
                    <div>
                        <KompPol src="" opis=""/>
                    </div>
                    <div>
                        <KompPol src="" opis=""/>
                    </div>
                    <div>
                        <KompPol src="" opis=""/>
                    </div>
                </div>
                <div className="stopka">
                    &#169; 2023 Jakub Błażk, Mikołaj Woźniak, Michał Ruc
                    <h4>Kontakt:</h4>E-mail: kontakt@strona.com<br></br>
                    Telefon: 123-456-789
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