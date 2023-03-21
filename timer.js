export default function timer({
    minuts,
    seconds,
    play       
}){

let stopTimer 
let minutos = Number(minuts.textContent)

function tempoAtualizado(minutos, segundos){
    minuts.textContent = String(minutos).padStart(2, "0")
    seconds.textContent = String(segundos).padStart(2, "0")
  } 
  
  function resetarTempo(){
    if(minutos > 25){
      minutos = 25
    }
    tempoAtualizado(minutos, 0)
  }
  
  function countdown(){
    stopTimer = setTimeout(function() {
      let segundos =  Number(seconds.textContent)
      let minutos = Number(minuts.textContent)
        
        if( segundos <= 0 ) {
          segundos = 2
          --minutos
        }
        
        if(minutos < 0) {
          return
        }
        
        tempoAtualizado(minutos, segundos -1)
        
        countdown()
      }, 1000)
    }

    function removeClick(){
      play.disabled = true;
    }
    
    function enableClick(){
      play.disabled = false;
    }
    
    function parar(){
      resetarTempo()
      clearTimeout(stopTimer)
      enableClick()
    }
  
    function timeIncreased(){
      minuts.innerHTML = minutos += 5;
      
      tempoAtualizado(minutos, 0)
    }
  
    function timeDecreased(){
      if(minutos <= 0){
        return
      }
      minuts.innerHTML = minutos -= 5;   
  
      tempoAtualizado(minutos, 0)
    }

    return{
        countdown,        
        tempoAtualizado,
        resetarTempo,
        timeDecreased,
        timeIncreased,
        parar,
        removeClick,
        enableClick
    }
}