# Pokédex Fake

Mini aplicación web desarrollada con **HTML, CSS y JavaScript** que consume la **PokéAPI** para buscar Pokémon por nombre y mostrar un listado dinámico paginado de Pokémon en tarjetas.

## Propósito del proyecto

El objetivo de este proyecto es aplicar de forma práctica los conocimientos de **HTML, CSS y JavaScript**, consumiendo una **API pública** para construir una aplicación web interactiva. En este caso se utilizó **PokéAPI** como fuente de datos.

## Funcionalidades principales

- Búsqueda de Pokémon por nombre.
- Botón para ejecutar la búsqueda.
- Visualización de resultados con:
  - imagen
  - nombre
  - tipo
  - altura
  - habilidades
- Modal de detalle del Pokémon.
- Visualización de evoluciones dentro del modal.
- Listado dinámico de Pokémon en tarjetas.
- Paginación de 30 Pokémon por página.
- Manejo de errores mediante notificaciones tipo toast.
- Diseño responsive para diferentes tamaños de pantalla.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- PokéAPI

## Estructura del proyecto

```bash
taller-html-brayanstiven-.../
│
├── components/
│   ├── header/
│   │   ├── header.css
│   │   ├── header.html
│   │   └── header.js
│   │
│   ├── modal/
│   │   ├── pokemon-modal.css
│   │   ├── pokemon-modal.html
│   │   └── pokemon-modal.js
│   │
│   ├── pokemon-card/
│   │   ├── pokemon-card.css
│   │   ├── pokemon-card.html
│   │   └── pokemon-card.js
│   │
│   └── toast/
│       ├── toast.css
│       ├── toast.html
│       └── toast.js
│
├── css/
│   └── page/
│       ├── search-pokemon.css
│       └── pokemon-list.css
│
├── js/
│   ├── api/
│   │   ├── get-pokemon-api.js
│   │   ├── get-pokemon-evolution-api.js
│   │   └── get-pokemon-list-api.js
│   │
│   ├── controllers/
│   │   ├── get-pokemon-page.controller.js
│   │   └── pokemon-list.controller.js
│   │
│   ├── services/
│   │   ├── get-pokemon.service.js
│   │   ├── get-pokemon-evolution.service.js
│   │   └── get-pokemon-list.service.js
│   │
│   └── utils/
│       └── get-base.url.js
│
├── models/
│   ├── pokemon.model.js
│   └── pokemon-evolution.model.js
│
├── pages/
│   ├── search-pokemon.html
│   └── pokemon-list.html
│
├── index.html
└── README.md
```

## Explicación de la estructura

### `components/`
Contiene componentes reutilizables de la interfaz:

- **header/**: barra de navegación principal.
- **modal/**: modal para mostrar el detalle del Pokémon y sus evoluciones.
- **pokemon-card/**: componente de tarjeta para el listado de Pokémon.
- **toast/**: notificaciones visuales de éxito o error.

### `css/page/`
Contiene los estilos específicos de cada página:

- `search-pokemon.css`: estilos de la página de búsqueda.
- `pokemon-list.css`: estilos de la página de listado.

### `js/api/`
Contiene los archivos encargados de hacer las peticiones directas a la API.

### `js/controllers/`
Contiene la lógica que conecta la interfaz con los servicios y componentes.

### `js/services/`
Contiene la lógica de negocio y transformación de datos antes de mostrarlos en pantalla.

### `js/utils/`
Funciones auxiliares del proyecto, como la URL base de la API.

### `models/`
Modelos que estructuran la información obtenida desde la API.

### `pages/`
Páginas principales del proyecto:

- `search-pokemon.html`: búsqueda individual de Pokémon.
- `pokemon-list.html`: listado paginado de Pokémon.

## Cómo ejecutar el proyecto

Como el proyecto usa módulos de JavaScript y carga componentes HTML de forma dinámica, se recomienda ejecutarlo con un servidor local.

### Opción 1: Live Server en VS Code
1. Abrir la carpeta del proyecto en VS Code.
2. Instalar la extensión **Live Server**.
3. Hacer clic derecho sobre `index.html`.
4. Seleccionar **Open with Live Server**.

### Opción 2: servidor local con Python
Desde la raíz del proyecto ejecutar:

```bash
python -m http.server 5500
```

Luego abrir en el navegador:

```bash
http://localhost:5500
```

## Navegación de la aplicación

La aplicación cuenta con dos secciones principales:

- **Buscar Pokémon**: permite consultar un Pokémon por nombre.
- **Listado de Pokémon**: muestra tarjetas paginadas con Pokémon obtenidos desde la API.

## Características adicionales implementadas

Además de los requisitos básicos del taller, se añadieron las siguientes mejoras:

- Modal con información ampliada.
- Visualización de evoluciones del Pokémon.
- Header reutilizable.
- Componente de tarjetas reutilizable.
- Notificaciones toast para retroalimentación visual al usuario.

## API utilizada

- **PokéAPI**: API pública utilizada para obtener la información de los Pokémon.

## Cómo clonar y ejecutar el proyecto

### Clonar el repositorio

Ejecuta el siguiente comando en tu terminal:

```bash
git clone https://github.com/202601-Ingenieria-Web/taller-html-BrayanStiven-GomezVilla.git
```

Luego entra a la carpeta del proyecto:

```bash
cd taller-html-BrayanStiven-GomezVilla
```

### Ejecutar el proyecto

Como el proyecto utiliza módulos de JavaScript y carga componentes HTML dinámicamente, se recomienda ejecutarlo con un servidor local.

#### Opción 1: Live Server en Visual Studio Code
1. Abre la carpeta del proyecto en Visual Studio Code.
2. Instala la extensión **Live Server**.
3. Haz clic derecho sobre el archivo `index.html`.
4. Selecciona **Open with Live Server**.

#### Opción 2: Servidor local con Python
Desde la raíz del proyecto ejecuta:

```bash
python -m http.server 5500
```

Luego abre en el navegador:

```bash
http://localhost:5500
```

## Créditos

Proyecto desarrollado por **Brayan Stiven Gómez Villa**.
