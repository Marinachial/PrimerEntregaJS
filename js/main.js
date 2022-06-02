// algoritmo con un condicional
let entrada = prompt("Ingrese su nombre");
console.log(entrada)

let nombre = entrada;

if (nombre === ""){
	alert("Hola desconocido")	
} else {
	alert("Hola " + nombre)
}

//algoritmo utilizando un ciclo
let unNumero = parseInt (prompt("Ingrese un número"))

for (let i = 0; i <= 10; i++){
	let suma = unNumero + i;
	console.log(unNumero + "+" + i + "=" + suma);
}

//algoritmo utilizando while
let opcion= prompt("Ingresa una opción.\n1-Corte \n2-Color \n3-Nutrición \nPara salir ingresa ESC")

while(opcion != "ESC"){
	alert ("El producto ingresado es " + opcion);
	opcion = prompt("Ingresa otra opcion \n1-Corte \n2-Color \n3-Nutrición \npara salir ingresa ESC")
}
