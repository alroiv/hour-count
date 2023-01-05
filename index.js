document.addEventListener("DOMContentLoaded", function(event) {
    var number_of_hour_calc=1


});
var number_of_hour_calc=1

function calcular_diferencia_total(){
    diferencies = document.getElementsByClassName("diferencia")
    tiempo_total = "0:0"
    for (diferencia of diferencies){

          let hours1 = parseInt(tiempo_total.split(':')[0]);
          let minutes1 = parseInt(tiempo_total.split(':')[1]);
          let hours2 = parseInt(diferencia.split(':')[0]);
          let minutes2 = parseInt(diferencia.split(':')[1]);

          // Sumar las horas y los minutos por separado
          let hours = hours1 + hours2;
          let minutes = minutes1 + minutes2;

          // Si hay más de 60 minutos, aumentar la cantidad de horas en 1 y restar 60 minutos
          if (minutes >= 60) {
            hours += 1;
            minutes -= 60;
          }

          // Si hay menos de 10 minutos, agregar un 0 a la izquierda
          if (minutes < 10) {
            minutes = '0' + minutes;
          }

          // Devolver el resultado en el formato HH:MM
          tiempo_total =  hours + ':' + minutes;
    }
    document.getElementById("diferencia_total").textContent = tiempo_total
}

//Funcion que calcula la diferencia entre dos tiempos
function calcularDiferencia(id_num) {
         hora_minuto_inicio = document.getElementById("hora_minuto_inicio_"+id_num).value
         hora_minuto_final = document.getElementById("hora_minuto_final_"+id_num).value
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
         document.getElementById("diferencia_"+id_num).textContent = tiempo
         calcular_diferencia_total()
    }

function add_hour_calc(){
    number_of_hour_calc++
    container = document.getElementById("hour-calc-container")
    let div = document.createElement('div')
    div.className= "hour-calc"
     element = `<button>Delete</button><input id="hora_minuto_inicio_1" type="time"  placeholder="12:00"/>
    <input id="hora_minuto_final_1" type="time"  placeholder="13:30"/>
    <input class="button" type="button" onclick="calcularDiferencia(1)" value="Calcular">
    <span id="diferencia_1"></span>`
    element = element.replace('hora_minuto_inicio_1', 'hora_minuto_inicio_'+number_of_hour_calc)
    element = element.replace('hora_minuto_final_1', 'hora_minuto_final_'+number_of_hour_calc)
    element = element.replace('calcularDiferencia(1)', 'calcularDiferencia('+number_of_hour_calc+')')
    element = element.replace('diferencia_1', 'diferencia_'+number_of_hour_calc)
    div.innerHTML = element
    container.appendChild(div)
}

function delete_hour_calc(){

}