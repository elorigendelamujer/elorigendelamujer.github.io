function alEntrar() {
  document.getElementById("entrada").style.display = "none";
  document.getElementById("principal").style.display = "block";
  if (screen.width > 1000) {
    document.body.style.background = "black url('img/fondo-web.jpeg') no-repeat fixed center center";
    document.body.style.backgroundSize = "cover";
  }
}
