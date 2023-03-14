import '../style/Logowanie.scss'
import axios from 'axios'
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';



const Rejestracja = () => {
    const navigate = useNavigate()
    const cookies = new Cookies();
    const [email, setemail] = useState('')
    const [password1, setpassword1] = useState('')
    const [password2, setpassword2] = useState('')
    const [bladEmail, setbladEmail] = useState(true)
    const [bladhaslopowtorz, setbladhaslopowtorz] = useState(true)
    const [bladhasla, setbladhasla] = useState(true)
    let pusc: boolean = false



    const rejestruj = () => {


        if (bladhasla === true && bladEmail === true && bladhaslopowtorz === true && pusc === true) {

            axios.post('http://localhost:5000/insertUsers', {
                password: password1,
                email: email

            })
                .then((res) => {
                    if (res.data.log) {
                        cookies.set('idSession', res.data.idSession)
                        cookies.set("user",email)
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
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { 

                    axios.post('http://localhost:5000/getEmail', {
                    login: email
                })
                    .then((res) => { 
                        if(res.data) {setbladEmail(true); pusc=true}
                        else setbladEmail(false)
                    })
                    setbladEmail(true); pusc = true 
                }
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
           
        }

    }
    const temp: IRejestracjaProps = {
        rejestruj,
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
    }

    return <RejestracjaLayout {...temp} />
}
export default Rejestracja;

interface IRejestracjaProps {
    rejestruj: () => void,
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


}

const RejestracjaLayout = (props: IRejestracjaProps) => (
    <div className="wrapper">
        <div className="login">
            <p className="title">Rejestracja</p>
            <input type="email" placeholder="Email" maxLength={50} value={props.email} onBlur={() => props.wal(1)} onChange={(event) => props.handleEmail(event.target.value)} />
            <p hidden={props.bladE} className="error">Niepoprawny email</p>
            <input type="password" placeholder="Hasło" value={props.password1} onBlur={() => props.wal(2)} onChange={(event) => props.handlePassword1(event?.target.value)} />
            <p hidden={props.bladH} className="error">Hasło powinno zawierać 8 liter, co najmniej 1 dużą, 1 małą i 1 liczbę</p>
            <input type="password" placeholder="Powtórz hasło" value={props.password2} onBlur={() => props.wal(3)} onChange={(event) => props.handlePassword2(event.target.value)} />
            <p hidden={props.bladHP} className="error">Hasła różnią się od siebie</p>
            <i className="fa fa-key"></i>
            <button onClick={props.rejestruj}>
                <i className="spinner"></i>
                <span className="state">Zarejestruj</span>
            </button>
        </div>
    </div>
)