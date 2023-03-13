import '../style/Konfigurator.scss'

interface IKonfigProps{
    src:string;
    opis:string;
}

const Konfigurator = (props:IKonfigProps)=>{
    return <KonfigLayout src={props.src} opis={props.opis}/>
}

export default Konfigurator;

const KonfigLayout = (props:IKonfigProps)=>(
    <div className='konf'>
            <img src={props.src} className='zdj'/>
            <p className='opis'>{props.opis}</p>
            <select>
                <option>opcja 1</option>
                <option>opcja 2</option>
            </select>
    </div>
)