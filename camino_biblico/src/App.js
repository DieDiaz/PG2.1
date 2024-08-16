import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Imagenes/Inicio';
import Login from './Imagenes/Login';
import Usuario from './Imagenes/Usuario';
import Layout from './Imagenes/layout'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas que utilizan el Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="anuncios" element={<div>Anuncios</div>} />
          <Route path="calendario" element={<div>Calendario</div>} />
          <Route path="material" element={<div>Material</div>} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<div>Registro</div>} />
        </Route>

        {/* Ruta que no utiliza el Layout */}
        <Route path="usuario" element={<Usuario />} />
      </Routes>
    </Router>
  );
}

export default App;
