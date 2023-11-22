import React from 'react'
import './Bibliotech4.css';
import libro from "./Images/libro-it.jpg";
import logop from "./Images/logop.png";

export const Ventas = () => {
  return (
<body>
    <header id="cabeza">
        <img id="logo" alt="logo" src={logop} width="120px" height="100px"/>
    </header>
    <main>
    <div id="imagen">
        <div id="conjunto">
            <img  id="it" alt="libro-it" src={libro} width="600px" height="800px"/>
        </div>
    </div>
    <div id="container">
        <div id="titulo">
            <h1 id="titulo-libro">"It"</h1>
            <h2 id="autor">Stephen King</h2>
        </div>
        <div id="precio">
            <span id="price">$50.00</span>
        </div>
        <div id="detalles">
            <div id="form">
                <button id="comprar">Comprar</button>
                <button id="alquilar">Alquilar</button>
                <button id="carrito">Añadir al carrito</button>
            </div>
        </div>
        <div id="sinopsis">
            <h4 id="resumen">Resumen y Sinopsis</h4>
            <p id="info">¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano? ¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela.
                Tras veintisiete años de tranquilidad y lejanía una antigua promesa infantil les hace volver al lugar en el que vivieron su infancia y juventud como una terrible pesadilla. Regresan a Derry para enfrentarse con su pasado y enterrar definitivamente la amenaza que los amargó durante su niñez. Saben que pueden morir, pero son conscientes de que no conocerán la paz hasta que aquella cosa sea destruida para siempre.
                It es una de las novelas más ambiciosas de Stephen King, donde ha logrado perfeccionar de un modo muy personal las claves del género de terror.</p>
            <div id="lista">
                <ul>
                    <li>Autor: Stephen King</li>
                    <li>Género: Terror</li>
                    <li>Año: 2017</li>
                    <li>Idioma: Español</li>
                    <li>N° de páginas: 1504</li>
                </ul>
            </div>
        </div>
    </div>
    </main>

</body>
  )
}
