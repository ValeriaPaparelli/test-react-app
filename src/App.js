import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Form from "./components/pages/form/Form";
import Login from "./components/pages/login/Login";

//BrowserRouter => Se encarga de armar la estructura de enrutamiento - Envuelve todas mis rutas
//Routes => Encargado de envolver todas mis rutas individuales
//Route => Me dá la posibilidad de crear rutas
//Route recibe dos atributos, path="" element={}, en que path quiero mostrar ese elemento

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
