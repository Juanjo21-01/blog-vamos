import api from '../helpers/api.js';
import { ajax } from '../helpers/ajax.js';
import { Home } from './main/Home.js';
import { ProyectoTarjeta } from './main/ProyectoTarjeta.js';
import { PlanillaTarjeta } from './main/PlanillaTarjeta.js';
import { Posts } from './main/Posts.js';

export async function Router() {
  const $main = document.getElementById('main');
  let { hash } = location;

  $main.innerHTML = null;

  if (!hash || hash === '#/') {
    $main.innerHTML = Home();
  } else if (hash === '#/proyectos') {
    // loca
    await ajax({
      url: api.PROYECTOS,
      cbSuccess: (posts) => {
        let edu = '',
          sa = '',
          inf = '',
          des = '',
          cul = '';
        posts.educacion.forEach((post) => (edu += ProyectoTarjeta(post)));
        posts.salud.forEach((post) => (sa += ProyectoTarjeta(post)));
        posts.infraestructura.forEach((post) => (inf += ProyectoTarjeta(post)));
        posts.desarrollo.forEach((post) => (des += ProyectoTarjeta(post)));
        posts.cultura.forEach((post) => (cul += ProyectoTarjeta(post)));

        let container = `
        <div class="container p-3 text-center">
          <h1 class="letra fw-bold m-2">Proyectos para Nuestro Pueblo</h1>
          <h2 class="letra fw-bold m-3">Educación</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 align-items-center justify-content-around">
            ${edu}
          </div>
          <h2 class="letra fw-bold m-3">Salud</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-around">
            ${sa}
          </div>
          <h2 class="letra fw-bold m-3">Infraestructura</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 align-items-center justify-content-around">
            ${inf}
          </div>
           <h2 class="letra fw-bold m-3">Desarrollo Económico</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 align-items-center justify-content-around">
            ${des}
          </div>
           <h2 class="letra fw-bold m-3">Cultura y Deportes</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-around">
            ${cul}
          </div>
        </div>
        `;
        $main.innerHTML = container;
      },
    });
  } else if (hash === '#/planilla') {
    await ajax({
      url: api.PLANILLA,
      cbSuccess: (posts) => {
        let html = '';
        posts.forEach((post) => (html += PlanillaTarjeta(post)));
        let container = `
        <div class="container marketing">
          <div class="row p-3 text-center justify-content-around">
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
