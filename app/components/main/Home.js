export function Home() {
  return `

  <!-- Titulo -->
  <h1 class="text-center p-3 text-danger letra fw-bold">VAMOS por un mejor San José El Rodeo</h1>

  <!-- Carousel de fotos -->
  <div id="myCarousel" class="carousel slide pointer-event" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
    </div>

    <div class="carousel-inner text-center">
      <div class="carousel-item active">
        <img class="bd-placeholder-img" width="70%" height="70%" src="app/assets/img/vota-asi.jpg" aria-hidden="true" focusable="false">
      </div>
      <div class="carousel-item">
        <img class="bd-placeholder-img" width="62.1%" height="62.1%" src="app/assets/img/planilla.jpg" aria-hidden="true"  focusable="false">
        <div class="container">
          <div class="carousel-caption align-items-end">
            <h3 class="d-none d-lg-inline-block">Conoce a nuestro equipo de trabajo</h3>
            <p><a class="btn btn-primary " href="#/planilla">Ver</a></p>

          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="bd-placeholder-img" width="92.9%" height="92.9%" src="app/assets/img/el-rodeo.jpg" aria-hidden="true" focusable="false">
        <div class="container">
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- Slogan -->
  <h2 class="text-center p-3 text-primary letra fw-bold shadow">SOY DE AQUÍ, <br>ESTOY AQUÍ <br>Y <br> TRABAJARÉ POR TÍ</h2>

  <!-- Ver Proyectos -->
  
  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-2 shadow h-md-250 position-relative">
  <h2 class="p-2 display-6 letra fw-bold">Conoce Nuestros Proyectos </h2>
        <div class="col p-4 d-flex flex-column text-danger">
          <p class="mb-2 text-center text-sm-center text-md-start h4">Educación</p>
          <p class="mb-2 text-center text-md-start h4">Salud</p>
          <p class="mb-2 text-center text-md-start h4">Infraestructura</p>
          <p class="mb-2 text-center text-md-start h4">Desarrollo Económico</p>
          <p class="mb-2 text-center text-md-start h4">Cultura y Deportes</p>
          <a href="#/proyectos" class="stretched-link"></a>
        </div>
        <div class="col-auto d-flex align-items-center p-2">
          <img class="mx-auto" width="100%" height="200" src="app/assets/img/el-rodeo.jpg">
        </div>
      </div>

  <!-- Video de presentacion -->
<div class=" w-100 my-md-2 ps-md-2 shadow pb-2  ">
    <div class=" me-md-3 pt-3 px-3 px-md-3 text-center overflow-hidden">
      <div class="my-2 py-1">
        <h2 class="display-5 letra fw-bold">Video de Presentación</h2>
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" style="width: 80%; height: 80%; border-radius: 21px;">
      
      <!-- <video src=""></video> -->
      <img class="bd-placeholder-img" width="100%" height="100%" style="border-radius: 21px;" src="app/assets/img/el-rodeo.jpg">
      </div>
    </div>
   
  </div>

  <!-- Valores -->
  <h2 class="p-2 display-6 letra fw-bold">Nuestros Valores </h2>
  <div class="row border g-0 rounded mb-4 shadow text-center" >
    <div class="col-6">
      <ul class="list-group ">
        <li class="list-group-item bg-transparent border-danger-subtle">Humildad</li>
        <li class="list-group-item bg-transparent border-danger-subtle">Honradez</li>
        <li class="list-group-item bg-transparent border-danger-subtle">Solidaridad</li>
        <li class="list-group-item bg-transparent border-danger-subtle">Tolerancia</li>
        <li class="list-group-item bg-transparent border-danger-subtle">Justicia</li>
        <li class="list-group-item bg-transparent border-danger-subtle">Igualdad</li>
        <li class="list-group-item bg-transparent border-danger-subtle">Gratitud</li>
        <li class="list-group-item bg-transparent border-danger-subtle">Compañerismo</li>
      </ul>
    </div>
    <div class="col-6 ">
     <ul class="list-group">
        <li class="list-group-item bg-transparent border-primary-subtle">Honestidad</li>
        <li class="list-group-item bg-transparent border-primary-subtle">Responsabilidad</li>
        <li class="list-group-item bg-transparent border-primary-subtle">Respeto</li>
        <li class="list-group-item bg-transparent border-primary-subtle">Perseverancia</li>
        <li class="list-group-item bg-transparent border-primary-subtle">Equidad</li>
        <li class="list-group-item bg-transparent border-primary-subtle">Lealtad</li>
        <li class="list-group-item bg-transparent border-primary-subtle">Fraternidad</li>
        <li class="list-group-item bg-transparent border-primary-subtle">Prudencia</li>
      </ul>
    </div>
  </div>
    `;
}
