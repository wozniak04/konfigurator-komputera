import Oferta from "./Oferta";

const Mid = () => {
    return <MidLayout />
}

export default Mid;

const MidLayout = () => (
    <div className="main-all">
        <Oferta src="/komp1.jpg" opis={['Intel Core i5-12400F','Gigabyte Z690 GAMING X DDR4','RTX 2060','Kingston FURY 16GB (2x8GB) 3600MHz','2 TB','256 GB','SilentiumPC Vero L3 500W','ENDORFY Regnum 400 ARGB']} />
        <Oferta src="/komp2.jpg" opis={['AMD Ryzen 5 7600X','Gigabyte Z690 UD DDR4','RTX 3050','GOODRAM 16GB (2x8GB) 3600MHz','2 TB','512 GB','Thermaltake Toughpower GF 650W','be quiet! Silent Base 802 Czarna']} />
        <Oferta src="/komp3.jpg" opis={['AMD Ryzen 9 7950X','ASUS TUF GAMING B760-PLUS WIFI DDR4','RX 6600','Corsair 32GB (2x16GB) 3200MHz','2 TB','1 TB','Gigabyte UD1000GM PG5 PCIe 5.0 1000W','Genesis Irid 400 RGB']} />
        <Oferta src="/komp4.jpg" opis={['Intel Core i7-13700K','Gigabyte X670 GAMING X AX','RTX 4070 Ti','Kingston FURY 16GB (2x8GB) 3600MHz','2 TB','256 GB','ENDORFY Supremo FM5 750W','KRUX Leda']} />
        <Oferta src="/komp5.jpg" opis={['AMD Ryzen 9 7950X3D','ASUS ROG STRIX B550-F GAMING','GTX 1660 Super','G.SKILL 16 GB (2x8GB) 3200MHz','2 TB','512 GB','Corsair RM850e 850W','be quiet! Pure Base 500 Black']} />
        <Oferta src="/komp6.jpg" opis={['AMD Ryzen 5 7600X','Gigabyte Z690 GAMING X DDR4','RTX 2060','Kingston FURY 16GB (2x8GB) 3600MHz','2 TB','512 GB','Thermaltake Toughpower GF 650W','ASUS TUF GAMING GT301']} />
    </div>
)