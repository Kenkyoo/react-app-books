# Book Search App

Esta es una aplicación web que permite buscar libros utilizando la API de OpenLibrary. Los resultados se muestran en una interfaz simple y fácil de usar.

## Tecnologías utilizadas

- **React**: Librería para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo para aplicaciones modernas de JavaScript.
- **Axios**: Librería para hacer peticiones HTTP.
- **Bootstrap**: Framework CSS para diseño responsivo.
- **Sass**: Preprocesador CSS para un estilo más organizado.

## Funcionalidades

- Búsqueda de libros por título.
- Visualización de los resultados con título, autor, año de publicación y portada.
- Soporta la búsqueda de múltiples resultados.

## Instalación

Para instalar y correr la aplicación localmente, sigue estos pasos:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Kenkyoo/react-app-books.git

    Navega a la carpeta del proyecto:

cd react-app-books

Instala las dependencias:

npm install

Inicia el servidor de desarrollo:

    npm run dev

    La aplicación estará disponible en http://localhost:3000.

Uso

    Ingresa el título del libro que deseas buscar en el campo de entrada.
    Haz clic en el botón Submit o presiona Enter.
    Los resultados de búsqueda aparecerán debajo del formulario, mostrando la información del libro, incluyendo el título, autor, año de publicación y la portada.

Estructura del Proyecto

/src
  /assets
  /components
    Card.tsx
  App.tsx
  /styles
    styles.scss
  /types
    Book.ts

Contribución

Si deseas contribuir a este proyecto, por favor abre un Issue o realiza un Pull Request con tus cambios.
Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
