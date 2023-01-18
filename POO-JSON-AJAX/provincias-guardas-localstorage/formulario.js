class item {
	constructor(provincia,municipio) {
    	this.provincia=provincia;
        this.municipio=municipio;
    }
}

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
	provincias = JSON.parse(respuestaJSON);
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
	municipios = JSON.parse(municipiosJSON);
	var listaMunicipios = document.getElementById("municipios");
	listaMunicipios[0] = new Option("Seleccione una provincia");
	var municipiosProv = municipios.filter((a) => a.id.substr(0,2)==provincia);
	for (i=0;i<municipiosProv.length;i++) {
		listaMunicipios.options[i+1] = new Option(municipiosProv[i].nm,municipiosProv[i].id);
	}
	
}
function guardarLocal() {
	prov = document.getElementById('provincia').value;
	muni = document.getElementById('municipios').value;
	let lista = JSON.parse(localStorage.getItem('lista'));
	if (lista===null) {
		lista = new Array();
	}
	//Añadimos la personas al array de personas
	lista.push(new item(prov,muni));
	//Guardar en el navegador el array de personas
	let var_json = JSON.stringify(lista);
	localStorage.setItem('lista', var_json);
	//Escribir en pantalla la lista de personas
	let texto='';
	for (i=0;i<lista.length;i++) {
		let provincia = provincias.filter((a)=>a.id==String(lista[i].provincia));
		let municipio = municipios.filter((a)=>a.id==String(lista[i].municipio));
		texto += provincia[0].nm + ' ' +
		         municipio[0].nm + '<br>';
	}
	document.getElementById('lista').innerHTML = texto;

}

document.body.onload=leerProvincias;
document.getElementById("provincia").onchange=function() { leerMunicipios(this.value);}
document.getElementById("guardar").onclick=guardarLocal;