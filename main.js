    import Controls from "./controls.js"
    import Timer from "./timer.js"
    import Volume from "./volume.js"
    import Theme from "./theme.js"

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
    const florestSlider = document.querySelector('#florest')
    const chuva = document.querySelector('.rain')
    const lightRain = document.querySelector('.lightRain')
    const darkRain = document.querySelector('.darkRain')
    const rain = new Audio('./assets/audio/Chuva.wav')
    const rainSlider = document.querySelector('#rain')
    const fogo = document.querySelector('.fire')
    const lightFire = document.querySelector('.lightFire')
    const darkFire = document.querySelector('.darkFire')
    const fire = new Audio('./assets/audio/Lareira.wav')
    const fireSlider = document.querySelector('#fire')
    const mercado = document.querySelector('.market')
    const lightMarket = document.querySelector('.lightMarket')
    const darkMarket = document.querySelector('.darkMarket')
    const market = new Audio('./assets/audio/Cafeteria.wav')
    const marketSlider = document.querySelector('#market')
    const background = document.querySelectorAll('.temas')
    const colorSlider = document.querySelector(':root')
    const dSwitch = document.querySelector('.darkTheme')
    const lSwitch = document.querySelector('.lightTheme')
        

    const controls = Controls ({
      florest,
      rain,
      fire,
      market
    })

    const timer = Timer({
      minuts,
      seconds,
      play
  })

    const volume = Volume({
      rain,
      fire,
      florest,
      market,
      rainSlider,
      fireSlider,
      florestSlider,
      marketSlider
     })

     const theme = Theme({
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
  })
    

 play.addEventListener('click', function(){
    timer.countdown()
    timer.removeClick()
  },)
  
  stop.addEventListener('click', function(){
    timer.parar()
  })
  
  increased.addEventListener('click', function(){
    timer.timeIncreased()
  })
  
  decreased.addEventListener('click', function(){
    timer.timeDecreased()
  })
  
  arvore.addEventListener('click', function(){
    controls.playFlorest()
  })
  
  chuva.addEventListener('click', function(){
    controls.playRain()
})

fogo.addEventListener('click', function(){
  controls.playFire()
})

mercado.addEventListener('click', function(){
  controls.playMarket()
})

buttonSwitchThemeDark.addEventListener('click', function(){
  theme.changeControlTheme() 
  theme.changeAudioTheme() 
  theme.changeBackgroundButton()
  theme.switchSlider()
})

buttonSwitchThemeLight.addEventListener('click', function(){
  theme.reverseControlTheme()
  theme.reverseAudioTheme()
  theme.reverseBackgroundButton()
  theme.reverseSlider()
})

rainSlider.addEventListener('click', () => {
  volume.setRainVolume()
});

florestSlider.addEventListener('click', () => {
  volume.setFlorestVolume()
});

fireSlider.addEventListener('click', () => {
  volume.setFireVolume()
});

marketSlider.addEventListener('click', () => {
  volume.setMarketVolume()
});

  