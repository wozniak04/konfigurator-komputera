import '../style/Konfigurator.scss'
import axios from "axios";
import { useEffect } from 'react';

interface IKonfigProps {
    src: string;
    opis: string;
    dane: string[];
}

const Konfigurator = (props: IKonfigProps) => {


    return <KonfigLayout src={props.src} opis={props.opis} dane={props.dane}/>
}

export default Konfigurator;

const KonfigLayout = (props: IKonfigProps) => {
    

    return (
        <div className='konf'>
            <img src={props.src} className='zdj' />
            <p className='opis'>{props.opis}</p>
            <select>
                <option>wybierz {props.opis}</option>
                {
                    props.dane.map((e,i)=>(
                        <option key={i}>{e}</option>
                    ))
                }
            </select>
        </div>
    )
}