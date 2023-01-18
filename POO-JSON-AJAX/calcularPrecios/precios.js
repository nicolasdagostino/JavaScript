class Producto {
	constructor(producto,cantidad,precio) {
		this.producto=producto;
		this.cantidad=cantidad;
		this.precio=precio;
		this.total;
	}
}
let productos = new Array();
function mostrarProductos(precioTotal) {
	let text='';
	productos.forEach((a) => {
							text +=a.producto + ' ' + 
								   a.cantidad+' '+
								   a.precio+' ';
								   if (precioTotal==0) { text +='<br>'}
								   else { text +=a.total + '<br>'}

								})
	if (precioTotal!=0) {
    	text += "==================<br>TOTAL..........."+precioTotal;
    }
	document.getElementById('listaProductos').innerHTML=text;
}
function guardarProducto() {
	producto=document.getElementById('producto').value;
	cantidad=document.getElementById('cantidad').value;
	precio=document.getElementById('precio').value;
	productos.push(new Producto(producto,cantidad,precio));
	//let text='';
	//productos.forEach((a) => {text +=a.producto + ' ' + a.cantidad+' '+a.precio+'<br>'})
	//document.getElementById('listaProductos').innerHTML=text;
	mostrarProductos(0);
}
function calcularPrecio(){
	precioTotal=productos.map((a) => a.total=a.cantidad * a.precio).reduce((a,b) => a+b);
	mostrarProductos(precioTotal);
}
document.getElementById('guardarProducto').onclick=guardarProducto;
document.getElementById('calcularPrecio').onclick=calcularPrecio;