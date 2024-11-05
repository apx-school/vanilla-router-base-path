// Tipo para las rutas, cada ruta tiene un regex para el path y una función render que devuelve un elemento HTML.
type RouterPath = {
  pathRegex: RegExp;
  render: (params: { goTo: (path: string) => void }) => HTMLElement;
};

// Definición de rutas, con tres rutas de ejemplo.
const routes: RouterPath[] = [
  {
    pathRegex: /^\/$/,
    render: ({ goTo }) => {
      const div = document.createElement("div");
      div.innerHTML = `<h1>Homepage</h1><button>Ir al login</button>`;
      div.addEventListener("click", () => goTo("/login"));
      return div;
    },
  },
  {
    pathRegex: /^\/login$/,
    render: () => {
      const div = document.createElement("div");
      div.innerHTML = `<h1>Login</h1><button>Ir al perfíl</button>`;
      div.addEventListener("click", () => goTo("/perfil"));
      return div;
    },
  },
  {
    pathRegex: /^\/perfil$/,
    render: () => {
      const div = document.createElement("div");
      div.innerHTML = `<h1>Perfil</h1><button>Ir a la Home</button>`;
      div.addEventListener("click", () => goTo("/"));
      return div;
    },
  },
];

// Función para renderizar el contenido en base al path actual.

function goTo(path: string) {
  window.history.pushState({}, "", path);
  renderPath(path);
}
function renderPath(path: string): void {
  const route = routes.find((route) => route.pathRegex.test(path));

  if (route) {
    // Limpiar el contenido actual y montar el nuevo elemento.
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = ""; // Limpiar contenido previo
      app.appendChild(route.render({ goTo }));
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
