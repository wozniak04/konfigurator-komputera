import React from "react";
import '../style/Mids.scss'

interface IOfertaProps{
    src:string,
    opis:string
}

const Oferta = (props:IOfertaProps) => {
    return (
        <>
            <div className="oferta">
                <img src={props.src} className="zdj" />
                <p className="opis">{props.opis}</p>
            </div>
        </>
    )
}

export default Oferta;

