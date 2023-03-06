import '../style/Logowanie.scss'
import axios from 'axios'
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';



const Rejestracja = () => {
    const navigate=useNavigate()
    const cookies=new Cookies();
    const [login,setlogin] = useState('')
    const [email,setemail] = useState('')
    const [password1,setpassword1] = useState('')
    const [password2,setpassword2] = useState('')
    
    
    const rejestruj = () => {

        if(password1===password2){

            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                
                axios.post('http://localhost:5000/getLogin',{
                    login: login
                })
                .then((res1)=>{              
                    if(res1.data){
                        axios.post('http://localhost:5000/insertUsers',{
                            login: login,
                            password: password1,
                            email:email

                        })
                        .then((res)=>{
                            if(res.data.log){
                                cookies.set('idSession',res.data.idSession)
                                navigate('/')
                            }
                            else{
                                alert('blad backendu')
                            }
                        })
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
            }else alert('zły email')
        }else alert('złe hasło')
    }

    const handleLogin = (val:string) =>{
        setlogin(val)
    }
    const handleEmail = (val:string) =>{
        setemail(val)
    }
    const handlePassword1 = (val:string) =>{
        setpassword1(val)
    }
    const handlePassword2=(val:string)=>{
        setpassword2(val)
    }
    const temp:IRejestracjaProps={
        rejestruj,
        login,
        handleLogin,
        email,
        handleEmail,
        password1,
        handlePassword1,
        password2,
        handlePassword2
    }

    return <RejestracjaLayout {...temp}/>
}
export default Rejestracja;

interface IRejestracjaProps{
    rejestruj: ()=>void,
    login:string,
    handleLogin:(val:string)=>void,
    email:string,
    handleEmail:(val:string)=>void,
    password1:string,
    handlePassword1:(val:string)=>void,
    password2:string,
    handlePassword2:(val:string)=>void


}

const RejestracjaLayout = (props:IRejestracjaProps) => (
    <div className="wrapper">
        <div className="login">
            <p className="title">Rejestracja</p>
            <input type="email" placeholder="Email" value={props.email} onChange={(event) =>props.handleEmail(event.target.value)}/>
            <input type="text" placeholder="Nazwa użytkownika" value={props.login} onChange={(e)=>{props.handleLogin(e.target.value)}}/>
            <i className="fa fa-user"></i>
            <input type="password" placeholder="Hasło" value={props.password1} onChange={(event)=>props.handlePassword1(event?.target.value)}/>
            <input type="password" placeholder="Powtórz hasło" value={props.password2} onChange={(event)=>props.handlePassword2(event.target.value)}/>
            <i className="fa fa-key"></i>
            <button onClick={props.rejestruj}>
                <i className="spinner"></i>
                <span className="state">Zarejestruj</span>
            </button>
        </div>
    </div>
)