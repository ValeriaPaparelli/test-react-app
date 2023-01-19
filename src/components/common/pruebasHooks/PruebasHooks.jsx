//useState
import { useEffect } from 'react';
import { useState } from 'react';
//Es un hook que nos permite el manejo del estado local de uncomponente
//const [variable, modificadorVariable] = useState();

//useEffect
//Dispara un efecto cuando algo sucede

const PruebasHooks = ({contador, setContador}) => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    let arrayImg = [
        "https://www.mitologia.info/wp-content/uploads/2018/02/Dragones-1-1200x788.jpg.webp",
        "https://supercurioso.com/wp-content/uploads/2018/12/curiosidades-de-los-dragones.jpg"
    ]

    const [img, setImg] = useState("")

    useEffect(()=>{
        //Dentro de estas llaves va todo lo que yo quiero que haga mi efecto cuando el componente se monte
        
        setImg(arrayImg[contador])

    }, [arrayImg, contador])
    //Recibe dos parámetros, un callback y un arreglo de dependencia.
    //Si el arreglo está vacío se renderiza una vez
    //Si quiero que lo que está dentro del useEffect esté a la escuha de algo
    //y cambie al escuchar un cambio en algo, en el arreglo le digo de que variable
    //quiero que esté a la escucha

   return (
    <div>
        <h4>{contador}</h4>
        <button onClick={()=> setContador(contador + 1)}>Aumentar</button>
        <button onClick={()=> setContador(contador - 1)}>Disminuir</button>
      {/*setContador es una función que modifica mi estado, variable. Lo modifica con lo que yo le pase
       como argumento dentro de los parentesis */} 
       <img src={img} alt="" />
    </div>
  )
}

export default PruebasHooks