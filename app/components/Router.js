import api from '../helpers/api.js';
import { ajax } from '../helpers/ajax.js';
import { PlanillaTarjeta } from './main/PlanillaTarjeta.js';
import { Posts } from './main/Posts.js';
import { Home } from './main/Home.js';
export async function Router() {
  const d = document,
    $main = d.getElementById('main');

  let { hash } = location;
  // console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === '#/') {
    $main.innerHTML = Home();
  } else if (hash === '#/proyectos') {
    $main.innerHTML = `<h2>Contenido de los Proyectos </h2>`;
  } else if (hash === '#/planilla') {
    await ajax({
      url: api.PLANILLA,
      cbSuccess: (posts) => {
        let html = '';
        // console.log(posts);
        posts.forEach((post) => (html += PlanillaTarjeta(post)));
        let container = `
        <div class="container marketing">
          <div class="row p-3 text-center">
          <h1 class="letra fw-bold m-2">Nuestros Integrantes de la Planilla</h1>
            ${html}
          </div>
        </div>
        `;
        $main.innerHTML = container;
      },
    });
  } else if (hash === '#/sugerencias') {
    $main.innerHTML = `<h2>Contenido de las Sugerencias </h2>`;
  } else {
    $main.innerHTML = `<h2>Informacion de los Posts </h2>`;
    await ajax({
      url: api.PLANILLA,
      cbSuccess: (post) => {
        let postId = localStorage.getItem('postId');
        post.forEach((el) => {
          if (el.id != postId) {
            return false;
          } else if (el.id == postId) {
            $main.innerHTML = Posts(post[el.id - 1]);
          }
        });
      },
    });
  }
}
