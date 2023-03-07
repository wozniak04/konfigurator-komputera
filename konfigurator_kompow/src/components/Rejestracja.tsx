import '../style/Logowanie.scss'
import axios from 'axios'
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';



const Rejestracja = () => {
    const navigate = useNavigate()
    const cookies = new Cookies();
    const [login, setlogin] = useState('')
    const [email, setemail] = useState('')
    const [password1, setpassword1] = useState('')
    const [password2, setpassword2] = useState('')
    const [bladEmail, setbladEmail] = useState(true)
    const [bladhaslopowtorz, setbladhaslopowtorz] = useState(true)
    const [bladhasla, setbladhasla] = useState(true)
    const [bladlogin, setbladlogin] = useState(true)
    let pusc: boolean = false



    const rejestruj = () => {


        if (bladhasla === true && bladEmail === true && bladhaslopowtorz === true && bladlogin === true && pusc === true) {

            axios.post('http://localhost:5000/insertUsers', {
                login: login,
                password: password1,
                email: email

            })
                .then((res) => {
                    if (res.data.log) {
                        cookies.set('idSession', res.data.idSession)
                        navigate('/')
                    }
                    else {
                        alert('blad backendu')
                    }
                }).catch((err) => {
                    console.log(err)
                })

        }


    }

    const handleLogin = (val: string) => {
        setlogin(val)
    }
    const handleEmail = (val: string) => {
        setemail(val)
    }
    const handlePassword1 = (val: string) => {
        setpassword1(val)
    }
    const handlePassword2 = (val: string) => {
        setpassword2(val)
    }
    const walidacja = (x: number) => {
        switch (x) {
            case 1: {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { setbladEmail(true); pusc = true }
                else setbladEmail(false)
            } break
            case 2: {
                if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password1)) { setbladhasla(true); pusc = true }
                else setbladhasla(false)
            } break
            case 3: {
                if (password1 === password2) { setbladhaslopowtorz(true); pusc = true }
                else setbladhaslopowtorz(false)

            } break
            case 4: {
                axios.post('http://localhost:5000/getLogin', {
                    login: login
                })
                    .then((res) => { 
                        if(res.data) {setbladlogin(true); pusc=true}
                        else setbladlogin(false)
                    })
            }
        }

    }
    const temp: IRejestracjaProps = {
        rejestruj,
        login,
        handleLogin,
        email,
        handleEmail,
        password1,
        handlePassword1,
        password2,
        handlePassword2,
        bladE: bladEmail,
        bladHP: bladhaslopowtorz,
        bladH: bladhasla,
        wal: walidacja,
        bladL:bladlogin
    }

    return <RejestracjaLayout {...temp} />
}
export default Rejestracja;

interface IRejestracjaProps {
    rejestruj: () => void,
    login: string,
    handleLogin: (val: string) => void,
    email: string,
    handleEmail: (val: string) => void,
    password1: string,
    handlePassword1: (val: string) => void,
    password2: string,
    handlePassword2: (val: string) => void
    bladE: boolean,
    bladHP: boolean,
    bladH: boolean,
    wal: (x: number) => void,
    bladL:boolean


}

const RejestracjaLayout = (props: IRejestracjaProps) => (
    <div className="wrapper">
        <div className="login">
            <p className="title">Rejestracja</p>
            <input type="email" placeholder="Email" value={props.email} onBlur={() => props.wal(1)} onChange={(event) => props.handleEmail(event.target.value)} />
            <p hidden={props.bladE}>błąd emaila</p>
            <input type="text" placeholder="Nazwa użytkownika" value={props.login} onBlur={() => props.wal(4)} onChange={(e) => { props.handleLogin(e.target.value) }} />
            <p hidden={props.bladL}>użytkownik o takiej nazwie istnieje</p>
            <i className="fa fa-user"></i>
            <input type="password" placeholder="Hasło" value={props.password1} onBlur={() => props.wal(2)} onChange={(event) => props.handlePassword1(event?.target.value)} />
            <p hidden={props.bladH}>hasło powinno zawierać 8 liter 1 duza 1 mala i liczbe</p>
            <input type="password" placeholder="Powtórz hasło" value={props.password2} onBlur={() => props.wal(3)} onChange={(event) => props.handlePassword2(event.target.value)} />
            <p hidden={props.bladHP}>hasła są różne</p>
            <i className="fa fa-key"></i>
            <button onClick={props.rejestruj}>
                <i className="spinner"></i>
                <span className="state">Zarejestruj</span>
            </button>
        </div>
    </div>
)