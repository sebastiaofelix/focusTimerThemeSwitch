   export default function volume({
    rain,
    fire,
    florest,
    market,
    rainSlider,
    fireSlider,
    florestSlider,
    marketSlider
   }){
    
   function setRainVolume(){
    rain.volume = rainSlider.value / 100;
    }
    
    function setFireVolume(){
    fire.volume = fireSlider.value / 100;
    }
    
    function setFlorestVolume(){
    florest.volume = florestSlider.value / 100;
    }
  
    function setMarketVolume(){
    market.volume = marketSlider.value / 100;
    }

    return{
        setFireVolume,
        setFlorestVolume,
        setMarketVolume,
        setRainVolume
    }
}