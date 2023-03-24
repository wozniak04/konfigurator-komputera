import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Logowanie.scss";
import Cookies from "universal-cookie";
import { GoogleLogin } from '@react-oauth/google';
import { gapi } from "gapi-script";


const Logowanie = () => {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: '828982989711-kc4obhed5l9senof04a6m5cp87vbvme3.apps.googleusercontent.com',
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [blad, setblad] = useState(true);
  const navigate = useNavigate();
  const cookies = new Cookies();
  cookies.remove("idSession");
  cookies.remove("user");
  
  

  const handleLoginSuccess = (response:any) => {

    axios
      .post("http://localhost:5000/insertGoogleSession", {
        data: response.credential
      })
      .then((res) => {
        if (res.data.log) {
          cookies.set("idSession", res.data.idSession);
          cookies.set("user", res.data.email);
          navigate("/");
        } else {
          setblad(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    
  };

 

  const log = () => {
    axios
      .post("http://localhost:5000/getUsers", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.log) {
          cookies.set("idSession", res.data.idSession);
          cookies.set("user", email);
          navigate("/");
        } else {
          setblad(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleemailchange = (value: string) => {
    setemail(value);
  };
  const handlepasswordchange = (value: string) => {
    setpassword(value);
  };

  const temp: ILogowanieLayoutProps = {
    loginto: log,
    email,
    password,
    handleemailchange: handleemailchange,
    handlepasswordchange: handlepasswordchange,
    blad,
    googlesucces:handleLoginSuccess,
  };

  return <LogowanieLayout {...temp} />;
};
interface ILogowanieLayoutProps {
  loginto: () => void;
  email: string;
  password: string;
  handleemailchange: (value: string) => void;
  handlepasswordchange: (value: string) => void;
  blad: boolean;
  googlesucces:(response:any)=>void;
}

const LogowanieLayout = (props: ILogowanieLayoutProps) => (
  <div className="wrapper">
    <div className="login">
      <p className="title">Logowanie</p>
      <input
        type="text"
        maxLength={50}
        placeholder="email"
        value={props.email}
        onChange={(event) => props.handleemailchange(event.target.value)}
      />
      <i className="fa fa-user"></i>
      <input
        type="password"
        placeholder="Hasło"
        value={props.password}
        onChange={(event) => props.handlepasswordchange(event.target.value)}
      />
      <i className="fa fa-key"></i>
      <a href="/Rejestracja" className="create">
        Stwórz konto
      </a>
      <button onClick={() => props.loginto()}>
        <i className="spinner"></i>
        <span className="state">Zaloguj</span>
      </button>
      <GoogleLogin
      onSuccess={props.googlesucces}
      
    />
    </div>
    <p hidden={props.blad} className="error">
      Niepoprawne dane
    </p>
  </div>
);

export default Logowanie;
