import React from 'react'
import Navbar1 from './nueva barra/navbar'
import Fooder from './footer/fooder'
import Card from './cardNosotros/card'
import Card2 from './cardNosotros/card2'
import images from '../assets/images'
import "./cardNosotros/card.css"

function SobreNosotros() {
  return (
    <div>
        <Navbar1/>
        <h1 className='texto1'>Conoce al equipo de New Innovations.</h1>
        <Card
          imagen={images[1].cam_logo_oscuro}
          nombre="
          New Innovations"
          puesto="El nombre del éxito."
          descripcion=" Misión:
          En New Innovations se construye un ecosistema comercial digital inclusivo, accesible para las MIPYME, emprendedores y cooperativas nicaragüenses. A través de la plataforma, se proporciona un espacio que facilita la promoción, comercialización y conexión entre productores locales y consumidores ávidos de autenticidad, promoviendo el talento, la creatividad y desarrollo económico sustentable, arraigado la cultura nacional.
            "
        />
        <Card2
            imagen={images[1].cam_logo_oscuro}
            nombre="
            New Innovations"
            puesto="El nombre del éxito."
            descripcion=" Visión: 
            En New Innovations, se visualiza un mundo donde cada MIPYME, emprendedor y cooperativa en Nicaragua tenga la oportunidad de alcanzar su máximo potencial a través del acceso equitativo a mercados locales e internacionales, se busca impulsar una economía inclusiva, fortaleciendo las raíces de la comunidad empresarial, brindando una plataforma de comercio que fomente la innovación, la diversidad y el desarrollo sostenible.
            "
        />
        <Card
            imagen={images[1].cam_logo_oscuro}
            nombre=" New Innovations"
            puesto="El nombre del éxito."
            descripcion=" Valores Corporativos:
            En New Innovations, creemos firmemente que los valores son la base sobre la cual se construye el camino hacia el éxito. Que refleje integridad, innovación y colaboración. A través de este compromiso, buscamos no solo lograr nuestros objetivos comerciales, sino también marcar una diferencia significativa en la vida de nuestros clientes, y consumidores.
            "
        />
        <Fooder/>
    </div>
  )
}

export default SobreNosotros