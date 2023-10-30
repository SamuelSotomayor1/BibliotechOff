import React from 'react'
import './Bibliotech3.css';

export const Filtro = () => {
  return (
    <body>
    <h1>Búsqueda Avanzada</h1>
    <form action="busqueda.php" method="get">
        <label for="titulo">Título del Libro:</label>
        <input type="text" id="titulo" name="titulo" placeholder="Ingrese el título del libro"/>

        <label for="autor">Autor:</label>
        <input type="text" id="autor" name="autor" placeholder="Ingrese el nombre del autor"/>

        <label for="genero">Género:</label>
        <select id="genero" name="genero">
            <option value="">Seleccione un género</option>
            <option value="Acción">Acción</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Comedia">Comedia</option>
            <option value="Terror">Terror</option>
        </select>

        <label for="anio_publicacion">Año de Publicación:</label>
        <input type="number" id="anio_publicacion" name="anio_publicacion" placeholder="Ingrese el año de publicación"/>
        
        <input className="button" type="submit" value="Buscar"/>
    </form>
    </body>
  )
}
