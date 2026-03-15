# Pokédex Fake

Mini aplicación web desarrollada con **HTML, CSS y JavaScript** que consume la **PokéAPI** para buscar Pokémon por nombre y mostrar un listado dinámico paginado de Pokémon en tarjetas.

## Demo

[![Ver proyecto](https://img.shields.io/badge/Ver%20proyecto-GitHub%20Pages-2ea44f?style=for-the-badge)](https://202601-ingenieria-web.github.io/taller-html-BrayanStiven-GomezVilla/pages/search-pokemon.html)



## Propósito del proyecto

El objetivo de este proyecto es aplicar de forma práctica los conocimientos de **HTML, CSS y JavaScript**, consumiendo una **API pública** para construir una aplicación web interactiva. En este caso se utilizó **PokéAPI** como fuente de datos.

Además de cumplir con los requerimientos funcionales del taller, el proyecto fue organizado con una estructura modular para mejorar la **mantenibilidad**, la **reutilización de código** y la **separación de responsabilidades**.

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
- Paginación de **32 Pokémon por página**.
- Manejo de errores mediante notificaciones tipo toast.
- Diseño responsive para diferentes tamaños de pantalla.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- PokéAPI

## Enfoque de diseño y arquitectura

Para facilitar el desarrollo y hacer el proyecto más ordenado, la aplicación fue dividida en módulos con responsabilidades específicas.

### Separación por componentes

La interfaz se construyó con componentes reutilizables como:

- `header`
- `toast`
- `pokemon-card`
- `pokemon-modal`

Cada componente tiene su propio archivo **HTML**, **CSS** y **JavaScript**, lo que permite reutilizarlo en distintas páginas y mantener el código más limpio.

### Separación por capas

La lógica del proyecto se dividió en varias capas:

- **API**: se encarga de hacer las peticiones directas a PokéAPI.
- **Services**: procesa la información obtenida y coordina llamadas más complejas.
- **Models**: transforman la respuesta de la API en objetos más simples y listos para usar en la interfaz.
- **Controllers**: conectan la interfaz con la lógica del sistema.
- **Components**: encapsulan partes reutilizables de la interfaz.

Este enfoque permite que cada archivo tenga una responsabilidad clara y hace más fácil escalar o modificar la aplicación.

### Carga dinámica de componentes

Algunos componentes de interfaz como el header, el modal, el toast y el template de las tarjetas se cargan dinámicamente desde archivos HTML. Esto evita repetir estructura en varias páginas y favorece la reutilización.

## 📁 Estructura del proyecto

```bash
taller-html-brayanstiven-.../
│
├── 📁 components/
│   ├── 📁 header/
│   │   ├── header.css
│   │   ├── header.html
│   │   └── header.js
│   │
│   ├── 📁 modal/
│   │   ├── pokemon-modal.css
│   │   ├── pokemon-modal.html
│   │   └── pokemon-modal.js
│   │
│   ├── 📁 pokemon-card/
│   │   ├── pokemon-card.css
│   │   ├── pokemon-card.html
│   │   └── pokemon-card.js
│   │
│   └── 📁 toast/
│       ├── toast.css
│       ├── toast.html
│       └── toast.js
│
├── 📁 css/
│   └── 📁 page/
│       ├── search-pokemon.css
│       └── pokemon-list.css
│
├── 📁 js/
│   ├── 📁 api/
│   │   ├── get-pokemon-api.js
│   │   ├── get-pokemon-evolution-api.js
│   │   └── get-pokemon-list-api.js
│   │
│   ├── 📁 controllers/
│   │   ├── get-pokemon-page.controller.js
│   │   └── pokemon-list.controller.js
│   │
│   ├── 📁 services/
│   │   ├── get-pokemon.service.js
│   │   ├── get-pokemon-evolution.service.js
│   │   └── get-pokemon-list.service.js
│   │
│   └── 📁 utils/
│       └── get-base.url.js
│
├── 📁 models/
│   ├── pokemon.model.js
│   └── pokemon-evolution.model.js
│
├── 📁 pages/
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

Modelos que estructuran y simplifican la información obtenida desde la API para su uso dentro de la aplicación.

### `pages/`

Páginas principales del proyecto:

- `search-pokemon.html`: búsqueda individual de Pokémon.
- `pokemon-list.html`: listado paginado de Pokémon.

## Flujo general de funcionamiento

De forma general, la aplicación sigue este flujo:

1. El usuario interactúa con una página.
2. El controlador captura el evento de la interfaz.
3. El controlador llama a un servicio.
4. El servicio consulta la API correspondiente.
5. La respuesta se transforma mediante un modelo cuando es necesario.
6. Finalmente, la información se renderiza en pantalla usando componentes o elementos del DOM.

Este flujo ayuda a mantener separada la lógica de presentación de la lógica de obtención y transformación de datos.

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
- Carga dinámica de componentes HTML.
- Estructura modular orientada a reutilización y mantenimiento.

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
