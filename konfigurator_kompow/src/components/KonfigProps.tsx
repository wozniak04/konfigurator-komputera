import '../style/Konfigurator.scss'
import axios from "axios";
import { useState,useEffect } from 'react';
import { Value } from 'sass';

interface IKonfigProps {
    opis: string;
    dane: string[];
    wybrane:(x:string,index:number) =>void;
    index:number;
}
interface IOProps{
    opis: string;
    dane: string[];
    wybrane:(x:string,index:number) =>void;
    index:number;
    val:string;
    ustawval:(e :React.ChangeEvent<HTMLSelectElement>)=>void
}

const Konfigurator = (props: IKonfigProps) => {

    const [value,setvalue]=useState('')
    const handlechange=(e :React.ChangeEvent<HTMLSelectElement>) =>{
        props.wybrane(e.target.value,props.index)
        setvalue(e.target.value)
    }

    return <KonfigLayout opis={props.opis} dane={props.dane} wybrane={props.wybrane} index={props.index} val={value} ustawval={handlechange}/>
}

export default Konfigurator;

const KonfigLayout = (props: IOProps) => {
    

    return (
        <div className='konf'>
            <img src={props.val!=='' ? `/komponenty_zdj/${props.val}.jpg`: `/komponenty_zdj/${props.dane[0]}.jpg`} className='zdj' />
            <p className='opis'>{props.opis}</p>
            <select value={props.val} onChange={(e)=>props.ustawval(e)}>
                
                {
                    props.dane.map((e,i)=>(
                        <option key={i} value={e}>{e}</option>
                    ))
                }
            </select>
        </div>
    )
}