export default function controls({
    florest,
    rain,
    fire,
    market,
}){

  
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

  return{
    playMarket,
    playFire,
    playRain,
    playFlorest,    
  }
}