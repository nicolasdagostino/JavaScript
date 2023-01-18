function leerPlantas() {
		var url = "plantas.json";
		var request = new XMLHttpRequest();
		request.responseType = "application/json"; //Predeterminado
		request.open("GET", url); //Solo configura la llamada
		request.onload = function() {
		if (request.status == 200) { //200 significa correcto.
			actualizarIU(request.responseText); }
		};
		request.send(null);
	}
function actualizarIU(respuestaJSON) {
	var DivPlantas = document.getElementById("DIV_plantas");
	var plantas = JSON.parse(respuestaJSON);
	plantas=plantas.plantas;
	for (var i = 0; i < plantas.length; i++) {	
		var planta = plantas[i];
		var div = document.createElement("div");
		div.setAttribute("class", "FormatoPlanta");
		div.innerHTML = "Planta " + planta.Nombre_comun + ": " + planta.stock;
		DivPlantas.appendChild(div);
	}
}	
document.getElementById('leerPlantas').onclick=leerPlantas;