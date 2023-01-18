
		class Persona {
			constructor(nombre,apellido1,apellido2,sexo) {
				this.nombre = nombre;
				this.apellido1 = apellido1;
				this.apellido2 = apellido2;
				this.sexo = sexo;
			}			
			nombre_completo() {
				return this.nombre+' '+this.apellido1+' '+this.apellido2
			}
		}
