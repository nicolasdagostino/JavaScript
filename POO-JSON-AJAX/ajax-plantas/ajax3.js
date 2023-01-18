function leerPlantas() {
		var url = "plantas2.json";
		var request = new XMLHttpRequest();
		request.responseType = "application/json"; //Predeterminado
		request.open("GET", url); //Solo configura la llamada
		request.onload = function() {
		if (request.status == 200) { //200 significa correcto.
			actualizarIU(request.responseText); }
		else if (request.status == 404) {
			document.getElementById("DIV_plantas").innerHTML='Error carga de datos';
		};
		}
		request.send(null);
	}
function actualizarIU(respuestaJSON) {
	var DivPlantas = document.getElementById("DIV_plantas");
	plantas = JSON.parse(respuestaJSON);
	plantas=plantas.plantas;
	for (var i = 0; i < plantas.length; i++) {	
		var planta = plantas[i];
		var div = document.createElement("div");
		div.setAttribute("class", "FormatoPlanta");
		div.setAttribute("id","planta"+i);
		div.innerHTML = '<a href="#" onclick="mostrarPlanta(\''+i+'\')">'+planta.Nombre_comun+'</a>';
		DivPlantas.appendChild(div);
	}
}
function mostrarPlanta(indice) {
	texto = 'Nombre común:'+ plantas[indice].Nombre_comun+'<br>';
	texto += 'Nombre científico: '+plantas[indice].Nombre_cientifico+'<br>';
	texto += 'Descripción: '+plantas[indice].Descripcion+'<br>';
	texto += 'Ubicación: '+plantas[indice].Ubicacion+'<br>';
	texto += 'Stock: '+plantas[indice].stock+'<br>';	
	document.getElementById("planta"+indice).innerHTML = '<a href="#" onclick="mostrarPlanta(\''+indice+'\')">'+plantas[indice].Nombre_comun+'</a><br>'+texto;
}
document.body.onload=leerPlantas;