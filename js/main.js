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
