import React, { useEffect, useState } from 'react';
import { mdiStarSettings, mdiCloseThick  } from '@mdi/js';
import Icon from './Iconos';
//import { useCounter } from '../CustomHooks/UseCounter';
import { db } from '../firebase/firebase';
import { Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';

export const Comentarios = () => {

  const [memorycount, setMemorycount] = useState(0);
  const [puntajeDado, setPuntajeDado] = useState(0);
  const [form, setForm] = useState({
    comentario: '',
    correo: '',
    usuario: '',
  })
  const [comentarios, setComentarios] = useState([]);
  const [selectStar, setSelectStar] = useState(false);
  const [selectTwostar, setSelectTwostar] = useState(false);
  const [selectThreestar, setSelectThreestar] = useState(false);
  const [selectFourstar, setSelectFourstar] = useState(false);
  const [selectFivestar, setSelectFivestar] = useState(false);

  const [escribirComentario, setEscribirComentario] = useState(false);


  
  useEffect(() => {
    db.collection("estrellas").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          setMemorycount(doc.data().conteo)
        });
  });
  },[memorycount])

  useEffect(() =>{
    db.collection("comentarios").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setComentarios( antes =>{
          return [
            {
              id: doc.id,
              user: doc.data().usuario,
              comentario: doc.data().comentario
            }, ...antes
          ]
        })      
        });
  });
  },[])

  const clickOnestar = (e) =>{
    setSelectStar( !selectStar );
    setSelectTwostar(false);
    setSelectThreestar(false);
    setSelectFourstar(false);
    setSelectFivestar(false);
    setPuntajeDado(1);
  }
  const clickTwostar = (e) =>{
    setSelectStar( true );
    setSelectTwostar(!selectTwostar);
    setSelectThreestar(false);
    setSelectFourstar(false);
    setSelectFivestar(false);
    setPuntajeDado(2);

  }
  const clickThreestar = (e) =>{
    setSelectStar( true );
    setSelectTwostar(true);
    setSelectThreestar(!selectThreestar);
    setSelectFourstar(false);
    setSelectFivestar(false);
    setPuntajeDado(3);
  }
  const clickFourstar = (e) =>{
    setSelectStar( true );
    setSelectTwostar(true);
    setSelectThreestar(true);
    setSelectFourstar(!selectFourstar);
    setSelectFivestar(false);
    setPuntajeDado(4);
  }
  const clickFivestar = (e) =>{
    setSelectStar( true );
    setSelectTwostar(true);
    setSelectThreestar(true);
    setSelectFourstar(true);
    setSelectFivestar(!selectFivestar);
    setPuntajeDado(5);
  }

  const handleChangeNombre = (e) =>{
    setForm({
      comentario: '',
      correo: '',
      usuario: e.target.value
    })
  }

  const handleChangeComentario = (e) =>{
    setForm(
      {
        comentario: e.target.value,
        correo: '',
        usuario: form.usuario
      }
    )
  }
  const handleChangeMail = (e) =>{
    setForm({
      comentario: form.comentario,
      correo: e.target.value,
      usuario: form.usuario
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const {comentario, correo, usuario} = form;
    db.collection("comentarios").add({
      comentario: comentario,
      correo: correo,
      usuario: usuario,
    })
    .then((docRef) => {
      setEscribirComentario(!escribirComentario);

      setForm({
        comentario: '',
        correo: '',
        usuario: '',
      }) 

      setSelectStar(false);
      setSelectTwostar(false);
      setSelectThreestar(false);
      setSelectFourstar(false);
      setSelectFivestar(false);

    })
    

    const estrellasConteoRef = db.collection('estrellas');
      estrellasConteoRef
        .doc('8Ftv0FCO1bl3bdbPerbg')
        .update({
          conteo: memorycount + puntajeDado
      })

      Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: '¡¡Gracias por tu opinion!!.',
        text: 'Pronto publicaremos tu comentario',
        showConfirmButton: false,
        timer: 2500
      })  
  
  }

  const handleEscribirComentario = () => {
    setEscribirComentario(!escribirComentario)
  }
  return (
    <div>
      

      <div className="container_comentarios-vista">
      <div className="container_comentarios-title">
        <h2>Comentarios</h2>
      </div>
        <div className="vista_principal">
          <h3>Calificación general</h3>
          <div className="vista_estrellas">
          <Icon className='star' color={memorycount > 1? '#feef11': 'gray'} size={'50px'} icon={ mdiStarSettings}/>
          <Icon className='star' color={memorycount > 10  ? '#feef11': 'gray'} size={'50px'} icon={ mdiStarSettings}/>
          <Icon className='star' color={memorycount > 20 ? '#feef11': 'gray'} size={'50px'} icon={ mdiStarSettings}/>
          <Icon className='star' color={memorycount > 30 ? '#feef11': 'gray'} size={'50px'} icon={ mdiStarSettings}/>
          <Icon className='star' color={memorycount > 40 ? '#feef11': 'gray'} size={'50px'} icon={ mdiStarSettings}/>

          </div>
          <div className="vista_comentarios-hechos">
            <div className="comentarios">
              {
                comentarios.map((item) => {
                  return(
                    <div key={item.id}>
                        <h3>{item.user}</h3>
                        <p>{item.comentario}</p>
                      </div>
                    )
                  })
              }


              <div className='crear_comentario'>

                <div className={ escribirComentario ? 'form_comentario aparicion_form' : 'form_comentario' }>
                  <form  onSubmit={handleSubmit}>
                    <Icon onClick={ handleEscribirComentario} className='exit' color={'white'} size={'30px'}  icon={ mdiCloseThick } />
                    <h2>Tu opinión nos importa ¡Evalúa nuestros servicios</h2>

                    <div className='clasificacion_general'>
                      <Icon onClick={ clickOnestar } className='star' color={selectStar  ? '#feef11' : 'gray'} size={'50px'} icon={ mdiStarSettings}/>
                      <Icon onClick={ clickTwostar } className='star' color={selectTwostar ? '#feef11' : 'gray'} size={'50px'} icon={ mdiStarSettings}/>
                      <Icon onClick={ clickThreestar } className='star' color={selectThreestar? '#feef11' : 'gray'} size={'50px'} icon={ mdiStarSettings}/>
                      <Icon onClick={ clickFourstar } className='star' color={selectFourstar ? '#feef11' : 'gray'} size={'50px'} icon={ mdiStarSettings}/>
                      <Icon onClick={ clickFivestar } className='star' color={selectFivestar ? '#feef11' : 'gray'} size={'50px'} icon={ mdiStarSettings}/>
                    </div>
                    
                    <label htmlFor="name">Nombre:</label>
                    <input value={form.usuario} required autoComplete='off' onChange={ handleChangeNombre} type="text" name="nombre" id="name"/>

                    <label htmlFor="comentarios">Comentario:</label>
                    <textarea value={ form.comentario}  onChange={ handleChangeComentario} name='comentario' id='comentarios' required placeholder='Ejemplo: ¡los mejores en todo!' />

                    <label htmlFor="mail">Correo:</label>
                    <input value={form.correo}  required onChange={ handleChangeMail} type="email" name="e-mail" id="mail"/>

                    <button>Enviar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='button_crear' onClick={ handleEscribirComentario} >{escribirComentario ? 'CERRAR FORMULARIO' : 'ESCRIBIR COMENTARIO'}</button>

    </div>
  )
}



//576 768
