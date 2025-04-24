function cargarContenido(seccion) {
  fetch(`secciones/${seccion}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('contenido-principal').innerHTML = html;

    })
    .catch(err => {
      document.getElementById('contenido-principal').innerHTML = `<div class="alert alert-danger">Error al cargar la sección: ${seccion}</div>`;
    });
}
