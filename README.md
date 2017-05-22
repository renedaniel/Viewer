# Viewer

Pequeña aplicación para visualizar temporadas de una serie desarrollada con:

- ReactJS
- Webpack
- Babel
- Materialize
- PHP

Demo en [Viewer](http://renedaniel.ga/viewer?gid=544242)

### Getting Started

Haz Checkout a esta repo, instala dependencias e inicia el servidor de desarrollo

```
> git clone https://github.com/renedaniel/Viewer.git
> cd Viewer
> npm install
> npm start
```
Una vez iniciado el servidor de desarrollo, encuentra los cambios compilados en
- http://localhost/viewer/public?gid=grupoId

#### Producción

Para generar el js de producción y agregarlo automáticamente a la carpeta public de nuestra página PHP

```
> npm run build
```
