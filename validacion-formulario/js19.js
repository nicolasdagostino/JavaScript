function validacion() {
	var ret=true;
	//leemos las variables del formulario
	var nombre=document.getElementById("nombre").value;
	var apellido1=document.getElementById("primerApellido").value;
	var apellido2=document.getElementById("segundoApellido").value;
	var telefono=document.getElementById("telefono").value;
	var dia=document.getElementById("dia").value;
	var mes=document.getElementById("mes").value;
	var ano=document.getElementById("ano").value;
	var fecha = new Date(ano,mes,dia);
	var mail=document.getElementById("email").value;
	var privacidad=document.getElementById("privacidad");
	var errores=document.getElementById("errores")
	//Expresiones regulares
	var regExpTelefono = /^([0-9]+){9}$/;
	var regExpEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 

	if (nombre=="" || nombre.length==0) {
		errores.innerHTML+="Error, el nombre debe rellenarse<br>";
		document.getElementById("nombre").style="border:5px solid red;"
		ret=false;
	}
	if (apellido1=="" || apellido1.length==0) {
		errores.innerHTML+="Error, el apellido1 debe rellenarse<br>";
		ret=false;
	}
	if (apellido2=="" || apellido2.length==0) {
		errores.innerHTML+="Error, el apellido2 debe rellenarse<br>";
		ret=false;
	}
	if (!regExpTelefono.test(telefono)) {
		errores.innerHTML+="Error, el telefono debe contener 9 cifras<br>"
		ret=false;
	}
	if (isNaN(fecha)) {
		errores.innerHTML+="La fecha de nacimiento indicada no es correcta<br>";
		ret=false;
	}
	if (mail!=null && mail.length!=0 && !regExpEmail.test(mail)) {
		errores.innerHTML+="El mail no tiene el formato correcto<br>";
		ret=false;
	} 
	if (!privacidad.checked) {
		errores.innerHTML+="No has indicado la privacidad";
		ret=false;
	}
	return ret;
}


document.getElementById("formulario").onsubmit = function() {
												  return validacion();
												}