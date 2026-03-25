## Pokédex
This application was developed as part of a learning project with the goal of building a React app using **`Vite.js`** and **`TypeScript`**, consuming the **`PokéAPI`** to display detailed information about various Pokémon. It offers an interactive, validated, and visually engaging experience, integrating protected routes, dynamic filters, smart pagination, and reusable components.
Global state management is implemented using `useContext` and `useReducer`, navigation is handled with React Router, and conditional rendering ensures a smooth and personalized user experience. The modular architecture allows for easy scalability and maintains a responsive and accessible interface.

<img width="1853" height="1000" alt="image" src="https://github.com/user-attachments/assets/56396678-9992-48c9-9ff9-ec920702cd88" />


## 🚀Live Demo  
**🔗[https://pokedex-cs.netlify.app/]**

## 🎯 Project Objective

Build a functional and interactive web application in React using **`Vite.js`** and **`Typescript`**, consuming the **`PokéAPI`** to allow users to:

- Enter their name as a trainer and access the Pokédex.
- Search Pokémon by name.
- Filter Pokémon by type (fire, water, electric, etc.).
- View cards with basic information about each Pokémon.
- Navigate to a detailed view with complete stats.
- Access the Pokédex only if the trainer's name is registered in the global state.

This project reinforces key skills such as:

- Global state management with `useContext` and `useReducer`.
- Dynamic and protected routing with **React Router**.
- Conditional rendering and custom validations.
- External API consumption with `axios`.
- Component-based architecture with reusable logic.
- Modular, responsive, and accessible design.

## ⚛️Technologies Used⚡

### Core Technologies

| Tool / Language        | Main Purpose |
|------------------------|---------------|
| **React**              | Modular component construction. |
| **Vite.js**            | Fast development environment and bundling. |
| **JavaScript (ES6+)**  | Search, filtering, and navigation logic. |
| **TypeScript**         | Static typing and development robustness.|
| **CSS**                | Structured and customized styling. |
| **HTML / JSX**         | Declarative app structure. |
| **Axios**              | Communication with the PokéAPI. |
| **React Icons**        | Semantic and customizable icons. |
| **React Router**       | Navigation between public and protected routes. |
| **ESLint + Plugins**   | Code linting for quality and consistency. |

### External APIs and Features

| Tecnología / API              | Funcionalidad |
|-------------------------------|---------------------------|
| **PokéAPI**                   | Data on Pokémon, types, abilities, and moves. |
| **React Router**              | Navigation across public, protected, and dynamic routes. |
| **Custom Hook(usePagination)**| Encapsulates pagination logic for the Pokédex. |

### React Logic and Structure

- **`useState`**: Controls input, filters, and results.
- **`useEffect`**: Initial data load, API requests, and sync.
- **`useContext`** + **`useReducer`**: Global state management for trainer name.
- **`useNavigate`**: Route redirection.
- **`useParams`**: Access to dynamic route parameters.
- **Text input validations.**
- **Custom Components:** `Details`, `Home`, `Hero`, `Item`, `List`, `Navbar`, `Pagination`, `Pokedex`.

### User Experience

- Welcome screen with input to enter trainer name.
- Automatic redirection to Pokédex after entering name.
- Personalized greeting in the Pokédex.
- Pokémon type filters and name-based search.
- Visual cards with image, name, and type.
- Pagination showing a limited number of Pokémon per view.
- Detailed view with complete Pokémon information:
  - Name
  - Pokédex number
  - Weight and height
  - Types and abilities
  - Base stats (HP, attack, defense, etc.)
  - Level-based moves
- Responsive design for desktop and mobile.
- Protected navigation: redirects to root if trainer name is missing.
- Responsive error handling.

## 🗂️Project Structure

```bash
📁 POKEDEX/
├── 📁 node_modules/
├── 📁 public/
|    |___ 📁 images/
│         └── 45fa6410b95886197ed68b55d081d669.png
│         └── Pokeball-PNG-Image
├── 📁 src/
│   └── 📁 assets/
│   └── 📁 components/
│   |    └── Details.tsx
|   |    └── Hero.tsx
|   |    └── Home.tsx
|   |    └── Item.tsx
|   |    └── List.tsx
|   |    └── Navbar.tsx
|   |    └── Pagination.tsx
|   |    └── Pokedex.tsx
|   └── 📁 context/
|   |    └── nameContext.tsx
│   └── 📁 hooks/
|   |    └── usePagination.tsx
│   └── 📁 routes/
|   |    └── App.tsx
|   |    └── ProtectedRoute.tsx
│   └── 📁 styles/
│   |    └── Details.css
│   |    └── Hero.css
│   |    └── Home.css
│   |    └── Item.css
│   |    └── List.css
│   |    └── Navbar.css
│   |    └── Pagination.css
│   |    └── Pokedex.css
├── index.css
├── main.tsx
├── vite-env.d.ts
```

## 🧠Key Features

- Welcome screen with trainer name input.
- Automatic redirection to **`/pokedex`** if name is registered.
- Pokémon type filtering.
- Name-based search with validation.
- Smart pagination.
- Cards with image, name, and type.
- Detailed view including:

    * *Name.*
    * *Pokédex number.*
    * *Weight and height.*
    * *Types.*
    * *Abilities.*
    * *Base stats.*
    * *Level-based moves.*

- Protected routes with global state validation.
- Reusable components and modular design.
- Error handling.  
- CSS styling per component and responsive layout.

## 🛠️Local Installation

1. Clone this repository:

```bash
git clone https://github.com/Clic-stack/Pokedex-.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npm run dev
```

## 🎨Author
Developed by Clio Salgado as part of the React module at Academlo, with the goal of strengthening skills in TypeScript, frontend development, API consumption, global state management, and modular design.

---

🔽 **Versión en Español** 🔽

## Pokédex
Esta aplicación fue desarrollada como parte de un proyecto de aprendizaje con el objetivo de construir una app en React utilizando Vite.js y `Typescript`, que consume la PokéAPI para mostrar información detallada sobre distintos Pokémon. Ofrece una experiencia interactiva, validada y visualmente atractiva, integrando rutas protegidas, filtros dinámicos, paginación inteligente y componentes reutilizables.
Se implementa manejo de estado global con `useContext` y `useReducer`, navegación con **React Router**, y renderizado condicional para una experiencia fluida y personalizada. La arquitectura modular permite escalar fácilmente y mantener una interfaz responsiva y accesible.

<img width="1853" height="1000" alt="image" src="https://github.com/user-attachments/assets/928fc23d-a9a6-482b-9a87-2630d9f157ab" />


## 🚀Demo en línea  
**🔗[https://pokedex-cs.netlify.app/]**

## 🎯 Objetivo del proyecto

Construir una aplicación web funcional e interactiva en React usando Vite.js y `Typescript`, consumiendo la PokéAPI para permitir al usuario:

- Ingresar su nombre como entrenador y acceder a la Pokédex.
- Buscar Pokémon por nombre.
- Filtrar Pokémon por tipo (fuego, agua, eléctrico, etc.).
- Visualizar tarjetas con información básica de cada Pokémon.
- Navegar a una vista detallada con estadísticas completas.
- Acceder solo si el nombre del entrenador está registrado en el estado global.

Este proyecto refuerza habilidades clave como:

- Manejo de estado global con `useContext` y `useReducer`.
- Ruteo dinámico y protegido con **React Router**.
- Renderizado condicional y validaciones personalizadas.
- Consumo de APIs externas con `axios`.
- Composición basada en componentes reutilizables.
- Diseño modular, responsivo y accesible.

## ⚛️Tecnologías usadas⚡

### Tecnologías principales

| Herramienta / Lenguaje | Uso principal |
|------------------------|---------------|
| **React**              | Construcción modular de componentes. |
| **Vite.js**            | Entorno rápido de desarrollo y bundling. |
| **JavaScript (ES6+)**  | Lógica de búsqueda, filtrado y navegación. |
| **TypeScript**         | Tipado estático y robustez en el desarrollo. |
| **CSS**                | Estilos personalizados y estructurados. |
| **HTML / JSX**         | Estructura declarativa de la app. |
| **Axios**              | Comunicación con la PokéAPI. |
| **React Icons**        | Íconos personalizables y semánticos. |
| **React Router**       | Navegación entre rutas públicas y protegidas.
| **ESLint + Plugins**   | Liting para calidad y consistencia del código. |

### APIs y funcionalidades externas

| Tecnología / API              | Funcionalidad |
|-------------------------------|---------------------------|
| **PokéAPI**                   | Datos sobre Pokémon, tipos, habilidades y movimientos. |
| **React Router**              | Navegación entre rutas públicas, protegidas y dinámicas. |
| **Custom Hook(usePagination)**| Encapsula lógica para la paginación en la Pokédex. |

### Lógica y estructura con React

- **`useState`**: Control de input, filtros y resultados.
- **`useEffect`**: Carga inicial, peticiones y sincronización.
- **`useContext`** + **`useReducer`**: Manejo de estado global del entrenador.
- **`useNavigate`**: Redirección entre rutas.
- **`useParams`**: Acceso a parámetros dinámicos en rutas de detalle.
- **Validaciones para entradas de texto.**
- **Componentes personalizados.**: `Details`, `Home`, `Hero`, `Item`, `List`, `Navbar`, `Pagination`, `Pokedex`.

### Experiencia del usuario

- Pantalla de bienvenida con input para ingresar nombre del entrenador.
- Redirección automática a la Pokédex tras ingresar el nombre.
- Saludo personalizado en la Pokédex.
- Filtro por tipo de Pokémon y búsqueda por nombre.
- Tarjetas visuales con imagen, nombre y tipo.
- Paginación que muestra un número limitado de Pokémon por vista.
- Vista detallada con información completa del Pokémon:
  - Nombre
  - Número de Pokédex
  - Peso y altura
  - Tipos y habilidades
  - Estadísticas base (HP, ataque, defensa, etc.)
  - Movimientos por nivel
- Diseño responsivo para escritorio y móvil.
- Navegación protegida: si no hay nombre de entrenador, se redirige a la raíz.
- Manejo responsivo de errores.

## 🗂️Estructura del proyecto

```bash
📁 POKEDEX/
├── 📁 node_modules/
├── 📁 public/
|    |___ 📁 images/
│         └── 45fa6410b95886197ed68b55d081d669.png
│         └── Pokeball-PNG-Image
├── 📁 src/
│   └── 📁 assets/
│   └── 📁 components/
│   |    └── Details.tsx
|   |    └── Hero.tsx
|   |    └── Home.tsx
|   |    └── Item.tsx
|   |    └── List.tsx
|   |    └── Navbar.tsx
|   |    └── Pagination.tsx
|   |    └── Pokedex.tsx
|   └── 📁 context/
|   |    └── nameContext.tsx
│   └── 📁 hooks/
|   |    └── usePagination.tsx
│   └── 📁 routes/
|   |    └── App.tsx
|   |    └── ProtectedRoute.tsx
│   └── 📁 styles/
│   |    └── Details.css
│   |    └── Hero.css
│   |    └── Home.css
│   |    └── Item.css
│   |    └── List.css
│   |    └── Navbar.css
│   |    └── Pagination.css
│   |    └── Pokedex.css
├── index.css
├── main.tsx
├── vite-env.d.ts
```

## 🧠Funcionalidades principales

- Pantalla de bienvenida con input para nombre del entrenador.
- Redirección automática a **`/pokedex`** si el nombre está registrado.
- Filtro por tipo de Pokémon.
- Búsqueda por nombre con validación.
- Paginación inteligente.
- Tarjetas con imagen, nombre y tipo.
- Vista detallada con:

    * *Nombre.*
    * *Número de Pokédex.*
    * *Peso y altura.*
    * *Tipos.*
    * *Habilidades.*
    * *Estadísticas base.*
    *  *Movimientos por nivel.*

- Rutas protegidas con validación de estado global.
- Componentes reutilizables y diseño modular.
- Manejo de errores.  
- Estilos CSS por componente y diseño responsivo.

## 🛠️Instalación local

1. Clona este repositorio:

```bash
git clone https://github.com/Clic-stack/Pokedex-.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el proyecto:

```bash
npm run dev
```

## 🎨Autor  
Desarrollado por Clio Salgado como parte del módulo de React en Academlo, con el objetivo de consolidar habilidades en typescript, desarrollo frontend, consumo de APIs, manejo de estado global y diseño modular.


