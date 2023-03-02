import '../style/Logowanie.scss'
import Rejestracja from './Rejestracja'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import axios from "axios";





const rejestracja = () => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
            <Rejestracja />
        </React.StrictMode>
    )
}

const Logowanie = () => {

    const [login, setlogin] = useState('')
    const [haslo, sethaslo] = useState('')
    const loginu = document.querySelector('.login1') as HTMLInputElement | null
    const haslou = document.querySelector('.haslo') as HTMLInputElement | null

    const log = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        axios.post('http://localhost:5000/getUsers',{
            
        })
        .then((res) => {
            setlogin(res.data[0].login)
            sethaslo(res.data[0].password)
            console.log(res)
        })
            // .finally(() => {
            //     console.log(`baza ${login} ${haslo} strona ${loginu?.value} ${haslou?.value}`)
            // })
    }


    return (
        <>
            <div className="wrapper">
                <div className="login">
                    <p className="title">Logowanie</p>
                    <input type="text" placeholder="Nazwa użytkownika" className='login1' />
                    <i className="fa fa-user"></i>
                    <input type="password" placeholder="Hasło" className='haslo' />
                    <i className="fa fa-key"></i>
                    <a href="#" className='forgot'>Zapomniałeś hasła?</a>
                    <a href="#" className='create' onClick={rejestracja}>Stwórz konto</a>
                    <button onClick={(e) => log(e)}>
                        <i className="spinner"></i>
                        <span className="state">Zaloguj</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Logowanie;