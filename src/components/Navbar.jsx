import React, { useContext, useState } from "react"
import {useParams} from 'react-router-dom'
import { mdiMicrosoftXboxControllerMenu, mdiClose } from "@mdi/js"
import Icon from "./Iconos"
import { EventContext } from "../containers/EventContext" 
import { Link } from "react-router-dom"

export const Navbar = () => {
  const [burguerActive, setBurguerActive] = useState(false);
  const {scroll} = useContext(EventContext);
  

  
  const clickBurguer = () => {
    setBurguerActive(!burguerActive)
  }
  return (
    <div>
      <div className={ scroll >1 ?'container_nav fix': 'container_nav' }>
        <nav>
          <div className="container_burguer">
            <Icon
              onClick={clickBurguer}
              className={ burguerActive ? 'no_display':  'burguer'}
              color={"#fff"}
              size={"40px"}
              icon={mdiMicrosoftXboxControllerMenu}
            />
          </div>
          <ul className={burguerActive ? "aparicion_nav" : ""}>
          <Icon
              onClick={clickBurguer}
              className="close_nav"
              color={"#fff"}
              size={"40px"}
              icon={mdiClose}
            />
            {
                !window.location.pathname.includes('agenda')?''
                : <Link to="/salon-eventos/">Inicio</Link>
            
            }

            {
              window.location.pathname.includes('agenda')?''
              : <Link className="agenda" to="/salon-eventos/agenda">
                  Agenda
                </Link>
            }
           

            <a
              href="mailto:jkastiblanco@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Envianos un Correo
            </a>
            
            <a href="#redes_sociales" rel="noopener noreferrer">
              Siguenos en Redes
            </a>
          </ul>
        </nav>
      </div>
    </div>
  )
}
