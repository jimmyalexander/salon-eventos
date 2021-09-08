import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';

export const Agenda = () => {
  const [reserva, setReserva] = useState([]);
  useEffect(() => {
    db.collection("agenda").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          setReserva( antes => {
            return [
              {
                id: doc.id,
                dia: doc.data().dia,
                mes: doc.data().mes,
                año: doc.data().año,
                hora: doc.data().hora
              }, ...antes
            ]
          })
        });
  });
  },[])
  console.log(reserva)
  return (
    <div>
      <div className="container_reservacion">
        <h1>Reservaciónes</h1>
        <div className="reservacion">
          {
            reserva.map( dates => {
              return (
                  <div className='reservacion_data' key={dates.id}>
                    <div className='data'>
                      <p>{dates.dia}</p>
                      <p>{dates.mes}</p>
                      <p>{dates.año}</p>
                      <p>{dates.hora}</p>
                    </div>
                  </div>
                )
              }
            )
          }
        </div>
      </div>
    </div>
  )
}
