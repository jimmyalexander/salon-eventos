import React, { useState } from "react"
import { mdiMicrosoftXboxControllerMenu, mdiClose } from "@mdi/js"
import Icon from "./Iconos"
import { Link } from "react-router-dom"

export const Navbar = () => {
  const [burguerActive, setBurguerActive] = useState(false)

  const clickBurguer = () => {
    setBurguerActive(!burguerActive)
  }
  return (
    <div>
      <div className="container_nav">
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
            <Link to="/salon-eventos/">Inicio</Link>

            <Link className="agenda" to="/salon-eventos/agenda">
              Agenda
            </Link>

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
