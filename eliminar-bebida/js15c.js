function anadirBebida() {
	var nombre=document.getElementById('nombreBebida').value;
	var listaBebidas = document.getElementById("listabebidas");
	var elemento = document.createElement("li");
	var contenido = document.createTextNode(nombre);
	elemento.appendChild(contenido);
	listaBebidas.appendChild(elemento);
	document.getElementById("resultado").innerHTML="Bebida añadida a la lista";
}
function borrarBebida() {
	var num = Number(document.getElementById('numBebida').value);
	var elementos = document.getElementsByTagName('li');
	var elementoABorrar = elementos[num-1];
	elementoABorrar.parentNode.removeChild(elementoABorrar);
	document.getElementById("resultado").innerHTML="Bebida borrada";

}
document.getElementById('boton1').onclick=anadirBebida;
document.getElementById('boton2').onclick=borrarBebida;