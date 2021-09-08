import React, { useState } from 'react';
import logoimg1 from '../assets/static/imagen2.jpg';
import logoimg2 from '../assets/static/imagen3.jpg';
import logoimg3 from '../assets/static/imagen5.jpeg';
import logoimg4 from '../assets/static/imagen6.jpg';
import logoimg5 from '../assets/static/imagen7.jpg';
import logoimg6 from '../assets/static/imagen8.jpeg';
import logoimg7 from '../assets/static/imagen12.jpg';
import logoimg8 from '../assets/static/imagen13.jpg';
import logoimg9 from '../assets/static/imagen16.jpg';
import logoimg10 from '../assets/static/imagen27.jpg';
import logoimg11 from '../assets/static/imagen24.jpg';
import logoimg12 from '../assets/static/imagen25.jpg';


import Icon from './Iconos';
import { mdiArrowUpBox } from '@mdi/js';
import { useHistory } from 'react-router';

export const Eventos = () => {

  const [ scroll , setScroll] = useState(0);
  const history = useHistory()

  const handleClick= () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    history.push('/salon-eventos/');
    
  }
  window.onscroll = function() {
    setScroll(window.scrollY);
  };

  return (
    <div>
      <div className="container_eventos">
        <div className="container_title">
          <h1>Eventos que realizamos</h1>
        </div>

        <div className="container_banners">
          <div>
            <div className="banner">
              <figure>
                <img src={logoimg1} alt=""/>
              </figure>

              <div className="banner-text">
                <h3>title</h3>
                <p>text lorem ipsum</p>
              </div>
            </div>

            <div className="banner">
              <figure>
                <img src={logoimg2} alt=""/>
              </figure>

              <div className="banner-text">
                <h3>title</h3>
                <p>text lorem ipsum</p>
              </div>
            </div>

            <div className="banner">
              <figure>
                <img src={logoimg3} alt=""/>
              </figure>

              <div className="banner-text">
                <h3>title</h3>
                <p>text lorem ipsum</p>
              </div>
            </div>

            <div className="banner">
              <figure>
                <img src={logoimg4} alt=""/>
              </figure>

              <div className="banner-text">
                <h3>title</h3>
                <p>text lorem ipsum</p>
              </div>
            </div>
          </div>

          <div>
          
          <div>
            <div className="banner">
              <figure>
                <img src={logoimg5} alt=""/>
              </figure>

              <span className="banner-text">
                <h3>title</h3>
                <p>text lorem ipsum</p>
              </span>
            </div>

            <div className="banner">
              <figure>
                <img src={logoimg6} alt=""/>
              </figure>

              <span className="banner-text">
                <h3>title</h3>
                <p>text lorem ipsum</p>
              </span>
            </div>

            <div className="banner">
              <figure>
                <img src={logoimg7} alt=""/>
              </figure>

              <div className="banner-text">
                <h3>title</h3>
                <p>text lorem ipsum</p>
              </div>
            </div>

            <div className="banner">
              <figure>
                <img src={logoimg8} alt=""/>
              </figure>

              <div className="banner-text">
                <h3>title</h3>
                <p>text lorem ipsum</p>
              </div>
            </div>
          </div>


          </div>

          <div>
          
          <div>
            <div className="banner">
              <figure>
                <img src={logoimg9} alt=""/>
              </figure>

              <div className="banner-text">
                <h3>title</h3>
                <p>text lorem ipsum</p>
              </div>
            </div>

            <div className="banner">
              <figure>
                <img src={logoimg10} alt=""/>
              </figure>

              <div className="banner-text">
                <h3>title</h3>
                <p>text lorem ipsum</p>
              </div>
            </div>

            <div className="banner">
              <figure>
                <img src={logoimg11} alt=""/>
              </figure>

              <div className="banner-text">
                <h3>title</h3>
                <p>text lorem ipsum</p>
              </div>
            </div>

            <div className="banner">
              <figure>
                <img src={logoimg12} alt=""/>
              </figure>

              <div className="banner-text">
                <h3>title</h3>
                <p>text lorem ipsum</p>
              </div>
            </div>
          </div>

          </div>
        </div>
        
      </div>
      <div className="container_arrow-home">
          <Icon onClick={handleClick} size={'50px'} color={'#ce4257'} icon={ mdiArrowUpBox } className={ scroll > 2500 ? 'arrow_home' : 'no_display'} />
        </div>
    </div>
  )
}
