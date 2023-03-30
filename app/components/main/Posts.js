export function Posts(propiedades) {
  let { biografia, edad, fotografia, nombre, puesto } = propiedades;

  return `
   <section class="container p-3">

        <h1 class="text-center letra fw-bold ">${puesto}</h1>

        <div class="row py-2">
            <div class="col-12">

                <!-- Información -->
                <div class="card shadow border-primary">
                    <div class="card-body border-bottom shadow">
                        <div class="row">
                            <!-- Nombre -->
                            <div class="card-header shadow col-lg-4">
                                <div class="border-bottom text-center pb-3 letra">
                                    <h3>${nombre}</h3>
                                    <div class="card-img shadow">
                                        <img src="${fotografia}"
                                            class=" img-fluid img-thumbnail mx-auto d-block rounded" alt="">
                                    </div>

                                </div>
                                <!-- Datos -->
                                <div class="py-2">
                                    <span class="d-flex flex-row justify-content-between">
                                        <h4>Edad:</h4>
                                        <h6 class="p-2 text-muted text-center">
                                           ${edad}
                                        </h6>
                                    </span>
                                    
                                </div>
                            </div>

                            <!-- Contenido -->
                            <div class="card shadow col-lg-8 p-2">
                                <h4 class="text-center border-bottom pb-2">Hoja de Vida</h4>
                                <div class="card-body shadow row g-1 ">
                                    <div class="col-12">
                                        <div class="input-group py-1">
                                            <textarea class="form-control " disabled> ${biografia}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer shadow ">
                        <a href="#/planilla" class=" text-light btn btn-primary btn-outline-danger border-0">
                             Regresar</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}
