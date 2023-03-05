import axios from "axios";
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";
import '../style/Logowanie.scss';
import Rejestracja from './Rejestracja';
import App from "../App";

const rejestracja = () => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
            <Rejestracja />
        </React.StrictMode>
    )
}

const Logowanie = () => {

    const [login, setlogin] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate();

    const log = () => {
        
        axios.post('http://localhost:5000/getUsers', {
            login: login,
            password: password
        }).then((res) => {           
            if(res.data){
                navigate('/')
            }
        })


    }
    const handleloginchange = (value: string) => {
        setlogin(value)
    }
    const handlepasswordchange = (value: string) => {
        setpassword(value)
    }


    const temp: ILogowanieLayoutProps = {
        loginto: log,
        login,
        password,
        handleloginchange: handleloginchange,
        handlepasswordchange: handlepasswordchange
    }

    return <LogowanieLayout {...temp} />
}
interface ILogowanieLayoutProps {
    loginto: () => void,
    login: string,
    password: string,
    handleloginchange: (value: string) => void,
    handlepasswordchange: (value: string) => void
}

const LogowanieLayout = (props: ILogowanieLayoutProps) => (
    <div className="wrapper">
        <div className="login">
            <p className="title">Logowanie</p>
            <input type="text" placeholder="Nazwa użytkownika" value={props.login} onChange={event => props.handleloginchange(event.target.value)} />
            <i className="fa fa-user"></i>
            <input type="password" placeholder="Hasło" value={props.password} onChange={event => props.handlepasswordchange(event.target.value)} />
            <i className="fa fa-key"></i>
            <a href="#" className='forgot'>Zapomniałeś hasła?</a>
            <a href="#" className='create' onClick={rejestracja}>Stwórz konto</a>
            <button onClick={() => props.loginto()}>
                <i className="spinner"></i>
                <span className="state">Zaloguj</span>
            </button>
        </div>
    </div>
)

export default Logowanie;
