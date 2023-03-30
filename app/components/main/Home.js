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
      <div class="carousel-item">
        <img class="bd-placeholder-img" width="70%" height="70%" src="app/assets/img/vota-asi.jpg" aria-hidden="true" focusable="false">
      </div>
      <div class="carousel-item">
        <img class="bd-placeholder-img" width="62.1%" height="62.1%" src="app/assets/img/planilla.jpg" aria-hidden="true"  focusable="false">
        <div class="container">
          <div class="carousel-caption">
            <h3>Conoce a nuestro equipo de trabajo</h3>
            <p><a class="btn btn-lg btn-primary" href="#/planilla">Ver</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
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
  <h2 class="text-center p-3 text-primary letra fw-bold">SOY DE AQUÍ, <br>ESTOY AQUÍ <br>Y <br> TRABAJARÉ POR TÍ</h2>

  <!-- Ver Proyectos -->

  
  <!-- Video de presentacion -->


  <!-- Valores -->


    `;
}
