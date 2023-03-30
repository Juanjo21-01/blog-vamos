export function Main() {
  const $main = document.createElement('main');

  $main.id = 'main';

  // $main.classList.add('bg-danger');
  $main.innerHTML = `
  <h1>Hola</h1>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>`;
  return $main;
}
