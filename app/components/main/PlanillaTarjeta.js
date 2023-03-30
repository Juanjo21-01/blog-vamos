export function PlanillaTarjeta(propiedades) {
  let { id, fotografia, nombre, puesto } = propiedades;

  document.addEventListener('click', (e) => {
    if (!e.target.matches('.container a')) return false;

    localStorage.setItem('postId', e.target.dataset.id);
  });

  return `
  <div class="col-lg-4 col-md-6">
        <img class="rounded-circle" width="140" height="140" src="${fotografia}" role="img" aria-label="Placeholder">
        <h2 class="fw-normal">${puesto}</h2>
        <p>${nombre}</p>
        <p><a class="btn btn-danger btn-outline-primary border-0 text-light" href="#${id}" data-id=${id}>Ver más información » </a></p>
      </div>
  
    `;
}
