import '../style/Logowanie.scss'
import Rejestracja from './Rejestracja'
import React from 'react'
import ReactDOM from 'react-dom/client'

const log = () => {
    alert("asdasdadsa")
}

const rejestracja = () => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
            <Rejestracja />
        </React.StrictMode>
    )
}

const Logowanie = () => {
    return (
        <>
            <div className="wrapper">
                <form className="login">
                    <p className="title">Logowanie</p>
                    <input type="text" placeholder="Nazwa użytkownika" />
                    <i className="fa fa-user"></i>
                    <input type="password" placeholder="Hasło" />
                    <i className="fa fa-key"></i>
                    <a href="#" className='forgot'>Zapomniałeś hasła?</a>
                    <a href="#" className='create' onClick={rejestracja}>Stwórz konto</a>
                    <button onClick={log}>
                        <i className="spinner"></i>
                        <span className="state">Zaloguj</span>
                    </button>
                </form>
            </div>
        </>
    )
}
export default Logowanie;