export function Footer() {
  const $footer = document.createElement('footer');

  $footer.innerHTML = `
  <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li><a href="#/" class="p-2 m-1 text-light btn btn-outline-danger btn-primary  border-0">Inicio</a></li>
        <li><a href="#/proyectos" class=" p-2 m-1 text-light btn btn-outline-danger btn-primary border-0" >Proyectos</a></li>
        <li><a href="#/planilla" class="p-2 m-1 text-light btn btn-outline-danger btn-primary border-0">Planilla</a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100084051139965" target="_blank" rel="noopener" class="p-2 m-1 text-light btn btn-outline-danger btn-primary border-0">Facebook</a></li>
        <li><a href="#/sugerencias" class="p-2 m-1 text-light btn btn-outline-danger btn-primary border-0">Sugerencias</a></li>
    </ul>
    <p class="text-center text-danger">100% RODEENSES &copy;.
    <br>
    <a class=" text-primary" href="https://github.com/Juanjo21-01" target="_blank" rel="noopener">Desarrollado por: Juan José López</a> 
    <br>   
    Todos los derechos reservados 2023.
    </p>
    `;

  return $footer;
}
