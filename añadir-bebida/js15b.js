function anadirBebida() {
	var nombre=document.getElementById('nombreBebida').value;
	var listaBebidas = document.getElementById("listabebidas");
	var elemento = document.createElement("li");
	var contenido = document.createTextNode(nombre);
	elemento.appendChild(contenido);
	listaBebidas.appendChild(elemento);
	document.getElementById("resultado").innerHTML="Bebida añadida a la lista";
}

document.getElementById('boton').onclick=anadirBebida;