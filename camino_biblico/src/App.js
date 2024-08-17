import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Imagenes/Inicio';
import Login from './Imagenes/Login';
import Usuario from './Imagenes/Usuario';
import Layout from './Imagenes/layout'; 
import Anuncio from './Imagenes/anuncio';
import AnnouncementsList from './Imagenes/mostraranuncio';
import AddEvent from './Imagenes/eventos';
import DisplayCalendar from './Imagenes/calendario';
import AddMaterial from './Imagenes/Material';
import DisplayMaterial from './Imagenes/mostrarmaterial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="anuncios" element={<AnnouncementsList/>} />
          <Route path="calendario" element={<DisplayCalendar/>} />
          <Route path="material" element={<DisplayMaterial/>} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<div>Registro</div>} />
        </Route>


        <Route path="usuario" element={<Usuario />} />
        <Route path="anuncio" element={<Anuncio />} />
        <Route path="fechas" element={<AddEvent />} />
        <Route path="materiales" element={<AddMaterial />} />
      </Routes>
    </Router>
  );
}

export default App;
