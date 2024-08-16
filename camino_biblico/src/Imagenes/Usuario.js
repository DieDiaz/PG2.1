import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank, faCalendar, faBullhorn, faChartSimple, faBookBible, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './Usuarios.css';

function Usuario() {
  return (
    <div className='fondo'>
      <div className='barra-superior'>
        <div className='perfil'>
          <img src="default.jpg" alt="Foto de perfil" className='foto-perfil' />
          <div className='info-usuario'>
            <span className='nombre-usuario'>Nombre del Usuario</span>
            <span className='puesto-usuario'>Puesto</span>
          </div>
        </div>
        <div className='menu-desplegable'>
          <select className='menu-combobox'>
            <option value="/sociedad">Sociedad</option>
            <option value="/jovenes">Jóvenes</option>
            <option value="/femenil">Femenil</option>
            <option value="/caballeros">Caballeros</option>
            <option value="/ornato">Ornato</option>
          </select>
        </div>
      </div>

      <div className='menu'>
        <div className='fila'>
          <a href="/caja" className='menu-item'>
            <FontAwesomeIcon icon={faPiggyBank} size='5x' />
            <span>Caja</span>
          </a>
          <a href="/fechas" className='menu-item'>
            <FontAwesomeIcon icon={faCalendar} size='5x' />
            <span>Calendario</span>
          </a>
          <a href="/anuncio" className='menu-item'>
            <FontAwesomeIcon icon={faBullhorn} size='5x' />
            <span>Anuncios</span>
          </a>
        </div>
        <div className='fila'>
          <a href="/estadisticas" className='menu-item'>
            <FontAwesomeIcon icon={faChartSimple} size='5x' />
            <span>Estadísticas</span>
          </a>
          <a href="/materiales" className='menu-item'>
            <FontAwesomeIcon icon={faBookBible} size='5x' />
            <span>Material</span>
          </a>
          <a href="/propuesta" className='menu-item'>
            <FontAwesomeIcon icon={faLightbulb} size='5x' />
            <span>Propuesta</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Usuario;
