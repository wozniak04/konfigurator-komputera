import '../style/Logowanie.scss'

const log = () => {
    alert("asdasdadsa")
}

const Rejestracja = () => {
    return (
        <>
            <div className="wrapper">
                <form className="login">
                    <p className="title">Rejestracja</p>
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Nazwa użytkownika" />
                    <i className="fa fa-user"></i>
                    <input type="password" placeholder="Hasło" />
                    <input type="password" placeholder="Powtórz hasło" />
                    <i className="fa fa-key"></i>
                    <button onClick={log}>
                        <i className="spinner"></i>
                        <span className="state">Zarejestruj</span>
                    </button>
                </form>
            </div>
        </>
    )
}
export default Rejestracja;