import TextField from "@mui/material/TextField";
import "../style/Konfigurator.scss"
import Komponenty from "./Komponenty";
import Menus from "./Menus";
import Konfigurator from "./KonfigProps";
import KompPol from "./KomponentyPol";
import React from "react";
import Footer from "./Footer";
interface IoKonfigProps{

}

const Konfigur=()=>{
    const [procesor,setprocesor]=React.useState('')
    const [plyta,setplyta]=React.useState('')
    const [karta,setkarta]=React.useState('')
    const [ram,setram]=React.useState('')
    const [ssd,setssd]=React.useState('')
    const [hdd,sethdd]=React.useState('')
    const [zasilacz,setzasilacz]=React.useState('')
    const [obudowa,setobudowa]=React.useState('')

    const zapiszkonfiguracje=()=>{

    }

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
                <button className="zapisz">zapisz</button>
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
            </div>
            <Footer/>
        </>
    )
}

export default Konfigur;
