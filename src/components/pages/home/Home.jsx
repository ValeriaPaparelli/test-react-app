import PruebasHooks from '../../common/pruebasHooks/PruebasHooks';
import Navbar from './../../common/navBar/Navbar';
import { useState } from "react";

const Home = () => {

    const [contador, setContador] = useState(0)
    //La variable contador toma el valor de 0 (useState(0))
    //Puedo llamar a la función setContador para cambiar el estado de ese contador

  return (
    <>
      <Navbar title="Home"/>
      <PruebasHooks contador={contador} setContador={setContador}/>
    </>
  )
}

export default Home