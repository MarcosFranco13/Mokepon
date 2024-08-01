let ataqueJugador 

 function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonFuego.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener.getElementById('click',ataqueTierra)
    let botonPlanta = document.getElementById('boton-planta')
    botonPlanta.addEventListener.getElementById('click', ataquePlanta)


}

 function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRetigueya = document.getElementById('Retigueya')
    let inputLangostelvis = document.getElementById('Langostelvis')
    let inputTucapalma = document.getElementById('Tucapalma')
    let inputPydos = document.getElementById('Pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let seleccion = true

    if (inputHipodoge.checked) {

        spanMascotaJugador.innerHTML = 'Hipodoge'
        

    }else if(inputCapipepo.checked){

        spanMascotaJugador.innerHTML = 'Capipepo'
      

    }else if (inputRetigueya.checked) {
        
        spanMascotaJugador.innerHTML = 'Ratigueya'
      

    }else if (inputLangostelvis.checked) {

        spanMascotaJugador.innerHTML = 'Langostelvis'
       

    }else if (inputTucapalma.checked) {
        
        spanMascotaJugador.innerHTML = 'Tucapalma'
       

    }else if (inputPydos.checked) {
        
        spanMascotaJugador.innerHTML = 'Pydos'
      

    }else{
        alert('Selecciona una mascota')
        seleccion = false
        
    }

    if (seleccion == true) {
        seleccionarMascotaEnemigo()
    }
    
}

 function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (amascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
        
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'

    } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
        
    } else if (mascotaAleatoria == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
        
    } else if (mascotaAleatoria == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
        
    } else if (mascotaAleatoria == 6) {
        spanMascotaEnemigo.innerHTML = 'Pydos'
        
    }
    
}

 function aleatorio(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min)
 }

 function ataqueFuego() {
    ataqueJugador = 'FUEGO'
 }

 function ataqueAgua() {
    ataqueJugador = 'AGUA'
 }
 function ataqueTierra() {
    ataqueJugador = 'TIERRA'
 }

 function ataquePlanta() {
    ataqueJugador = 'PLANTA'
 }
 

window.addEventListener('load', iniciarJuego )
