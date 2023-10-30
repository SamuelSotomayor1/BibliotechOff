import React from 'react'
import './Bibliotech.css';
import { useState } from 'react';


export const Iniciar = ({setUser}) => {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        if( nombre === "" || contraseña === ""){
            setError(true)
            return
        }
        setError(false)
        setUser([nombre])
    }

  return (
        <body id='body'>
        <div id="contenedor">
            <div className="central">
                <div id="login">
                    <div className="titulo">
                        Bienvenido
                    </div>
                    <section>
                    <form id="loginform" onSubmit={handleSubmit}>
                        <input type="text" name="usuario" placeholder="Usuario" value={nombre} onChange={e => setNombre(e.target.value)}/>
                            
                        <input type="password" placeholder="Contraseña" name="password" value={contraseña} onChange={e => setContraseña(e.target.value)}/>
                            
                        <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                    </form>
                        {error && <p>Todos los campos son obligatorios</p>}
                    </section>
                    <div className="pie-form">
                        <a href="#hola">¿Perdiste tu contraseña?</a><br/>
                        <a href="#holi">¿No tienes Cuenta? Registrate</a><br/>
                        <a href="#holo">Volver</a>
                    </div>
                </div>         
            </div>
        </div>
        </body>
    )
}
