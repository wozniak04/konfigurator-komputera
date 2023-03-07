import '../style/Konfigurator.scss'

interface IKonPolProps{
    src:string;
    opis:string;
}

const KompPol = (props:IKonPolProps)=>{
    return <KompPolLayout src={props.src} opis={props.opis}/>
}

export default KompPol;

const KompPolLayout = (props:IKonPolProps)=>(
    <div className='polecane'>
        <img src={props.src} className='zdj'/>
        <p className='opis'>{props.opis}</p>
    </div>
)