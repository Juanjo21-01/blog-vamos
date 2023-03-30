export async function ajax(parametros) {
  let { url, cbSuccess } = parametros;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message =
        err.statusText || 'Ocurrio un Error al acceder a la INFORMACION';
      document.getElementById('main').innerHTML = `
        <div class="error">
            <p>Error ${err.status}: ${message}</p>
        </div>`;
      // document.querySelector('.loader').style.display = 'none';
      console.log(err);
    });
}
