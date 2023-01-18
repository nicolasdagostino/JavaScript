function mostrarBebida() {
	var num=Number(document.getElementById('numbebida').value);
	var lista = document.getElementsByTagName("li");
	document.getElementById("resultado").innerHTML=lista[num-1].innerHTML;
}

document.getElementById('boton').onclick=mostrarBebida;