// DESAFIO

/* const mainTurnos = document.getElementById('mainTurnos');

let looks = [
	{id:1, nombre: "Corte", precio: 1200, demora: "40min", img: '../img/turnos2.jpg'},
	{id:2, nombre: "Tintura", precio: 2500, demora: "3hs", img:'../img/turnos6.jpg'},
	{id:3, nombre: "Color Fantasía", precio: 3500, demora: "4hs", img:'../img/turnos1.jpg'},
	{id:4, nombre: "Nutricion", precio: 900, demora: "60min", img:'../img/turnos5.jpg'},
	{id:5, nombre: "Antifrizz", precio: 1000, demora: "45min", img:'../img/turnos3.jpg'},
	{id:6, nombre: "Gift Card", precio: 2500, demora: "3hs", img:'../img/turnos8.jpg'},
]


function mostrarTurnos(){
	looks.forEach(el =>{
		let div = document.createElement('div')
		div.className = 'turnos3'
		div.innerHTML = `<div class="card"> 
				    	<div class="col-md-4 col-sm-4">
				      		<img src="${el.img}" class="img-fluid rounded-start">
				    	</div>
				    	<div class="col-md-8 col-sm-8">
				      	<div class="card-body">
				        	<h3 class="card-titlesobre">${el.nombre}</h3>
				        	<p class="card-text2">${el.demora}</p>
				        	<p class="card-text2">$ ${el.precio}</p>
				        	<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
				    	</div>`
		mainTurnos.appendChild(div)
	})
} */



let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecPrecios = document.getElementById('selecPrecios')
const buscador = document.getElementById('search')



//filtro
selecPrecios.addEventListener('change',()=>{

    console.log(selecPrecios.value)
    if(selecPrecios.value == 'all'){
        mostrarProductos(stockProductos)
    }else{
        let arrayNuevo = stockProductos.filter(item => item.tipo == selecPrecios.value)//array nuevo

        mostrarProductos(arrayNuevo)
    }
})

//EL STOCK
let stockProductos = [
	{id:1, nombre: "Corte", precio: 1200, tipo: 2, desc: "Un clasico",  demora: "40min", img: './img/turnos2.jpg'},
	{id:2, nombre: "Tintura", precio: 2500, tipo: 3, desc: "Un clásico pero con un poco mas de onda.", demora: "3hs", img:'./img/turnos6.jpg'},
	{id:3, nombre: "Color Fantasía", precio: 3500, tipo: 4, desc: "Para les valientes, incluye decoloración", demora: "4hs", img:'./img/turnos1.jpg'},
	{id:4, nombre: "Nutricion", precio: 900, tipo: 1, desc: "Para ese pelo mas seco que tu ex", demora: "60min", img:'./img/turnos5.jpg'},
	{id:5, nombre: "Antifrizz", precio: 1000, tipo: 2, desc: "Para que tu pelito sobreviva a la humedad", demora: "45min", img:'./img/turnos3.jpg'},
	{id:6, nombre: "Gift Card", precio: 2500, tipo: 3, desc: "Podés elegir una gift con todas las opciones anteriores. ¡Y se la enviamos directamente a quién vos quieras!", demora: "3hs", img:'./img/turnos8.jpg'},
] 

//Buscado

mostrarProductos(stockProductos)

//logica Ecommerce
function mostrarProductos(array){

    contenedorProductos.innerHTML = ""

    for(const el of array) {

        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `<div class="card">
                                <div class="card-image">
                                    <img src="${el.img}">
                                    <span class="card-titlesobre2">${el.nombre}</span>
									<a id="boton${el.id}" href="#" class="btn btn-primary">Seleccionar<i class="bi bi-bag-heart"></i></a>
                                </div>
                                <div class="card-content">
                                    <p>${el.desc}</p>
                                    <p>Tipo: ${el.tipo}</p>
                                    <p> $ ${el.precio}</p>
                                </div>
                            </div>`

        contenedorProductos.appendChild(div)
        
        let btnAgregar = document.getElementById(`boton${el.id}`)
        
        btnAgregar.addEventListener('click',()=>{
            agregarAlCarrito(el.id);
        })

    }
    
   
}



