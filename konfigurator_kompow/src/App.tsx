import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Konfig from "./components/Konfig";
import Logowanie from "./components/Logowanie";
import Menus from "./components/Menus";
import Mid from "./components/Mid";

function App() {

  return (
    <>
      <Routes>
        <Route path="/Logowanie" element={<Logowanie />} />
        <Route path="/" element={<>
          <Menus />
          <Mid />
          <Footer />
        </>}>
        </Route>
        <Route path="/Konfig" element={<Konfig src={""} opis={""} />}/>
      </Routes>
    </>
  );
}

export default App
