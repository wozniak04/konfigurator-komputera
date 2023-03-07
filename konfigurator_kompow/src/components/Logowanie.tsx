import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Logowanie.scss';
import Cookies from "universal-cookie";

const Logowanie = () => {

    const [login, setlogin] = useState('')
    const [password, setpassword] = useState('')
    const [blad,setblad]=useState(true)
    const navigate = useNavigate();
    const cookies=new Cookies();
    cookies.remove('idSession');

    const log = () => {
        
        axios.post('http://localhost:5000/getUsers', {
            login: login,
            password: password
        }).then((res) => {           
            if(res.data.log){
                cookies.set('idSession',res.data.idSession)
                navigate('/')
            }else{
                setblad(false) 
            }
        }).catch((err) => {
            console.log(err)
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
        handlepasswordchange: handlepasswordchange,
        blad
    }

    return <LogowanieLayout {...temp} />
}
interface ILogowanieLayoutProps {
    loginto: () => void,
    login: string,
    password: string,
    handleloginchange: (value: string) => void,
    handlepasswordchange: (value: string) => void,
    blad:boolean
}

const LogowanieLayout = (props: ILogowanieLayoutProps) => (
    <div className="wrapper">
        <div className="login">
            <p className="title">Logowanie</p>
            <input type="text" placeholder="Nazwa użytkownika" value={props.login} onChange={event => props.handleloginchange(event.target.value)} />
            <i className="fa fa-user"></i>
            <input type="password" placeholder="Hasło" value={props.password} onChange={event => props.handlepasswordchange(event.target.value)} />
            <i className="fa fa-key"></i>
            <a href="/Rejestracja" className='create'>Stwórz konto</a>
            <button onClick={() => props.loginto()}>
                <i className="spinner"></i>
                <span className="state">Zaloguj</span>
            </button>
        </div>
        <p hidden={props.blad}>złe dane</p>
    </div>
)

export default Logowanie;