function agregarAlCarrito(id) {
    let yaExiste = carritoDeCompras.find(elemento => elemento.id == id)

    if(yaExiste){
        yaExiste.cantidad = yaExiste.cantidad + 1
        document.getElementById(`cantidad${yaExiste.id}`).innerHTML = `<p id="cantidad${yaExiste.id}">cantidad: ${yaExiste.cantidad}</p>`
        actualizarCarrito()
    }else{
        let productoAgregar = stockProductos.find(ele => ele.id === id)
        productoAgregar.cantidad = 1 
   carritoDeCompras.push(productoAgregar)
   actualizarCarrito()
   mostrarCarrito(productoAgregar) 
    }
  
}



function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML =`<p>${productoAgregar.nombre}</p>
                <p>Precio: $${productoAgregar.precio}</p>
                <p id="cantidad${productoAgregar.id}">cantidad: ${productoAgregar.cantidad}</p>
                <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
    contenedorCarrito.appendChild(div)

    let btnEliminar= document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener('click',()=>{
        if(productoAgregar.cantidad == 1){
            btnEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item => item.id !== productoAgregar.id)
            actualizarCarrito()
        }else{
            productoAgregar.cantidad = productoAgregar.cantidad - 1
        document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id="cantidad${productoAgregar.id}">cantidad: ${productoAgregar.cantidad}</p>`
        actualizarCarrito()
        }
    

    })
}




function  actualizarCarrito (){
   contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
   precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad) , 0)                                                            
}


/* function agregarTurno(){
	let turno1 = []
	let que= prompt("Ingresa la opción que quieras seleccionar.\nCorte \nTintura \nColor Fantasia \nNutricion \nAnti-Frizz \nGift Card");
	if (que == "Gift Card" || que == "GIFT CARD") alert("Elegiste hacer un regalo");
	let diaTurno= prompt("Ingresa la opción que quieras seleccionar.\nA-Lunes \nB-Martes \nC-Miercoles \nD-Jueves \nE-Viernes \nF-Sabado");
	let medioPago = prompt("Ingresa la forma de pago: \nTranferencia \nMercado Pago \nEfectivo")
	
	turno1.look = que
	turno1.dia = diaTurno
	turno1.formaPago = medioPago
	return turno1
}

let primerTurno = agregarTurno()
looks.push(primerTurno)

let turnoElegido2 = looks.map(value => value)
console.log(turnoElegido2) */


//ARRAYS

/* let turnosClientes = []

function agregarTurnos(){

let reserva1 = {}
let que= prompt("Ingresa la opción que quieras seleccionar.\nCorte \nTintura \nColor Fantasia \nNutricion \nAnti-Frizz \nGift Card");
let diaTurno= prompt("Ingresa la opción que quieras seleccionar.\nA-Lunes \nB-Martes \nC-Miercoles \nD-Jueves \nE-Viernes \nF-Sabado");
let medioPago = prompt("Ingresa la forma de pago: \nTranferencia \nMercado Pago \nEfectivo")

reserva1.look = que
reserva1.dia = diaTurno
reserva1.formaPago = medioPago
return reserva1
}

let turnoElegido = agregarTurnos()
turnosClientes.push(turnoElegido)
turnoElegido = agregarTurnos()
turnosClientes.push(turnoElegido)

let mapeo = turnosClientes.map(value => value)
console.log(mapeo); */


// algoritmo con un condicional
/* let entrada = prompt("Ingrese su nombre");
console.log(entrada)

let nombre = entrada;

if (nombre === ""){
	alert("Hola desconocido")	
} else {
	alert("Hola " + nombre)
} */

//algoritmo utilizando un ciclo
/* let unNumero = parseInt (prompt("Ingrese un número"))

for (let i = 0; i <= 10; i++){
	let suma = unNumero + i;
	console.log(unNumero + "+" + i + "=" + suma);
} */

//algoritmo utilizando while
/* let opcion= prompt("Ingresa una opción.\n1-Corte \n2-Color \n3-Nutrición \nPara salir ingresa ESC")

while(opcion != "ESC"){
	alert ("El producto ingresado es " + opcion);
	opcion = prompt("Ingresa otra opcion \n1-Corte \n2-Color \n3-Nutrición \npara salir ingresa ESC")
} */

