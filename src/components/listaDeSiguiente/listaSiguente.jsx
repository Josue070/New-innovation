import React from 'react'
import "./lista.css"

//componente de lista de reproduccion
function Lista(props) {
  return (
    <div className='sigVideo'>
        <img src={props.imagen} alt="" className='logoMin'/>
        <h3>{props.nombre}</h3>
    </div>
  )
}

export default Lista