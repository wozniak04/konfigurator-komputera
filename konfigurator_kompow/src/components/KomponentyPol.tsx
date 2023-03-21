import '../style/Konfigurator.scss'

interface IKonPolProps{
    polecane:string
}

const KompPol = (props :IKonPolProps)=>{
    console.log(props.polecane.split('\n'))
    return <KompPolLayout polecane={props.polecane}/>
}

export default KompPol;

const KompPolLayout = (props:IKonPolProps)=>(
    <div className='komponentyPol'>
       {props.polecane}
    </div>
)