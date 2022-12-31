//Funcion que calcula la diferencia entre dos tiempos
function calcularDiferencia() {
     hora_minuto_inicio = document.getElementById("hora_minuto_inicio").value
     hora_minuto_final = document.getElementById("hora_minuto_final").value
     //Se separan las horas y los minutos
     let horas1 = hora_minuto_inicio.split(':')[0];
     let minutos1 = hora_minuto_inicio.split(':')[1];
     let horas2 = hora_minuto_final.split(':')[0];
     let minutos2 = hora_minuto_final.split(':')[1];
     //Se calcula la diferencia entre los tiempos
     diferencia = (horas2 - horas1) * 60 + (minutos2 - minutos1);
     //Se calcula el tiempo total en horas y minutos
     let tiempo = Math.floor(diferencia / 60) + ':' + (diferencia % 60);
     //Se devuelve el tiempo
     document.getElementById("diferencia").textContent = tiempo
}
function formatTime(input){
    return ""
}

