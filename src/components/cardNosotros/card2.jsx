import { Facebook, Instagram } from '@mui/icons-material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {Link} from "react-router-dom"
import "./card.css"

function Card(props) {
  return (
    <div className='contendCard'>
        <div className='contenedorDatos'> 
          <h1>{props.nombre}</h1>
          <h3>{props.puesto}</h3>
          <p>{props.descripcion}</p>
          <span>
            <Link to={props.whatsap}><WhatsAppIcon className='WhatsAppIcon'/></Link>
            <AlternateEmailIcon/>
            <Facebook className='Facebook'/>
            <Instagram className='Instagram'/>
          </span>
        </div>  
        <div>
          <img src={props.imagen} alt="Integrante Farker" className='fotoIntegrantes'/>
        </div>
    </div>
  )
}

export default Card