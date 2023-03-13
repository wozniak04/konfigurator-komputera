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
    const closeForm = () => {
        if(open===true)
            setIsOpen(false)
            else
            setIsOpen(true)
    };

    return (
        <>
            <button className="open-button" onClick={() => closeForm()}>Chat</button>
            <div className="chat-popup" id="myForm" hidden={open}>
                <div className="form-container">
                    <label htmlFor="msg"><b>Message</b></label>
                    <textarea placeholder="Type message.." name="msg" required></textarea>
                    <div className="answer"></div>
                    <button type="submit" className="btn">Send</button>
                    <button type="button" className="btn cancel" onClick={() => closeForm()}>Close</button>
                </div>
            </div>
        </>
    )
}

export default Chat;
