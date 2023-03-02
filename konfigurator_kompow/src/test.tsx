import React,{useEffect,useState} from "react";
import axios from "axios";

function Test(){
    const [odp,setodp]=useState('')

    useEffect(()=>{
        axios.get('http://localhost:5000/getUsers').then((res)=>{
            setodp(res.data[0].login)
        })
    })
    return(
        <>
        <h1>{odp}</h1>
        </>
    )
}
export default Test;