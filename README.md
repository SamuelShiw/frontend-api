# Frontend API - React

## Descripción

Este proyecto corresponde al desarrollo inicial del frontend con React para integrarse con el backend trabajado previamente en Node.js, Express, MySQL y JWT.

El objetivo principal es construir la base visual del sistema, organizando las primeras vistas, componentes y rutas que permitirán interactuar posteriormente con los servicios del backend.

## Propósito del proyecto

El frontend se plantea como un panel de gestión de items con autenticación y roles de usuario.

Roles considerados:

- **admin**: puede crear, leer, editar y eliminar items.
- **editor**: puede leer y crear items.
- **reader**: solo puede leer items.

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- JavaScript
- HTML
- CSS
- Git y GitHub

## Conceptos aplicados

### SPA

La aplicación funciona como una SPA, es decir, una aplicación de una sola página donde la navegación ocurre sin recargar completamente el navegador.

### Componentes

El proyecto divide la interfaz en componentes reutilizables como `Navbar`, `ItemCard` y `RoleBadge`.

### Estado

Se utiliza estado para manejar datos dinámicos dentro de la interfaz, como listas de items o datos ingresados en formularios.

### Hooks

Se aplica `useState` para guardar datos dentro de los componentes. Más adelante se podrá usar `useEffect` para consumir datos del backend automáticamente.

### Routing

Se utiliza `react-router-dom` para definir rutas internas como:

- `/`
- `/register`
- `/dashboard`
- `/items`

### Formularios y eventos

La vista de Login incluye inputs controlados con estado y manejo de eventos mediante `onChange` y `onSubmit`.

## Estructura del proyecto

```txt
frontend-api/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ItemCard.jsx
│   │   └── RoleBadge.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── Items.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── hooks/
│   │   └── useAuth.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
Vistas iniciales
Login

Vista inicial del sistema. Permite simular el ingreso de usuario mediante un formulario controlado con useState.

Register

Vista destinada al registro de usuarios.

Dashboard

Pantalla principal del sistema después del inicio de sesión.

Items

Vista encargada de mostrar una lista de items mediante componentes reutilizables.

Componentes principales
Navbar

Permite navegar entre las diferentes vistas del sistema sin recargar la página.

ItemCard

Muestra la información individual de un item, como nombre, descripción y estado.

RoleBadge

Muestra el rol del usuario dentro de la interfaz.

Relación con el backend

Este frontend está diseñado para integrarse con el backend desarrollado previamente, el cual cuenta con los siguientes endpoints principales:

POST /register
POST /login
GET /api/items
GET /api/items/:id
POST /api/items
PUT /api/items/:id
DELETE /api/items/:id
PUT /api/users/:id/role

En futuras sesiones, el frontend consumirá estos servicios para realizar autenticación real, manejo de tokens JWT y operaciones CRUD sobre los items.

Instalación

Clonar el repositorio:

git clone https://github.com/SamuelShiw/frontend-api.git

Entrar al proyecto:

cd frontend-api

Instalar dependencias:

npm install

Ejecutar el proyecto:

npm run dev

Abrir en el navegador:

http://localhost:5173
Comandos principales
npm install
npm run dev
Estado actual del proyecto

Actualmente el proyecto cuenta con:

Estructura inicial organizada.
Rutas configuradas con React Router.
Navbar funcional.
Componentes reutilizables.
Vista de items con props.
Manejo básico de estado con useState.
Formulario de login demostrativo.
Manejo de eventos con onChange y onSubmit.
Próximos pasos
Conectar Login con el backend.
Guardar token JWT.
Proteger rutas privadas.
Consumir /api/items.
Mostrar botones según rol.
Implementar creación, edición y eliminación desde la interfaz.
Conclusión

Este proyecto representa la base inicial del frontend en React. Su estructura permite comprender conceptos fundamentales como SPA, componentes, estado, hooks, routing, formularios y eventos, preparando el sistema para integrarse posteriormente con el backend desarrollado.