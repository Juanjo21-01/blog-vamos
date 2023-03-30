import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Footer } from './components/Footer.js';
import { Router } from './components/Router.js';

export function App() {
  const $root = document.getElementById('root');

  // Llamamos a los componentes

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Footer());
  //   $root.appendChild(Loader());
  console.log();
  //
  Router();

  //

  fetch('app/helpers/planilla.json')
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => console.log(json))
    .catch((err) => {
      let message =
        err.statusText || 'Ocurrio un Error al acceder a la INFORMACION';
      document.getElementById('main').innerHTML = `
        <div class="error">
            <p>Error ${err.status}: ${message}</p>
        </div>`;
      document.querySelector('.loader').style.display = 'none';
      console.log(err);
    });
}
