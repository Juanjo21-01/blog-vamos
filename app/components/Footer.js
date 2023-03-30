export function Footer() {
  const $footer = document.createElement('footer');

  $footer.innerHTML = `
  <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li><a href="#/" class="nav-link px-2 text-muted">Inicio</a></li>
        <li><a href="#/proyectos" class="nav-link px-2 text-muted">Proyectos</a></li>
        <li><a href="#/planilla" class="nav-link px-2 text-muted">Planilla</a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100084051139965" target="_blank" rel="noopener" class="nav-link px-2 text-muted">Facebook</a></li>
        <li><a href="#/sugerencias" class="nav-link px-2 text-muted">Proveedores</a></li>
    </ul>
    <p class="text-center text-muted">VAMOS por un mejor San José El Rodeo &copy;.
    <br>   
    Todos los derechos reservados 2023
    </p>
    `;

  return $footer;
}
