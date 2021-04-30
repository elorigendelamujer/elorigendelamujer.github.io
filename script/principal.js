function mostrar(id) {
  var img = "img" + id;
  var container = "container-img" + id;
  document.getElementById(img).style.display = "inline-block";
  document.getElementById(container).style.display = "block";
  document.getElementById(container).style.transition = "0.5s";
  ocultarMap();
  document.getElementById(container).style.opacity = "1";
}

function ocultarMap() {
  document.getElementById("map").style.display = "none";
}

function mostrarMap() {
  document.getElementById("map").style.display = "block";
}

function cerrarImagen(id) {
  document.getElementById(id).style.opacity = "0";
  setTimeout(function() {
    document.getElementById(id).style.display = "none";
  }, 500);
  mostrarMap();
}
