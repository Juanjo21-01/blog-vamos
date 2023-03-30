export async function Router() {
  const d = document,
    $main = d.getElementById('main');

  let { hash } = location;
  console.log(hash);

    $main.innerHTML = null;

  if (!hash || hash === '#/') {
    $main.innerHTML = `<h2>Contenido del Inicio </h2>`;

    console.log('inicio');
  } else if ( hash === '#/proyectos') {
    $main.innerHTML = `<h2>Contenido de los Proyectos </h2>`;
  } else if ( hash === '#/planilla') {
    $main.innerHTML = `<h2>Contenido de la Planilla </h2>`;
  } else if ( hash === '#/sugerencias') {
    $main.innerHTML = `<h2>Contenido de las Sugerencias </h2>`;
  } else {
    $main.innerHTML = `<h2>Informacion de los Posts </h2>`;
  }
}
