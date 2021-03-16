import React, { useState } from "react"
import { mdiMicrosoftXboxControllerMenu } from "@mdi/js"
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
              className="burguer"
              color={"#fff"}
              size={"40px"}
              icon={mdiMicrosoftXboxControllerMenu}
            />
          </div>
          <ul className={burguerActive ? "aparicion_nav" : ""}>
            <Link to="/">Inicio</Link>
            <Link className="agenda" to="/agenda">
              Agenda
            </Link>
            <a
              href="mailto:example@email.com "
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
