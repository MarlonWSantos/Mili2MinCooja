/*
 *
 *   Mili2MinCooja - Converte o tempo do sistema Cooja de milisegundos para min:seg
 *   Copyright (C) 2020 Marlon W. Santos <marlon.santos.santos@icen.ufpa.br>
 *
 *
 *	
 *   This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <https://www.gnu.org/licenses/>
 *
 */

/*
 * Example Contiki test script (JavaScript).
 * A Contiki test script acts on mote output, such as via printf()'s.
 * The script may operate on the following variables:
 *  Mote mote, int id, String msg
 */

  //Converte o tempo do sistema de milisegundos para um formato min:seg
function convertTime(milliseconds){
    var minutes;
    var seconds;
        
    minutes = parseInt((milliseconds/60000)%60);
    seconds = ((milliseconds/1000)%60).toFixed(3);
    
    if(minutes<10){
        min = "0"+minutes;
    }else{
        min = minutes;    
    }
    if(seconds<10){
        sec = "0"+seconds;    
    }else{
        sec = seconds;    
    }
        return min+":"+sec;
}


  //Simulação será executada por 3600000 milisegundos (1h)
TIMEOUT(3600000);

 //Define velocidade de simulação próxima da real
sim.setSpeedLimit(1.0);

log.log("-------------------------------------------\n");

  //Exibe números de motes na simulação
log.log("Número de motes: "+sim.getMotesCount()+"\n");
log.log("Border Router: 1\n");
log.log("Número de nodos: "+((sim.getMotesCount())-1)+"\n");
log.log("-------------------------------------------\n");


while (true) {

    //Exibe o tempo do sistema, o Mote e seu ID e a mensagem de cada mote
  log.log(convertTime(sim.getSimulationTimeMillis()) + "| Mote " + id + ": " + msg + "\n");

    //Aguarda uma mensagem de algum mote
  YIELD();
}

