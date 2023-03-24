import '../style/Konfigurator.scss'
import { useState } from 'react'

interface zapisaneKonf{
    procesor:string;
    plyta_glowna:string;
    karta_graficzna:string;
    pamiec_ram:string;
    pamiec_ssd:string;
    pamiec_hdd:string;
    zasilacz:string;
    obudowa:string;
}
interface IKonPolProps{
    konfig:zapisaneKonf
}


const KompPol = (props :IKonPolProps)=>{
    return <KompPolLayout konfig={props.konfig}/>
}

export default KompPol;

const KompPolLayout = (props:IKonPolProps)=>(
    <div className='komponentyPol'>
        <ul>
            <li>Procesor: {props.konfig.procesor+'\n'}</li>
            <li>Płyta główna: {props.konfig.plyta_glowna+'\n'}</li>
            <li>Karta graficzna: {props.konfig.karta_graficzna+'\n'}</li>
            <li>Ram: {props.konfig.pamiec_ram+'\n'}</li>
            <li>Pamięć Hdd: {props.konfig.pamiec_hdd+'\n'}</li>
            <li>Pamięć Sdd: {props.konfig.pamiec_ssd+'\n'}</li>
            <li>Zasilacz: {props.konfig.zasilacz+'\n'}</li>
            <li>Obudowa: {props.konfig.obudowa+'\n'}</li>
       </ul>
    </div>
)