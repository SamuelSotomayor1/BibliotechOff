import React from 'react'
import './Bibliotech2.css';
import logop from "./Images/logop.png";
import accion from "./Images/accion.jpg";
import fantasia from "./Images/fantasia.jpg";
import comedia from "./Images/comedia.jpg";
import terror from "./Images/terror.jpg";
import gmail from "./Images/gmail.png";
import llamada from "./Images/llamada.png";
import mapas from "./Images/mapas.png";
import romance from "./Images/romance.jpg";
import historia from "./Images/historia.jpg";
import economia from "./Images/economia.jpg";
import educativos from "./Images/educativos.jpg";

//import "bootstrap/dist/css/bootstrap.min.css";
//import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";


export const Web = ({user, setUser}) => {

    const handleLogOut = () => {
        setUser([]);
    }

  return (
    <body className='body'>
    <div className="head">
    <div className="logo">
        <img src={logop} alt="foto" width="60px" height="65px"/>
    </div>
        <nav className="navegador">
            <ul>
                <li><a href="#bien">Inicio</a></li>
                <li><a href="#libros">Catálogo</a>
                    <ul className="dropdown">
                        <li><a href="#b">Filtro de Recursos</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Contacto</a></li>
                <li><a href="#a">Mi Perfil</a>
                    <ul className="dropdown">
                        <li><a href="#b" onClick={handleLogOut}>Log Out</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
    <header className="content header" id="bien">
        <h2 className="title" id="bienv">Bienvenido a Bibliotech <br/> {user}</h2>
        <div className="fondo-text"><p class="frase">"Leer nos abre una ventana al mundo"</p>
        </div>
    </header>
    <section className="content books" id="libros">
        <h2 className="title menu">Catálogo</h2>
        <div className="input-search">
            <input className="buscar" placeholder="Buscar libro, revista, recursos académicos"/>
        </div>
        <div className="box-container">
            <div className="box gallery">
                <img  className="genero" src={accion} alt = "accion"  width="140px"/>
                <div className="pie">
                <h3>Acción</h3>
                </div>
            </div>
            <div className="box gallery">
                <img className="genero" src={fantasia} alt ="fantasia" width="135px"/>
                <div className="pie">
                <h3>Fantasia</h3>
                </div>
            </div>
            <br/>
            <div className="box gallery">
                <img  className="genero" src ={comedia} alt ="comedia" width="140px"/>
                <div className="pie">
                <h3>Comedia</h3>
                </div>
            </div>
            <div className="box gallery">
                <img  className="genero" src={terror} alt ="Terror" width="150px"/>
                <div className="pie">
                <h3>Terror</h3>
                </div>
            </div>
        </div>

        <div className="box2">
            <div className="box gallery">
                <img  className="genero" src={romance} alt = "romance"  width="140px"/>
                <div className="pie">
                <h3>Romance</h3>
                </div>
            </div>
            <div className="box gallery">
                <img className="genero" src={historia} alt ="historia" width="148px"/>
                <div className="pie">
                <h3>Historia</h3>
                </div>
            </div>
            <br/>
            <div className="box gallery">
                <img  className="genero" src ={economia} alt ="economia" width="160px"/>
                <div className="pie">
                <h3>Economía</h3>
                </div>
            </div>
            <div className="box gallery">
                <img  className="genero" src={educativos} alt ="educativos" width="170px"/>
                <div className="pie">
                <h3>Educativos</h3>
                </div>
            </div>
        </div>
    </section>
    <section className="content contact" id="contact">
        <h2 className="title context">Contacto</h2>
        <div className="lista">
        <ul>
            <img className="icono" type="png" rel="icon" src={gmail} width="30px" height="25px" alt="icon1"/>
            <li className="cont">Bibliotech@gmail.com</li>
            <img className="icono" type="png" rel="icon" src={llamada} width="30px" height="25px" alt="icon2"/>
            <li className="cont">+569435812</li>
            <img className="icono" type="png" rel="icon" src={mapas} width="30px" height="25px" alt="icon3"/>
            <li className="cont">Av. La Tirana #4802, Iquique</li>
        </ul>
        </div>
    </section>
    </body>
  )
}
