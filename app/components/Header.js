export function Header() {
  const $header = document.createElement('header');

  $header.classList.add('header');

  $header.innerHTML = `
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
        <div class="container-fluid">
            <a class="navbar-brand" href="#/">Inicio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                aria-controls="offcanvasNavbar2">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Opciones</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item"> <a class="nav-link " aria-current="page"
                                href="#/proyectos">Proyectos</a> </li>
                        <li class="nav-item"> <a class="nav-link " aria-current="page"
                                href="#/planilla">Planilla</a> </li>
                        <li class="nav-item"> <a class="nav-link " aria-current="page"
                                href="https://www.facebook.com/profile.php?id=100084051139965" target="_blank" rel="noopener">Facebook</a> </li>
                        <li class="nav-item"> <a class="nav-link " aria-current="page"
                                href="#/sugerencias">Sugerencias</a> </li>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    `;

  return $header;
}