import React, { useState } from 'react'
import ItemConter from './ItemConter'

const ItemListContainer = ({greeting, titulo, otrotitulo}) => {
    const [mostrar, setMostrar] = useState(false)
    // const {greeting} = props

    const verMas = () =>{
        setMostrar(!mostrar)
        console.log(mostrar)
    }
  return (
    <div>
        <h1>{greeting}</h1>
        <h2>{titulo}</h2>
{mostrar ? <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, laboriosam molestiae mollitia totam dolor eligendi delectus sed expedita nam officia a vero earum id quasi amet cum exercitationem deleniti dicta!</span> : '' }
        <button onClick={verMas}>{mostrar ? 'Ver Menos' : 'Ver Mas'}</button>
        <ItemConter otrotitulo={otrotitulo} valorInicial={1} stock={5}/>
    </div>
  )
}

export default ItemListContainer