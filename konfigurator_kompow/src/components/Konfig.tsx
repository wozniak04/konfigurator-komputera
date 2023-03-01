import React from "react";
import TextField from "@mui/material/TextField";
interface IKonfigProps {
    src: string,
    opis: string
}
const Konfig=(props:IKonfigProps)=>{
    return(
        <div className="konf">
            <div></div>
            <div className="konf_wlasc">
                <div className="search">
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
            </div>
        </div>
    )
}
export default Konfig;