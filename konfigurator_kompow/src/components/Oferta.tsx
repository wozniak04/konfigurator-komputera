import '../style/Mids.scss';
import { Navigate } from 'react-router';
interface IOfertaProps {
    src: string,
    opis: string[]
}

const Oferta = (props: IOfertaProps) => {
    return <OfertaLayout src={props.src} opis={props.opis} />
}

export default Oferta;

const OfertaLayout = (props: IOfertaProps) => (
    <div className="oferta" >
        <img src={props.src} className="zdj" />
        <p className="opis">{props.opis.join(',')}</p>
    </div>
)