//SEGUNDA ENTREGA:

/* let nombreUsuario = prompt ("¡Hola! ¿Cuál es tu nombre?")

function saludar (nombre){
	alert ("Hola " + nombre + " bienvenidx!");
}
saludar (nombreUsuario)

let opcion= prompt("Ingresa la opción que quieras seleccionar.\nCorte \nTintura \nColor Fantasia \nNutricion \nAnti-Frizz \nGift Card");
if (opcion == "Gift Card" || opcion == "GIFT CARD")	alert("Elegiste hacer un regalo");

function look (que){
	if (opcion === "Gift Card" || opcion === "GIFT CARD"){
		alert("Elegiste "+ opcion + " de regalo, por un valor de $1500");
	}else{
		alert("Elegiste "+ opcion);
	}
}
look(opcion)

let diaReserva= prompt("Ingresa la opción que quieras seleccionar.\nLunes \nMartes \nMiercoles \nJueves \nViernes \nSabado");
function diaElegido (cuando){
	alert("Elegiste "+ diaReserva);
}
diaElegido(diaReserva)

function ReservaFinal(parametro1, parametro2){
	if (parametro1 === "Gift Card" || parametro1 === "GIFT CARD"){
		alert("Elegiste "+ opcion + " de regalo, por un valor de $1500");
	} else	alert("Entonces elegiste lookearte con " + parametro1 + " el día " + parametro2);
}

ReservaFinal(opcion, diaReserva) */

//SWITCH DE OPCION
/* let opcion2= prompt("Ingresa la opción que quieras seleccionar.\n1-Corte \n2-Tintura \n3-Color Fantasia \n4-Nutricion \n5-Anti-Frizz \n6-Gift Card \nPara salir ingresa SALIR");
if (opcion2 == "SALIR" || opcion2 == "salir") alert ("No seleccionaste ninguna opción. ¡Que tengas buen día!");

while(opcion2 != "SALIR"){
	switch (opcion2){
		case "1":
		alert("Seleccionaste Corte");
		break
		case "2":
		alert("Seleccionaste Tintura");
		break
		case "3":
		alert("Seleccionaste Color Fantasia");
		break
		case "4":
		alert("Seleccionaste Nutricion");
		break
		case "5":
		alert("Seleccionaste Anti-Frizz");
		break
		case "6":
		alert("Seleccionaste Gift Card");
		break
		default:
		alert("Opción no válida")
		break
		}
		opcion2 = prompt("Ingresa la opción que quieras seleccionar.\n1-Corte \n2-Tintura \n3-Color Fantasia \n4-Nutricion \n5-Anti-Frizz \n6-Gift Card \nPara salir ingresa SALIR");
		if (opcion2 == "SALIR" || opcion2 == "salir") alert ("Elegiste salir. ¡Que tengas buen día!");
	}

//SWITCH DE DIAS
let diaReserva2= prompt("Ingresa la opción que quieras seleccionar.\nA-Lunes \nB-Martes \nC-Miercoles \nD-Jueves \nE-Viernes \nF-Sabado \nPara salir ingresa SALIR");
if (diaReserva2 == "SALIR" || diaReserva2 == "salir") alert ("Elegiste salir.. ¡Que tengas buen día!");

while(diaReserva2 != "SALIR"){
	switch (diaReserva2){
		case "A":
		alert("Seleccionaste Lunes");
		break
		case "B":
		alert("Seleccionaste Martes");
		break
		case "C":
		alert("Seleccionaste Miercoles");
		break
		case "D":
		alert("Seleccionaste Jueves");
		break
		case "E":
		alert("Seleccionaste Viernes");
		break
		case "F":
		alert("Seleccionaste Sabado");
		break
		default:
		alert("Opción no válida")
		break
	}
	diaReserva2 = prompt("Ingresa la opción que quieras seleccionar.\nA-Lunes \nB-Martes \nC-Miercoles \nD-Jueves \nE-Viernes \nF-Sabado \nPara salir ingresa SALIR");
	if (diaReserva2 == "SALIR" || diaReserva2 == "salir") alert ("Elegiste salir.. ¡Que tengas buen día!");
}
 */

