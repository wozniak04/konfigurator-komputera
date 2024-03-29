import TextField from "@mui/material/TextField";
import "../style/Konfigurator.scss"
import Komponenty from "./Komponenty";
import Menus from "./Menus";
import Konfigurator from "./KonfigProps";
import KompPol from "./KomponentyPol";
import KompZap from "./KomponentyZap";
import Footer from "./Footer";
import axios from "axios";
import React,{useState} from "react"

interface Iorodzaj{
    nazwa:string;
    rodzaj:string;
}
interface zapisaneKonf{
    procesor:string;
    plyta_glowna:string;
    karta_graficzna:string;
    pamiec_ram:string;
    pamiec_ssd:string;
    pamiec_hdd:string;
    zasilacz:string;
    obudowa:string;
}
interface IoKonfigProps{
    procesor:string[];
    plyta:string[];
    karta:string[];
    ram:string[];
    hdd:string[];
    ssd:string[];
    zasilacz:string[];
    obudowa:string[];
    ustawwybrane:(x:string,index:number)=>void;
    polecane:string;
    zapisz:() => void;
    zapisane:zapisaneKonf[]
}

interface Ikonfig{
    tab:string[]
}
 const Konfigur=(props:Ikonfig)=>{
    const [konfig,setkonfig]=React.useState<string[]>([])
    const [polecane,setpolecane]=React.useState('')
    const [zapisane,setzapisane]=React.useState<zapisaneKonf[]>([])
    const addtozapisane=async(x:zapisaneKonf[])=>{

       
        setzapisane([...zapisane,...x])
        }
    
    const [wybrane,setwybrane]=React.useState<string[]>(['','','','','','','',''])
    const addtowybrane=async(x:string,index:number)=>{
        const tab=[...wybrane]
        tab[index]=x
        setwybrane(tab)
    }
    const [procesor,setprocesor]=React.useState<string[]>([])
    const addtoProcesor=async(x:string)=>{
       setprocesor(prevprocesor=>[...prevprocesor,x])
    }
    const [plyta,setplyta]=React.useState<string[]>([])
    const addtoPlyta=async(x:string)=>{
        setplyta(prevPlyta=>[...prevPlyta,x])
    }
    const [karta,setkarta]=React.useState<string[]>([])
    const addtokarta=async(x:string)=>{
        setkarta(prevKarta=>[...prevKarta,x])
    }
    const [ram,setram]=React.useState<string[]>([])
    const addtoRam=async(x:string)=>{
       setram(prevRam=>[...prevRam,x])
    }
    const [ssd,setssd]=React.useState<string[]>([])
    const addtossd=async(x:string)=>{
        setssd(prevsdd=>[...prevsdd,x])
    }
    const [hdd,sethdd]=React.useState<string[]>([])
    const addtohdd=async(x:string)=>{
       sethdd(prevhdd=>[...prevhdd,x])
    }
    const [zasilacz,setzasilacz]=React.useState<string[]>([])
    const addtozasilacz=async(x:string)=>{
        setzasilacz(prevzasilacz=>[...prevzasilacz,x])
    }
    const [obudowa,setobudowa]=React.useState<string[]>([])
    const addtoObudowa=async(x:string)=>{
     setobudowa(prevobudowa=>[...prevobudowa,x])
    }
   
    

    const dodaj=async (data:Iorodzaj[])=>{
            setprocesor([])
            setplyta([])
            setkarta([])
            setram([])
            sethdd([])
            setssd([])
            setzasilacz([])
            setobudowa([])
             data.forEach(async(e)=>{                
                switch(e.rodzaj){
                    case 'Procesor':{
                        addtoProcesor(e.nazwa)
                    } break
        
                    case 'Karta graficzna':{
                        addtokarta(e.nazwa)
                     } break
        
                     case 'Obudowa':{
                        addtoObudowa(e.nazwa)
                     } break
        
                     case 'Pamięć HDD':{
                         addtohdd(e.nazwa)
                     } break
        
                     case 'Pamięć SSD':{
                         addtossd(e.nazwa)
                     } break
        
                     case 'Płyta główna':{
                         addtoPlyta(e.nazwa)
                     } break
        
                     case 'Zasilacz':{
                         addtozasilacz(e.nazwa)
                     } break
        
                     case 'Pamięć RAM':{
                         addtoRam(e.nazwa)
                     } break
                }
            })
            

            
        };
    

    

    React.useEffect(()=>{
        axios.get('http://localhost:5000/getPodzespoly')
        .then((res)=>{
            dodaj(res.data)
        })
        axios.get('http://localhost:5000/getKonfiguracje',{withCredentials:true})
        .then((res)=>{
            console.log(res.data)
            addtozapisane(res.data)
        })
    },[])

    React.useEffect(()=>{
        setpolecane('...')
        axios.post('http://localhost:5000/Proponowane',{
            WYBRANE:[...wybrane],
            PROCESOR:[...procesor],
            PLYTA:[...plyta],
            KARTA:[...karta],
            RAM:[...ram],
            HDD:[...hdd],
            SSD:[...ssd],
            ZASILACZ:[...zasilacz],
            OBUDOWA:[...obudowa]
        })
        .then((res)=>{
            setpolecane(res.data)
        })     
    },[JSON.stringify(wybrane)])

    React.useEffect(()=>{
        console.log(zapisane) 
    },[JSON.stringify(zapisane)])



    const zapiszkonfiguracje=()=>{
        axios.post('http://localhost:5000/insertPodzespoly',{
            dane:[...wybrane]
        }, {withCredentials:true})
        .then((res)=>{
            console.log(res.data)
        })  
    }

    const temp:IoKonfigProps={
        procesor:procesor,
        plyta:plyta,
        karta:karta,
        ram:ram,
        hdd:hdd,
        ssd:ssd,
        zasilacz:zasilacz,
        obudowa:obudowa,
        ustawwybrane:addtowybrane,
        polecane:polecane,
        zapisz:zapiszkonfiguracje,
        zapisane:zapisane

    }

    return <KonfigLayout {...temp}/>
}
const KonfigLayout=(props:IoKonfigProps)=>{
    return(
        <>
        <Menus/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="konf">
                <div className="konf_wlasc">
                    <div className="komponent" id="procesor">
                        <h3>Procesor</h3>
                        <Konfigurator opis="" dane={props.procesor} wybrane={props.ustawwybrane} index={0}/>
                    </div>
                    <div className="komponent" id="plyta-glowna">
                        <h3>Płyta Główna</h3>
                        <Konfigurator opis="" dane={props.plyta} wybrane={props.ustawwybrane} index={1}/>
                    </div>
                    <div className="komponent" id="karta-graficzna">
                        <h3>Karta graficzna</h3>
                        <Konfigurator opis="" dane={props.karta} wybrane={props.ustawwybrane} index={2}/>
                    </div>
                    <div className="komponent" id="ram">
                        <h3>Pamięć RAM</h3>
                        <Konfigurator opis="" dane={props.ram} wybrane={props.ustawwybrane} index={3}/>
                    </div>
                    <div className="komponent" id="hdd">
                        <h3>Pamięć HDD</h3>   
                        <Konfigurator opis="" dane={props.hdd} wybrane={props.ustawwybrane} index={4}/>
                    </div>
                    <div className="komponent" id="ssd">
                        <h3>Pamięć SSD</h3>
                        <Konfigurator opis="" dane={props.ssd} wybrane={props.ustawwybrane} index={5}/>
                    </div>
                    <div className="komponent" id="zasilacz">
                        <h3>Zasilacz</h3>
                        <Konfigurator opis="" dane={props.zasilacz} wybrane={props.ustawwybrane} index={6}/>
                    </div>
                    <div className="komponent" id="obudowa">
                        <h3>Obudowa</h3>
                        <Konfigurator opis="" dane={props.obudowa} wybrane={props.ustawwybrane} index={7}/>
                    </div>
                </div>
                <button className="zapisz" onClick={props.zapisz}>zapisz</button>
                <div className="polecane">
                    <h3>Polecane komponenty do komputerów:</h3>                   
                    <div>
                        <KompPol polecane={props.polecane}/>
                    </div>
                </div>
                <div className="twoje">
                    <h3>Twoje Zapisane konfiguracje</h3>
                    <div>
                        {
                            props.zapisane.map((e,i)=>(
                                <KompZap konfig={e} key={i}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Konfigur;




