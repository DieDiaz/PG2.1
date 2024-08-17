
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="Layout">
      <header className="App-header">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Inicio</Link></li>
            <li className="nav-item"><Link to="/anuncios">Anuncios</Link></li>
            <li className="nav-item"><Link to="/calendario">Calendario</Link></li>
            <li className="nav-item"><Link to="/material">Material</Link></li>
            <div className="nav-spacer"></div>
            <li className="nav-item"><Link to="/login">Ingreso</Link></li>
            <li className="nav-item"><Link to="/registro">Registro</Link></li>
          </ul>
        </nav>
        <Outlet/>
      </header>
    </div>
  );
};

export default Layout;
