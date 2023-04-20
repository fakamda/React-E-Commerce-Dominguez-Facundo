# NPC-STORE
## _Proyecto de React con Firebase_

Este es un proyecto de React que utiliza Firebase como plataforma de desarrollo en la nube. Con este proyecto podrás:

- Crear una aplicación web en tiempo real
- Almacenar datos en la nube
- Obtener datos desde la nube con Firebase

## Features

- E-commerce el cual permite ver y filtrar los items por categoria
- Validaciones de stock y generar ordenes de compra
- Categorias dinamicas.

## Tech

Estas son las distintas tecnologias utilizadas en el proyecto:

- [React JS] - Framework de interfaces de usuario
- [Tailwind Css] - Framework de Css para agilizar la escritura de estilos.
- [Firebase] - Como backend y db en la nube
- [React-Router-Dom] - Para la navegacion y el context


## Instalacion

Para poder utilizar este proyecto, necesitarás tener instalado [Node.js](https://nodejs.org/) y NPM en tu computadora. Luego, deberás seguir los siguientes pasos: 

- Clona este repositorio en tu computadora
- En la carpeta raíz del proyecto, ejecuta el comando npm install para instalar todas las dependencias necesarias
- configurar dentro de tu archivo tailwind.config.js y pegar dentro de content:   content: ["./src/**/*.{js,jsx,ts,tsx}",]
- por ultimo debes pegar en tu archivo index.css lo siguiente: 
@tailwind base;
@tailwind components;
@tailwind utilities;

```sh
cd repositorio
npm install
npm i react-router-dom 
npm install -D tailwindcss
npx tailwindcss init
```
 
- Crea una cuenta de Firebase en el sitio web de [Firebase](https://console.firebase.google.com/)
- Crea un nuevo proyecto en Firebase y configura una coleccion como products
- Tambien deberas crear una para categories ya que estas se generan dinamicamente desde firebase.
- Copia las credenciales de tu proyecto de Firebase y pégalo en el archivo firebaseConfig.js que esta dentro de la carpeta de servicios.
- Crea un archivo .env en la carpeta raíz del proyecto y define las siguientes variables de entorno:

REACT_APP_FIREBASE_API_KEY=<API_KEY>
REACT_APP_FIREBASE_AUTH_DOMAIN=<AUTH_DOMAIN>
REACT_APP_FIREBASE_PROJECT_ID=<PROJECT_ID>
REACT_APP_FIREBASE_STORAGE_BUCKET=<STORAGE_BUCKET>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<MESSAGING_SENDER_ID>
REACT_APP_FIREBASE_APP_ID=<APP_ID>



- Ejecuta el comando npm start para iniciar el servidor local y ver el proyecto en tu navegador

```sh
npm start
```

## Uso
- El e-commerce es acerca de Componentes de PC principalmente, tambien se ofrecen notebooks gamer y accesiorios para estos.
- Puedes agregar productos al carrito, estos no los podras comprar si estan sin stock.
- tambien se puede validar al momento de finalizar la compra para verificar que siga habiendo en stock al momento de la misma.
- Los items se pueden visualizar de manera detallada y modificar la cantidad agregada al carro
- Finalmente al momento de finalizar la compra se piden los datos del comprador para generar una orden la cual se genera en firebase automaticamente, el id se le provee al comprador para que pueda hacer un seguimiento del producto.
- La aplicacion luego de finalizar la compra vuelve a el inicio.
