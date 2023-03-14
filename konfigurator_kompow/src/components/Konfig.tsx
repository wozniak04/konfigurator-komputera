import TextField from "@mui/material/TextField";
import "../style/Konfigurator.scss"
import Komponenty from "./Komponenty";
import Menus from "./Menus";
import Konfigurator from "./KonfigProps";
import KompPol from "./KomponentyPol";
import React from "react";
import Footer from "./Footer";
import axios from "axios";


interface Iorodzaj{
    nazwa:string;
    rodzaj:string
}
interface IoKonfigProps{
    procesor:string[];
    plyta:string[];
    karta:string[];
    ram:string[];
    ssd:string[];
    hdd:string[];
    zasilacz:string[];
    obudowa:string[]
}

const Konfigur=()=>{
    const [procesor,setprocesor]=React.useState<string[]>([])
    const addtoProcesor=async(x:string)=>{
        const arr=[...procesor,x]
        await setprocesor(arr)
    }
    const [plyta,setplyta]=React.useState<string[]>([])
    const addtoPlyta=async(x:string)=>{
        const arr=[...plyta,x]
        await setplyta(arr)
    }
    const [karta,setkarta]=React.useState<string[]>([])
    const addtokarta=async(x:string)=>{
        const arr=[...karta,x]
        await setkarta(arr)
    }
    const [ram,setram]=React.useState<string[]>([])
    const addtoRam=async(x:string)=>{
        const arr=[...ram,x]
        await setram(arr)
    }
    const [ssd,setssd]=React.useState<string[]>([])
    const addtossdr=async(x:string)=>{
        const arr=[...ssd,x]
        await setssd(arr)
    }
    const [hdd,sethdd]=React.useState<string[]>([])
    const addtohdd=async(x:string)=>{
        const arr=[...procesor,x]
        await sethdd(arr)
    }
    const [zasilacz,setzasilacz]=React.useState<string[]>([])
    const addtozasilacz=async(x:string)=>{
        const arr=[...zasilacz,x]
        await setzasilacz(arr)
    }
    const [obudowa,setobudowa]=React.useState<string[]>([])
    const addtoObudowa=async(x:string)=>{
        const arr=[...procesor,x]
        await setobudowa(arr)
    }

    const dodaj=async (data:Iorodzaj)=>{
            data.forEach(e => {
                
            
        switch(e.rodzaj){
            case 'Procesor':{
                await addtoArr(e.nazwa)
            } break

            case 'Karta graficzna':{
                 addtoArr(e.nazwa,setkarta,karta)
             } break

             case 'Obudowa':{
                addtoArr(e.nazwa,setobudowa,obudowa)
             } break

             case 'Pamięć HDD':{
                 addtoArr(e.nazwa,sethdd,hdd)
             } break

             case 'Pamięć SSD':{
                 addtoArr(e.nazwa,setssd,ssd)
             } break

             case 'Płyta główna':{
                 addtoArr(e.nazwa,setplyta,plyta)
             } break

             case 'Zasilacz':{
                 addtoArr(e.nazwa,setzasilacz,zasilacz)
             } break

             case 'Pamięć RAM':{
                 addtoArr(e.nazwa,setram,ram)
             } break
        }
    })

    }

    

    React.useEffect(()=>{
        axios.get('http://localhost:5000/getPodzespoly').then((res)=>{
            res.data.forEach((e:Iorodzaj)=>{
                dodaj(res.data)
            })
        })
    },[])

    const zapiszkonfiguracje=()=>{

    }

    return <KonfigLayout />
}
const KonfigLayout=()=>{
    return(
        <>
        <Menus/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="konf">
                <div className="konf_wlasc">
                    <div className="search">
                        <TextField id="outlined-basic" variant="outlined" fullWidth label="Szukaj"/>
                    </div>
                    <div className="komponent" id="procesor">
                        <h3>Procesor</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="plyta-glowna">
                        <h3>Płyta Główna</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="karta-graficzna">
                        <h3>Karta graficzna</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="ram">
                        <h3>Pamięć RAM</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="hdd">
                        <h3>Pamięć HDD</h3>   
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="ssd">
                        <h3>Pamięć SSD</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="zasilacz">
                        <h3>Zasilacz</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                    <div className="komponent" id="obudowa">
                        <h3>Obudowa</h3>
                        <Konfigurator src="" opis=""/>
                    </div>
                </div>
                <button className="zapisz">zapisz</button>
                <div className="polecane">
                    <h3>Polecane komponenty do komputerów:</h3>
                    <div>
                        <KompPol src="" opis=""/>
                    </div>
                    <div>
                        <KompPol src="" opis=""/>
                    </div>
                    <div>
                        <KompPol src="" opis=""/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Konfigur;
