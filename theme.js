export default function theme({
    background,
    colorSlider,
    lightDe,
    lightFire,
    lightFlorest,
    lightIn,
    lightMarket,
    lightPlay,
    lightRain,
    lightStop,
    darkDe,
    darkFire,
    darkFlorest,
    darkIn,
    darkMarket,
    darkPlay,
    darkRain,
    darkStop,
    dSwitch,
    lSwitch
}){


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

  return{
    reverseAudioTheme,
    reverseBackgroundButton,
    reverseControlTheme,
    reverseSlider,
    removeEventListener,
    changeAudioTheme,
    changeBackgroundButton,
    changeControlTheme,
    switchSlider
  }

}