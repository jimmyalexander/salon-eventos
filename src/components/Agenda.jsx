import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { Footer } from './Footer';
import { Loader } from './Loader';

export const Agenda = () => {
  const [reserva, setReserva] = useState([]);
  const [log, setLog] = useState(false);
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
                hora: doc.data().hora,
              }, ...antes
            ]
          })
        });
        setLog(true);
  })
  },[])
  return (
    <div>
      <div className="container_reservacion">
        <h1>Reservaciónes</h1>
        <div className="reservacion">
          {
            log?reserva.map( dates => {
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
            ):
            <Loader />
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
