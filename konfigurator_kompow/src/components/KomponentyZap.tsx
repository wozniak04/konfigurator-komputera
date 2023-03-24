import '../style/Konfigurator.scss'
import { useState } from 'react'
interface IKonPolProps{
    polecane:string
}
interface props{
    komponenty:string[]
}

const KompPol = (props :IKonPolProps)=>{
    return <KompPolLayout komponenty={props.polecane.split('\n')}/>
}

export default KompPol;

const KompPolLayout = (props:props)=>(
    <div className='komponentyPol'>
        <ul>
       {props.komponenty.map((e,i)=>(
        
            e!==''?<li key={i}>{e +'\n'}</li>:''
        
       ))}
       </ul>
    </div>
)