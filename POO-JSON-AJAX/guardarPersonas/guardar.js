function guardarPersona() {
	//Recuperamos los datos del formulario
	nom=document.getElementById('nombre').value;
	ape1=document.getElementById('apellido1').value;
	ape2=document.getElementById('apellido2').value;
	sexo=document.getElementById('sexo').value;
	//Recuperar el array personas del navegador
	let personas = JSON.parse(localStorage.getItem('personas'));
	if (personas===null) {
		personas = new Array();
	}
	//Añadimos la personas al array de personas
	personas.push(new Persona(nom,ape1,ape2,sexo));
	//Guardar en el navegador el array de personas
	let var_json = JSON.stringify(personas);
	localStorage.setItem('personas', var_json);

	//Escribir en pantalla la lista de personas
	let texto='';
	for (i=0;i<personas.length;i++) {
		texto += personas[i].nombre + ' ' +
		         personas[i].apellido1 + ' ' +
		         personas[i].apellido2 + '<br>';
	}
	document.getElementById('listaPersonas').innerHTML = texto;

}

document.getElementById('guardar').onclick=guardarPersona;
document.getElementById('formulario').onsubmit= function() {return false;}