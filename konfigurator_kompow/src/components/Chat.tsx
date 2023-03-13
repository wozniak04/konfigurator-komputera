import React,{useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import '../style/Chat.scss'

const Chat = () => {

    const navigate = useNavigate();

    useEffect(() => {
      axios
        .get("http://localhost:5000/sessionCheck", { withCredentials: true })
        .then((res) => {
          if (!res.data) navigate("/Logowanie");
        })
        .catch((err) => {
          console.log(err);
          navigate("/Logowanie");
        });
    });

    const [open, setIsOpen] = React.useState(true)
    const [pytanie,setpytanie]=React.useState('')
    const [odp,setodp]=React.useState('')
    const closeForm = () => {
        if(open===true)
            setIsOpen(false)
            else
            setIsOpen(true)
    };

    const pyt=(val:string)=>{
        setpytanie(val)
    }

    const wysliZapytanie=()=>{
        axios.post('http://localhost:5000/ZapytanieAi',{
            zapytanie:pytanie
        })
        .then((res)=>{
            setodp(res.data)
        })
    }

    return (
        <>
            <button className="open-button" onClick={() => closeForm()}>Chat</button>
            <div className="chat-popup" id="myForm" hidden={open}>
                <div className="form-container">
                    <label htmlFor="msg"><b>Message</b></label>
                    <textarea placeholder="Type message.." value={pytanie} onChange={(e)=>pyt(e.target.value)} name="msg" required></textarea>
                    <div className="answer">{odp}</div>
                    <button type="submit" className="btn" onClick={wysliZapytanie}>Send</button>
                    <button type="button" className="btn cancel" onClick={() => closeForm()}>Close</button>
                </div>
            </div>
        </>
    )
}

export default Chat;
