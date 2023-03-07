import '../style/Komponenty.scss'

interface IKomponentyProps{
    src: string;
    opis: string;
}
const Komponenty=(props:IKomponentyProps)=>{
    return <KomponentyLayout src={props.src} opis={props.opis}/>
}
export default Komponenty;

const KomponentyLayout = (props:IKomponentyProps)=>(
    <div className='komponenty'>
        <img src={props.src} className="zdj"/>
        <p className='opis'>{props.opis}</p>
    </div>
)