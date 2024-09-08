# Sistema Antifraude Transaccional

## Descripción
Este proyecto es un frontend desarrollado en React para un sistema antifraude transaccional del sector financiero. Proporciona una interfaz de usuario para monitorear clientes, transacciones y posibles fraudes detectados.

## Características
- Lista de clientes con estado de cuenta
- Visualización de transacciones
- Monitoreo de fraudes sospechados
- Interfaz de usuario intuitiva con Material-UI

## Requisitos previos
- Node.js (versión 14.0.0 o superior)
- npm (normalmente viene con Node.js)

## Instalación

1. Clona el repositorio:
   ```
   git clone git@github.com:mcforero95/ProyectoAntifraudeFront.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd proyecto-antifraude-front
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Configuración

Asegúrate de configurar correctamente la URL de tu API backend en el archivo `src/services/api.js`.

## Ejecución

Para iniciar la aplicación en modo de desarrollo:

npm start


La aplicación estará disponible en `http://localhost:3000`.

## Estructura del proyecto

proyecto-antifraude-front/
├── public/
├── src/
│ ├── components/
│ │ ├── ClienteList.jsx
│ │ ├── TransaccionList.jsx
│ │ ├── FraudeSospechadoList.jsx
│ │ ├── Layout.jsx
│ │ └── BloqueoAutomatico.jsx
│ ├── services/
│ │ └── api.js
│ ├── utils/
│ │ └── fraudeDetection.js
│ ├── App.js
│ └── index.js
├── package.json
└── README.md

## Tecnologías utilizadas

- React
- React Router
- Material-UI
- Axios

## Contribución

Si deseas contribuir al proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una nueva rama 
3. Haz commit de tus cambios 
4. Haz push a la rama 
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

MATI UNIANDES

Link del proyecto: [https://github.com/mcforero95/ProyectoAntifraudeFront](https://github.com/mcforero95/ProyectoAntifraudeFront)

