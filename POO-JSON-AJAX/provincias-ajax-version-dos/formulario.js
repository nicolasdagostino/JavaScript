function leerProvincias() {
	var url="provincias.json";
	var request=new XMLHttpRequest();
	request.responseType = "application/json";
	request.open("GET",url);
	request.onload = function() {
		if (request.status==200) {
			procesarProvincias(request.responseText);
		}
	}
	request.send(null);
}
function procesarProvincias(respuestaJSON) {
	var provincias = JSON.parse(respuestaJSON);
	var lista = document.getElementById("provincia");
	lista.options[0] = new Option("- Selecciona una provincia-");
	for (i=0; i<provincias.length;i++) {
		lista.options[i+1]= new Option(provincias[i].nm,provincias[i].id);
	}
}
function leerMunicipios(prov) {
	var url="municipios.json";
	var request=new XMLHttpRequest();
	request.responseType = "application/json";
	request.open("GET",url);
	request.onload = function() {
		if (request.status==200) {
			procesarMunicipios(request.responseText,prov);
		}
	}
	request.send(null);
}
function procesarMunicipios(municipiosJSON,provincia) {
	var municipios = JSON.parse(municipiosJSON);
	var listaMunicipios = document.getElementById("municipios");
	listaMunicipios[0] = new Option("Seleccione una provincia");
	var municipiosProv = municipios.filter((a) => a.id.substr(0,2)==provincia);
	for (i=0;i<municipiosProv.length;i++) {
		listaMunicipios.options[i+1] = new Option(municipiosProv[i].nm,municipiosProv[i].id);
	}
	
}

document.body.onload=leerProvincias;
document.getElementById("provincia").onchange=function() { leerMunicipios(this.value);}