import '../style/Logowanie.scss'

const log=()=>{
    alert("asdasdadsa")
}

const Logowanie = ()=>{
    return(
        <>
        
    <div className="wrapper">
    <form className="login">
        <p className="title">Logowanie</p>
        <input type="text" placeholder="Nazwa użytkownika"/>
        <i className="fa fa-user"></i>
        <input type="password" placeholder="Hasło" />
        <i className="fa fa-key"></i>
        <a href="#">Zapomniałeś hasła?</a>
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