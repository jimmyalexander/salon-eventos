import React, { useState } from 'react';
import logoCasa from '../assets/static/imagen18.jpg';
import logoHome from '../assets/static/imagen19.jpg';
import logoCook from '../assets/static/imagen26.jpg';
import logoCap from '../assets/static/imagen29.jpeg';
import logoParty from '../assets/static/imagen1.jpg';
import logoPar from '../assets/static/imagen17.jpg';

import Icon from './Iconos';
import { mdiWhatsapp } from '@mdi/js';

export const Areas = () => {
  const [active1] = useState(false);
  const [active2] = useState(false);
  const [active3] = useState(false)

  return (
    <div>
      <div className="title_section">
        <h1>Areas que puedes Disfrutar</h1>
      </div>
      <section className='container_areas'>
        <div className={ active1 ? 'areas cambiar': 'areas'}>

          <div className={ active1 ? 'areas_info alargar': 'areas_info'}>
            <h2>!Como en casa¡</h2>
            <p>Contamos con un salones adaptado para albergar hasta
              500 personas, amoblados para que te sientas como si nunca
              huberas salido de casa, la unica diferencia es que hoy nosotros
              te atenderemos.
            </p>
          </div>

          <div className='areas_img' >
            <img className='img-house' src={logoCasa}  alt=''/>
            <img className='img-home' src={logoHome}  alt=''/>
          </div>
        </div>

        <div className={ active2 ? 'areas cambiar': 'areas'}>
          <div className={active2 ? 'areas_img cambiar_responsive': 'areas_img'}>
            <img className='img-cook' src={logoCook}  alt=''/>
            <img className='img-cap' src={logoCap}  alt=''/>
          </div>

          <div className={ active2 ? 'areas_info alargar': 'areas_info'}>
            <h2>!Lo mejor pasteleria¡</h2>
            <p>Contamos con una cantidad de profesionales que haran muy feliz tu paladar
              disgustando toda clase de postres,  ademas tu eliges el diseño de tu ponque
              nosotros lo fabricaremos tal cual como deseas.
            </p>
          </div>
          
        </div>

        <div className={ active3 ? 'areas cambiar': 'areas'}>

          <div className={ active3 ? 'areas_info alargar': 'areas_info'}>
            <h2>!Party¡</h2>
            <p>
              Si te gusta las fiestas y deseas una llegaste al lugar indicado.
              Nostros te hacemos vivir una gran experiencia no habra diferencia entre
              IBIZA y nosotros.
            </p>
          </div>

          <div className={active3 ? 'areas_img cambiar_responsive': 'areas_img'}>
            <img className='img-party' src={logoParty}  alt=''/>
            <img className='img-par' src={logoPar}  alt=''/>
          </div>
        </div>
        
        <div className="container_icon-whatsaap">
          <a target='blanck' href="https://api.whatsapp.com/send?phone=3232464884">
            <Icon size={'50px'} color={'#00bb2d'} icon={ mdiWhatsapp } className='whatsaap' />
          </a>
        </div>

       
      </section>
      
    </div>
    
  )
}
