const play = document.querySelector('.play')
const lightPlay = document.querySelector('.lightPlay')
const darkPlay = document.querySelector('.darkPlay')
const stop = document.querySelector('.stop')
const lightStop = document.querySelector('.lightStop')
const darkStop = document.querySelector('.darkStop')
const increased = document.querySelector('.increased')
const lightIn = document.querySelector('.lightIn')
const darkIn = document.querySelector('.darkIn')
const decreased = document.querySelector('.decreased')
const lightDe = document.querySelector('.lightDe')
const darkDe = document.querySelector('.darkDe')
const seconds = document.querySelector('.segundos')
const minuts = document.querySelector('.minutos')
const buttonSwitchThemeDark = document.querySelector('.lightTheme')
const buttonSwitchThemeLight = document.querySelector('.darkTheme')
const arvore = document.querySelector('.florest')
const lightFlorest = document.querySelector('.lightFlorest')
const darkFlorest = document.querySelector('.darkFlorest')
const florest = new Audio('./assets/audio/Floresta.wav')
const chuva = document.querySelector('.rain')
const lightRain = document.querySelector('.lightRain')
const darkRain = document.querySelector('.darkRain')
const rain = new Audio('./assets/audio/Chuva.wav')
const fogo = document.querySelector('.fire')
const lightFire = document.querySelector('.lightFire')
const darkFire = document.querySelector('.darkFire')
const fire = new Audio('./assets/audio/Lareira.wav')
const mercado = document.querySelector('.market')
const lightMarket = document.querySelector('.lightMarket')
const darkMarket = document.querySelector('.darkMarket')
const market = new Audio('./assets/audio/Cafeteria.wav')
const background = document.querySelectorAll('.temas')
const colorSlider = document.querySelector(':root')
const dSwitch = document.querySelector('.darkTheme')
const lSwitch = document.querySelector('.lightTheme')
let minutos = Number(minuts.textContent)
let stopTimer


function removeClick(){
  play.disabled = true;
}

function enableClick(){
  play.disabled = false;
}

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

  function playFlorest(){
    florest.play();
    rain.pause();
    fire.pause();
    market.pause();  
  }
 
  function playRain(){
    rain.play();
    florest.pause();
    fire.pause();
    market.pause();  
  }

  function playFire(){
    fire.play();
    florest.pause();
    rain.pause();
    market.pause();  
  }

  function playMarket(){
    market.play();
    florest.pause();
    rain.pause();
    fire.pause();
  }

  function changeBackgroundButton(){
    for (let i = 0; i < background.length; i++) {
      background[i].style.backgroundColor = "#29292E";
    }    
  }

  function switchSlider(){
    colorSlider.style.setProperty('--bgSlider', 'white');
    colorSlider.style.setProperty('--bgBody', 'black');
    colorSlider.style.setProperty('--fontColor', 'white');
    colorSlider.style.setProperty('--focusColor', '#0A3442');
  }

  function changeControlTheme(){
    lightPlay.classList.add('hide');
    darkPlay.classList.remove('hide');
    lightStop.classList.add('hide');
    darkStop.classList.remove('hide');    
    lightIn.classList.add('hide');
    darkIn.classList.remove('hide');
    lightDe.classList.add('hide');
    darkDe.classList.remove('hide');
    lSwitch.classList.add('hide');
    dSwitch.classList.remove('hide');
  }

  function changeAudioTheme(){
    lightFlorest.classList.add('hide');
    darkFlorest.classList.remove('hide');
    lightRain.classList.add('hide');
    darkRain.classList.remove('hide');    
    lightFire.classList.add('hide');
    darkFire.classList.remove('hide');
    lightMarket.classList.add('hide');
    darkMarket.classList.remove('hide');
  }

  function reverseSlider(){
    colorSlider.style.setProperty('--bgSlider', 'black');
    colorSlider.style.setProperty('--bgBody', 'white');
    colorSlider.style.setProperty('--fontColor', 'black');
    colorSlider.style.setProperty('--focusColor', '#1195bd');
  }
  
  function reverseControlTheme(){
    lightPlay.classList.remove('hide');
    darkPlay.classList.add('hide');
    lightStop.classList.remove('hide');
    darkStop.classList.add('hide');    
    lightIn.classList.remove('hide');
    darkIn.classList.add('hide');
    lightDe.classList.remove('hide');
    darkDe.classList.add('hide');
    lSwitch.classList.remove('hide');
    dSwitch.classList.add('hide');
  }

  function reverseAudioTheme(){
    lightFlorest.classList.remove('hide');
    darkFlorest.classList.add('hide');
    lightRain.classList.remove('hide');
    darkRain.classList.add('hide');    
    lightFire.classList.remove('hide');
    darkFire.classList.add('hide');
    lightMarket.classList.remove('hide');
    darkMarket.classList.add('hide');
  }

  function reverseBackgroundButton(){
    for (let i = 0; i < background.length; i++) {
      background[i].style.backgroundColor = "#E1E1E6";
    }    
  }

play.addEventListener('click', function(){
    countdown()
    removeClick()
},)

stop.addEventListener('click', function(){
  parar()
})

increased.addEventListener('click', function(){
  timeIncreased()
})

decreased.addEventListener('click', function(){
  timeDecreased()
})

arvore.addEventListener('click', function(){
  playFlorest()
})

chuva.addEventListener('click', function(){
  playRain()
})

fogo.addEventListener('click', function(){
  playFire()
})

mercado.addEventListener('click', function(){
  playMarket()
})

buttonSwitchThemeDark.addEventListener('click', function(){
  changeControlTheme() 
  changeAudioTheme() 
  changeBackgroundButton()
  switchSlider()
})

buttonSwitchThemeLight.addEventListener('click', function(){
  reverseControlTheme()
  reverseAudioTheme()
  reverseBackgroundButton()
  reverseSlider()
})