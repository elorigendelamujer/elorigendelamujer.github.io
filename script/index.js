function alEntrar() {
  document.getElementById("entrada").style.opacity = "0";
  nuevaPagina();
  setTimeout(ocultarEntrada, 1000);
}

function nuevaPagina() {
  document.getElementById("principal").style.display = "block";
  if (screen.width > 1000) {
    document.body.style.background = "url('img/fondo-web.jpeg') black no-repeat fixed center center";
    document.body.style.backgroundSize = "cover";
  }
}

function ocultarEntrada() {
  document.getElementById("entrada").style.display = "none";
}
