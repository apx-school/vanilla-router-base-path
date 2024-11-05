// Tipo para las rutas, cada ruta tiene un regex para el path y una función render que devuelve un elemento HTML.
type RouterPath = {
  pathRegex: RegExp;
  render: () => HTMLElement;
};

// Definición de rutas, con tres rutas de ejemplo.
const routes: RouterPath[] = [
  {
    pathRegex: /^\/$/,
    render: () => {
      const div = document.createElement("div");
      div.innerHTML = `<h1>Homepage</h1><a href="/login">Ir al login</a>`;
      return div;
    },
  },
  {
    pathRegex: /^\/login$/,
    render: () => {
      const div = document.createElement("div");
      div.innerHTML = `<h1>Login</h1><a href="/perfil">Ir al perfíl</a>`;
      return div;
    },
  },
  {
    pathRegex: /^\/perfil$/,
    render: () => {
      const div = document.createElement("div");
      div.innerHTML = `<h1>Perfil</h1><a href="/">Ir a la Home</a>`;
      return div;
    },
  },
];

// Función para renderizar el contenido en base al path actual.
function renderPath(path: string): void {
  const route = routes.find((route) => route.pathRegex.test(path));

  if (route) {
    // Limpiar el contenido actual y montar el nuevo elemento.
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = ""; // Limpiar contenido previo
      app.appendChild(route.render());
    }
  } else {
    console.warn(`El path '${path}' no fue encontrado.`);
  }
}

// Inicializa el router, montando la ruta inicial y escuchando cambios en la URL.
export function initRouter(): void {
  const initialPath = window.location.pathname;

  // Llama a renderPath con la ruta inicial.
  renderPath(initialPath);

  // Escucha cambios en el estado de la URL.
  window.addEventListener("popstate", () => {
    renderPath(window.location.pathname);
  });
}
