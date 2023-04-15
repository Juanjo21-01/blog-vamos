export function ProyectoTarjeta(propiedades) {
  let { id, descripcion, fotografia, titulo } = propiedades;

  return `
  <div class="col">
          <div class="card shadow border-danger bg-transparent">
            <div class="card-header">
              <h2 class="letra text-primary-emphasis">No. ${id} - ${titulo}</h2>
              <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${fotografia}" role="img" aria-label="Placeholder">
            </div>
            <div class="card-body">
              <p class="card-text text-muted">${descripcion}</p>
             <!-- <div class="d-flex justify-content-between align-items-center">
                  <button type="button" class="btn btn-outline-secondary">Ver</button>
                <small class="text-body-secondary">9 mins</small> 
              </div> -->
            </div>
          </div>
        </div>    
    `;
}
