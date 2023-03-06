import Oferta from "./Oferta";

const Mid = () => {
    return <MidLayout />
}

export default Mid;

const MidLayout = () => (
    <div className="main-all">
        <Oferta src="/komp1.jpg" opis="komp dnia" />
        <Oferta src="/komp2.jpg" opis="komp dnia" />
        <Oferta src="/komp3.jpg" opis="komp dnia" />
        <Oferta src="/komp4.jpg" opis="komp dnia" />
        <Oferta src="/komp5.jpg" opis="komp dnia" />
        <Oferta src="/komp6.jpg" opis="komp dnia" />
    </div>
)