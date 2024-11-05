# Ejercicio: Router Base Path

## Problema

Este ejercicio se enfoca en resolver un problema que surge al desplegar aplicaciones en GitHub Pages. Cuando el router se utiliza en un entorno local, las rutas definidas funcionan correctamente, ya que la base de la URL es simplemente la raíz (/). Sin embargo, al desplegar en GitHub Pages, la URL de la aplicación incluye un directorio adicional como base. Esto ocurre porque GitHub Pages organiza las páginas alojadas dentro de un subdirectorio cuyo nombre es el del repositorio (por ejemplo, https://usuario.github.io/nombre-repositorio/).

Debido a este subdirectorio, el router no puede reconocer correctamente las rutas, ya que los paths comienzan con el nombre del repositorio, lo cual no estaba considerado en el desarrollo original. Por ejemplo, si se define una ruta /pageA, en GitHub Pages esta ruta se convierte en /nombre-repositorio/pageA, y el router falla al no encontrar coincidencia con el path esperado.

## Objetivo

El objetivo es modificar el router para que sea compatible con GitHub Pages. Esto implica ajustar la lógica de coincidencia de rutas para que pueda interpretar el subdirectorio base y así reconocer las rutas correctas en ambos entornos: local y GitHub Pages.
