# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Grupo 4 de desarrolladores para La Placita

Sitio web desarrollado para **La Placita**, con el objetivo de ofrecer una experiencia moderna, accesible y adaptable a dispositivos móviles, permitiendo consultar el menú y contactar fácilmente con el restaurante.

El proyecto fue desarrollado utilizando **React + Vite**, organizando la aplicación mediante componentes reutilizables y separando los estilos según su función.

Además, el sitio permite cargar los productos del menú desde un archivo externo (`menu.json`), filtrarlos por categoría y enviar mensajes mediante un formulario de contacto conectado con **EmailJS**.

---

## Cómo correrlo

Para ejecutar el proyecto necesitás tener instalado **Node.js**.

Primero, descargá o cloná el proyecto y entrá a la carpeta:

```bash
git clone <enlace-del-repositorio>
cd placita
```

Después, instalá las dependencias:

```bash
npm install
```

Finalmente, iniciá el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173/
```

Abrí esa dirección en el navegador para visualizar el sitio.

---

## Cómo está armado

El proyecto está organizado de la siguiente manera:

```text
placita/
│
├── docs/
│
├── public/
│   ├── img/
│   └── menu.json
│
├── src/
│   ├── components/
│   │   ├── categoryFilter.jsx
│   │   ├── contactForm.jsx
│   │   └── menuCard.jsx
│   │
│   ├── sections/
│   │   ├── about.jsx
│   │   ├── footer.jsx
│   │   ├── header.jsx
│   │   ├── hero.jsx
│   │   ├── menu.jsx
│   │
│   ├── styles/
│   │   ├── ally.css
│   │   ├── menu.css
│   │   ├── responsive.css
│   │   └── theme.css
│   │
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

### Componentes principales

| Archivo              | Función                                                           |
| -------------------- | ----------------------------------------------------------------- |
| `menuCard.jsx`       | Representación de cada producto individual del menú.              |
| `categoryFilter.jsx` | Filtrado de productos por categoría.                              |
| `contactForm.jsx`    | Formulario de contacto y sus validaciones.                        |

---

## Menú desde un archivo externo

Uno de los requisitos principales de Don Chente era poder modificar el menú sin tener que cambiar directamente el código de los componentes.

Por eso, los productos se encuentran en:

```text
public/menu.json
```

La aplicación obtiene la información de este archivo y posteriormente la utiliza para mostrar las tarjetas del menú.

Esto permite modificar los productos del menú desde el archivo de datos sin tener que modificar la estructura de las tarjetas.

### Categorías disponibles

Actualmente el menú cuenta con las siguientes categorías:

* **Todos**
* **Desayunos**
* **Almuerzos**
* **Cenas**
* **Postres**
* **Bebidas**

---

## Filtro por categorías

El menú permite mostrar solamente los productos que pertenecen a una categoría determinada.

Cuando el usuario selecciona una categoría, la aplicación actualiza los productos mostrados para presentar únicamente los que pertenecen a esa categoría.

El filtrado se maneja dentro de React mediante el estado del componente.

Por ejemplo:

* Seleccionar **Desayunos** muestra únicamente los desayunos.
* Seleccionar **Almuerzos** muestra únicamente los almuerzos.
* Seleccionar **Cenas** muestra únicamente las cenas.
* Seleccionar **Postres** muestra únicamente los postres.
* Seleccionar **Bebidas** muestra únicamente las bebidas.
* Seleccionar **Todos** muestra nuevamente todos los productos.

---

## Estados de carga y error

Para evitar que la página aparezca vacía o rota mientras se obtiene la información del menú, se manejan diferentes estados durante la carga de los datos.

Se contemplan tres situaciones principales:

* **Carga:** mientras se obtiene la información del menú.
* **Éxito:** cuando los productos se cargan correctamente.
* **Error:** cuando ocurre algún problema al obtener los datos.

Esto permite proporcionar información al usuario durante la carga y mostrar un mensaje adecuado si ocurre algún problema.

---

## Formulario de contacto

