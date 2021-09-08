import React from 'react'
import { Areas } from './Areas'
import { Comentarios } from './Comentarios'
import { Eventos } from './Eventos'
import { Footer } from './Footer'
import { Header } from './Header'

export const Principal = () => {
  return (
    <div>
      <Header />
      <Areas />
      <Eventos />
      
      <Comentarios />
      <Footer />
    </div>
  )
}
