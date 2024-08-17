import React from 'react';
import './Usuarios.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank, faCalendar, faBullhorn, faChartSimple, faBookBible, faLightbulb } from '@fortawesome/free-solid-svg-icons';

function Usuario() {
    const nombre = localStorage.getItem('userName');
    const puesto = localStorage.getItem('puesto');
    const rol = localStorage.getItem('rol');

    return (
        <div className='fondo'>
            <div className='barra-superior'>
                <div className='perfil'>
                    <div className='info-usuario'>
                        <span className='nombre-usuario'>{nombre}</span>
                        <span className='puesto-usuario'>{puesto}</span>
                    </div>
                </div>
                {rol === '1111' && (
                    <div className='menu-desplegable'>
                        <select className='menu-combobox'>
                            <option value="/sociedad">Sociedad</option>
                            <option value="/jovenes">Jóvenes</option>
                            <option value="/femenil">Femenil</option>
                            <option value="/caballeros">Caballeros</option>
                            <option value="/ornato">Ornato</option>
                        </select>
                    </div>
                )}
            </div>
            <div className='menu'>
        <div className='fila'>
          <a href="/caja" className='menu-item'>
            <FontAwesomeIcon icon={faPiggyBank} size='10x' />
            <span>Caja</span>
          </a>
          <a href="/fechas" className='menu-item'>
            <FontAwesomeIcon icon={faCalendar} size='10x' />
            <span>Calendario</span>
          </a>
          <a href="/anuncio" className='menu-item'>
            <FontAwesomeIcon icon={faBullhorn} size='10x' />
            <span>Anuncios</span>
          </a>
        </div>
        <div className='fila'>
          <a href="/estadisticas" className='menu-item'>
            <FontAwesomeIcon icon={faChartSimple} size='10x' />
            <span>Estadísticas</span>
          </a>
          <a href="/materiales" className='menu-item'>
            <FontAwesomeIcon icon={faBookBible} size='10x' />
            <span>Material</span>
          </a>
          <a href="/propuesta" className='menu-item'>
            <FontAwesomeIcon icon={faLightbulb} size='10x' />
            <span>Propuesta</span>
          </a>
        </div>
            </div>
        </div>
    );
}

export default Usuario;
