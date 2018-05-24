var Contenedor_visible = 0;
var contenedores = [
	"datos",
	"objetivo",
	"prepa",
	"experiencias",
	"info",
	"Portfolio"
];

function mostrarContenedor(id) {
	document.getElementById('carta_presentacion').style.display = 'none';
	for(var i = 0; i < contenedores.length; i++) {
		document.getElementById(contenedores[i]).style.display = 'none';
	}
	document.getElementById(id).style.display = 'block';
}