El sitio cuenta con un formulario para que los usuarios puedan comunicarse con La Placita.

El formulario solicita:

* **Nombre**
* **Correo electrónico**
* **Mensaje**

Antes de enviar el formulario se realizan validaciones en el cliente.

### Validaciones

El nombre es obligatorio. Si el campo está vacío, el formulario no puede enviarse.

El correo electrónico también es obligatorio y debe tener una estructura válida, por ejemplo:

```text
nombre@ejemplo.com
```

El mensaje también es obligatorio y debe cumplir con un mínimo de **15 caracteres**, evitando mensajes demasiado cortos o vacíos.

Si alguna validación falla, se muestra un mensaje de error y el formulario no se envía.

---

## Conexión con EmailJS

Para permitir que los mensajes lleguen directamente al correo configurado para La Placita se utilizó **EmailJS**.

La conexión permite enviar los datos del formulario después de que estos hayan pasado las validaciones correspondientes.

Los datos enviados son:

* Nombre
* Correo electrónico
* Mensaje

Estos datos son recibidos por la plantilla configurada en EmailJS y enviados al correo correspondiente.

De esta manera, no es necesario crear un servidor propio solamente para procesar el formulario.

> **Nota:** Las credenciales, claves privadas o identificadores sensibles utilizados para configurar el servicio no deben colocarse directamente en este README ni compartirse públicamente.

---

## Diseño responsive

El sitio fue desarrollado pensando especialmente en el uso desde dispositivos móviles, debido a que una de las principales necesidades del cliente era mejorar la experiencia en celular.

Se utilizaron:

* **Flexbox**
* **CSS Grid**
* **Media queries**
* **Unidades y tamaños adaptables**

Los estilos responsive se encuentran principalmente en:

```text
src/styles/responsive.css
```

El diseño se adapta a diferentes tamaños de pantalla para evitar que los textos, imágenes, botones y tarjetas se salgan de sus contenedores.

---

## Diseño visual

El diseño busca transmitir una imagen más seria, agradable y relacionada con la identidad de un restaurante.

Se trabajó con:

* Jerarquía visual.
* Tipografía.
* Colores de marca.
* Espaciado.
* Tarjetas para los productos.
* Botones y elementos interactivos.
* Distribución visual de las diferentes secciones.

Los colores principales del proyecto se encuentran definidos mediante variables CSS para mantener una identidad visual consistente.


---

## Temas de visualización

El proyecto cuenta con diferentes opciones de visualización para mejorar la experiencia de los usuarios.

Actualmente se encuentran implementados:

* ☀️ **Modo claro**
* 🌙 **Modo oscuro**
* ◐ **Alto contraste**

Los estilos relacionados con los temas se encuentran en:

```text
src/styles/theme.css
```

Esto permite modificar la apariencia general del sitio sin tener que cambiar individualmente los estilos de cada componente.

---

# Requisitos implementados

El proyecto se desarrolló tomando como base las necesidades planteadas por Don Chente.
*  Adaptable a dispositivos móviles.
*  Accesible.
*  Fácil de mantener.
*  Fácil de explorar.
*  Sencillo para recibir mensajes.
*  Visualmente coherente con La Placita.
*  Adaptable mediante diferentes temas de visualización.

#  Tecnologías utilizadas

| Tecnología / herramienta | Uso                                                 |
| ------------------------ | --------------------------------------------------- |
| **React**                | Desarrollo de la interfaz mediante componentes.     |
| **JavaScript**           | Lógica e interacción de la aplicación.              |
| **Vite**                 | Servidor de desarrollo y construcción del proyecto. |
| **HTML**                 | Estructura semántica del sitio.                     |
| **CSS**                  | Diseño y estilos.                                   |
| **EmailJS**              | Envío de mensajes del formulario.                   |
| **Git**                  | Control de versiones.                               |
| **GitHub**               | Almacenamiento y colaboración del proyecto.         |

---

El proyecto busca que la experiencia sea sencilla tanto para los visitantes del restaurante como para la persona encargada de mantener la información del sitio.
