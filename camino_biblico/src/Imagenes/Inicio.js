import "./Inicio.css";


function Inicio() {
    return(
        <div>
        <div className="Inicio">
            <div className="Mision">
                <h3>MISION</h3>
                <p>Nuestra misión es glorificar a Dios a través de la enseñanza y la práctica de Su palabra, ofreciendo un lugar de adoración y comunidad para todos. Nos dedicamos a fomentar el crecimiento espiritual y personal de nuestros miembros mediante cultos, estudios bíblicos, y actividades comunitarias, siempre guiados por los principios cristianos de amor, servicio y fe.</p>
            </div>  
            <div>" "</div>
            <div className="Vision">
                <h3>VISION</h3>
                <p>Nuestra visión es ser una iglesia vibrante y activa que impacte positivamente a la comunidad de Amatitlán y más allá. Aspiramos a ser un faro de esperanza y fe, promoviendo la transformación de vidas a través del evangelio de Jesucristo. Buscamos crecer en número y en espíritu, expandiendo nuestro alcance y colaborando con otras organizaciones para llevar el mensaje de salvación y amor a todas partes.</p>
            </div>         
        </div>
        <div className="pie">
        <img src='/logo.jpg' alt="Logo" className="nav-logo" />
        <p>2 calle 2-48 col. Concepción 1 cantón Ingenio, Amatitlan</p>
      </div>
      </div>
    );
}

export default Inicio;