import Oferta from "./Oferta";

const Mid = () => {
    return <MidLayout />
}

export default Mid;

const MidLayout = () => (
    <div className="main-all">
        <Oferta src="/komp1.jpg" opis={['Intel Core i5-12400F','Gigabyte Z690 GAMING X DDR4','RTX 2060','Kingston FURY 16GB (2x8GB) 3600MHz','2 TB','256 GB','SilentiumPC Vero L3 500W','ENDORFY Regnum 400 ARGB']} />
        <Oferta src="/komp2.jpg" opis={[]} />
        <Oferta src="/komp3.jpg" opis={[]} />
        <Oferta src="/komp4.jpg" opis={[]} />
        <Oferta src="/komp5.jpg" opis={[]} />
        <Oferta src="/komp6.jpg" opis={[]} />
    </div>
)