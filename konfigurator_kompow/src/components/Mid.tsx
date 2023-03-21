import Oferta from "./Oferta";

const Mid = () => {
    return <MidLayout />
}

export default Mid;

const MidLayout = () => (
    <div className="main-all">
        <Oferta src="/komp1.jpg" opis={['Intel Core i5-12400F','Gigabyte X670 GAMING X AX']} />
        <Oferta src="/komp2.jpg" opis={[]} />
        <Oferta src="/komp3.jpg" opis={[]} />
        <Oferta src="/komp4.jpg" opis={[]} />
        <Oferta src="/komp5.jpg" opis={[]} />
        <Oferta src="/komp6.jpg" opis={[]} />
    </div>
)