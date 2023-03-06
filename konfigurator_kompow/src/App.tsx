import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Konfig from "./components/Konfig";
import Logowanie from "./components/Logowanie";
import Menus from "./components/Menus";
import Mid from "./components/Mid";
import Rejestracja from "./components/Rejestracja";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<>
          <Menus />
          <Mid />
          <Footer />
        </>}>
        </Route>
        <Route path="/Konfig" element={<Konfig src={""} opis={""} />} />
        <Route path="/Logowanie" element={<Logowanie />} />
        <Route path="/Rejestracja" element={<Rejestracja/>}/>
      </Routes>
    </>
  );
}

export default App
