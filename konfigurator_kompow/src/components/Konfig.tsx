import TextField from "@mui/material/TextField";
import "../style/Konfigurator.scss"
interface IKonfigProps {
    src: string,
    opis: string
}
const Konfig=(props:IKonfigProps)=>{
    return(
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="konf">
                <div className="konf_wlasc">
                    <div className="ssearch">
                        <TextField id="outlined-basic" variant="outlined" fullWidth label="Search"/>
                    </div>
                    <div className="komponenty">
                        <img src={props.src} className="zdj" />
                        <p className="opis">{props.opis}</p>
                    </div>
                </div>
                <div className="polecane">
                    <h3>Polecane komponenty do komputerów:</h3>
                    <div className="komponentyPol">
                        <img src={props.src} className="zdj"/>
                        <p className="opis">{props.opis}</p>
                        <button id="btnDodaj">Dodaj</button>
                    </div>
                    <div className="komponentyPol2">
                        <img src={props.src} className="zdj"/>
                        <p className="opis">{props.opis}</p>
                        <button id="btnDodaj2">Dodaj</button>
                    </div>
                    <div className="komponentyPol3">
                        <img src={props.src} className="zdj"/>
                        <p className="opis">{props.opis}</p>
                        <button id="btnDodaj3">Dodaj</button>
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
export default Konfig;
