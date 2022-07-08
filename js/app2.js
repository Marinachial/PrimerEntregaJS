let datos =[]

let btnRegistro = document.getElementById('registro')
let btnIngreso = document.getElementById('ingreso')

btnRegistro.addEventListener('click', ()=>{
    const usuarioRegistrado =document.getElementById('usReg').value
    const contraseñaRegistrada = document.getElementById('passReg').value
    const reContraseña =document.getElementById('rePassReg').value
    const email = document.getElementById('email').value 
    
    validar(usuarioRegistrado, contraseñaRegistrada,reContraseña,email)
})

class Usuario{
    constructor(usuario,pass,email) {
        this.usuario=usuario
        this.pass=pass
        this.email=email
    }
}

function validar(usuarioRegistrado, contraseñaRegistrada,reContraseña,email){

        if(usuarioRegistrado == "" || contraseñaRegistrada == "" ||reContraseña == "" || email == ""){
            Swal.fire('debes llenar todos los campos')
    }
        else if(contraseñaRegistrada.length < 4){
            Swal.fire('la contraseña debe ser mayor a 4 digitos')
    }
        else if(contraseñaRegistrada != reContraseña){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'las contraseñas no coinciden',
              })  
    }
    else{
        datos.push(new Usuario(usuarioRegistrado,contraseñaRegistrada,email))

        localStorage.setItem('dato', JSON.stringify(datos))
        
        document.getElementById('usReg').value = ""
        document.getElementById('passReg').value= ""
        document.getElementById('rePassReg').value= ""
        document.getElementById('email').value = ""

        document.getElementById('tab-2').checked = false
        document.getElementById('tab-1').checked = true
    }
}

btnIngreso.addEventListener('click',ingresar)


function ingresar(){
    const usuario =document.getElementById('user').value
    const contraseña = document.getElementById('pass').value
    let validacion = validarIngreso(usuario,contraseña)
    let recuperoLocalS= JSON.parse(localStorage.getItem('dato'))
   
    if(validacion){
        if((recuperoLocalS[0].usuario == usuario) && (recuperoLocalS[0].pass == contraseña)){
            document.getElementById('user').value = "";
            document.getElementById('pass').value="";

            Swal.fire({
                title: 'Inicio de sesion correcto',
                icon: 'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }else{
            Swal.fire({
                title: 'No pudimos validar tus datos',
                icon: 'warning',
            }   
            )
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo debe estar mal',
            footer: '<a href="">Volver</a>'
          })
    }
    
}

function validarIngreso(usuario,contraseña) {
    if(usuario == "" || contraseña == ""){
        return false
    }else{
        return true
    }
}