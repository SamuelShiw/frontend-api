# INSTITUTO SENATI

## INVESTIGACIÓN Y DESARROLLO INICIAL DEL FRONTEND CON REACT  
### Fundamentos del Desarrollo Frontend con React y su Integración con Backend

---

**CURSO:** FullStack Developer Software  
**ESTUDIANTE:** Jose Samuel Quispe Mamani  
**INSTRUCTOR:** Juan Carlos Flores Zenteno  
**FECHA:** 27/04/2026  

---

## Introducción

El desarrollo frontend con React se basa en la creación de interfaces dinámicas que permiten al usuario interactuar con un sistema sin necesidad de recargar la página constantemente. Este enfoque mejora la experiencia del usuario y facilita la integración con servicios backend.

React utiliza una arquitectura basada en componentes, estado y hooks para gestionar la lógica y la visualización de la información.

---

## SPA (Single Page Application)

Una SPA es una aplicación web que funciona dentro de una sola página, donde el contenido cambia dinámicamente según la interacción del usuario.

En lugar de recargar toda la página, React actualiza únicamente las partes necesarias de la interfaz. Esto permite una navegación más rápida y eficiente mediante rutas como:

- `/login`
- `/dashboard`
- `/items`

---

## Estructura del proyecto

Un proyecto en React se organiza en carpetas que separan responsabilidades. Esta organización permite mantener el código ordenado y escalable.

Generalmente se divide en:

- **components** → elementos reutilizables  
- **pages** → vistas principales  
- **services** → conexión con backend  

---

## Componentes

Los componentes son la base de React y representan partes de la interfaz. Cada componente es una función que devuelve una estructura visual.

Esto permite dividir la aplicación en piezas reutilizables y fáciles de mantener.

---

## Estado (State)

El estado representa los datos que pueden cambiar dentro de la aplicación. Estos datos determinan lo que se muestra en la interfaz.

Ejemplos:

- Usuario autenticado  
- Token  
- Lista de items  

Cuando el estado cambia, la interfaz se actualiza automáticamente.

---

## Hooks

Los hooks son funciones especiales que permiten manejar estado y lógica dentro de los componentes.

Los principales son:

- **useState** → permite almacenar y actualizar datos  
- **useEffect** → permite ejecutar acciones automáticas  

---

## Enrutamiento

El enrutamiento permite navegar entre diferentes vistas dentro de la aplicación sin recargar la página.

Esto se logra mediante rutas que muestran distintos componentes según la URL, como:

- `/login`
- `/register`
- `/dashboard`
- `/items`

---

## Formularios y manejo de eventos

Los formularios permiten capturar datos del usuario, como el nombre de usuario y la contraseña.

Estos datos se almacenan en el estado mediante `useState`.

Los eventos permiten ejecutar acciones cuando el usuario interactúa con la interfaz, por ejemplo:

- `onClick`
- `onChange`
- `onSubmit`

---

## Relación con el backend

El frontend se integra con el backend mediante el consumo de endpoints como:

- `POST /login`
- `POST /register`
- `GET /api/items`

El frontend envía datos y recibe respuestas en formato JSON, las cuales se almacenan en el estado para actualizar la interfaz.

Además, el sistema utiliza roles de usuario:

- **admin**
- **editor**
- **reader**

Estos roles determinan qué acciones puede realizar cada usuario dentro de la interfaz.

---

## Conclusión

React permite construir aplicaciones modernas mediante el uso de componentes, estado y hooks.

La correcta implementación de estos conceptos facilita la integración con el backend, permitiendo desarrollar sistemas dinámicos, organizados y escalables.