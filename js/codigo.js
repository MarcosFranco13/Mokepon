function aleatorio(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min)
 }

 function eleccion (jugada) {
     let resultado = ""
     
     
     if (jugada == 1) {
         resultado = "Piedra ✊"
     } else if (jugada ==2 ){
         resultado = "Papel ✋"
     }
     else if (jugada ==3) {
         resultado = "Tijeras ✌️"
     }
     else {
         resultado ="MAL ELEGIDO"
     }
     return resultado

 }

 function combate (pc , jugador) {

     //Combate

     if (pc == jugador) {
         return "Empate"
         
     }else if (jugador == 1 && pc ==3){
         return "GANASTE"

     }else if (jugador == 2 && pc ==1){
        return "GANASTE"
         
     }else if (jugador == 3 && pc ==2){
        return "GANASTE"
         
     }
     else{
         return "PERDISTE"
         
     }

    
 }

 //1 piedra, 2 papel, 3 tijera
 let jugador = 0
 let pc =  0
 let triunfos = 0
 let perdidas = 0
 let resultado = ""

 while (triunfos < 3 && perdidas< 3  ) {

     pc = aleatorio(1,3)

     jugador = prompt ("elige: 1 para piedra, 2 para papel, 3 para tijeras")

     //alert("Elejiste "+ jugador)

     alert ("PC elige " + eleccion(pc))
     alert ("Tu eliges " + eleccion(jugador))

     resultado = combate(pc, jugador)
     alert (resultado)

     if ( resultado === "GANASTE" ){
         triunfos = triunfos + 1
     }else if (resultado === "PERDISTE"){
         perdidas = perdidas + 1
     }

     //Combate

 }

 alert("Ganaste " + triunfos + " veces. Perdiste "+ perdidas + " veces.")

