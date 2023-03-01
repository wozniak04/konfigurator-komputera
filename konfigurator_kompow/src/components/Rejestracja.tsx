import '../style/Logowanie.scss'

const log=()=>{
    alert("asdasdadsa")
}

const Rejestracja = ()=>{
    return(
        <>
        
    <div className="wrapper">
    <form className="login">
        <p className="title">Log in</p>
        <input type="text" placeholder="Username"/>
        <i className="fa fa-user"></i>
        <input type="password" placeholder="Password" />
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
export default Rejestracja;