// PRE ENTREGA

let looks = [
	{id:1, nombre: "Corte", precio: 1200, demora: "40min"},
	{id:2, nombre: "Tintura", precio: 2500, demora: "3hs"},
	{id:3, nombre: "Color Fantasía", precio: 3500, demora: "4hs"},
	{id:4, nombre: "Nutricion", precio: 900, demora: "60min"},
	{id:5, nombre: "Antifrizz", precio: 1000, demora: "45min"},
	{id:6, nombre: "Gift Card", precio: 2500, demora: "3hs"},
]



function agregarTurno(){
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
console.log(turnoElegido2)


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

