export function Header() {
  const $header = document.createElement('header');

  $header.classList.add('header');

  $header.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand btn btn-outline-primary btn-danger border-0" href="#/">Inicio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 text-center">
        <li class="nav-item">
          <a class="text-light btn btn-outline-danger btn-primary border-0 mx-1 mt-1" aria-current="page"
                                href="#/proyectos">Proyectos</a> </li>
        </li>
        <li class="nav-item">
          <a class="text-light btn btn-outline-danger btn-primary border-0 mx-1 mt-1" aria-current="page"
                                href="#/planilla">Planilla</a> </li>
        </li>
        <li class="nav-item">
          <a class="text-light btn btn-outline-danger btn-primary border-0 mx-1 mt-1" aria-current="page"
                                href="https://www.facebook.com/profile.php?id=100084051139965" target="_blank" rel="noopener">Facebook</a>
        </li>
        <li class="nav-item">
          <a class="text-light btn btn-outline-danger btn-primary border-0 mx-1 mt-1" aria-current="page"
                                href="#/sugerencias">Sugerencias</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    `;

  return $header;
}
