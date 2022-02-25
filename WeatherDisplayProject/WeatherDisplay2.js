
var socket = io();



var i = 1 ;
var response ;

function printToScreen(){
    document.write(response.data.data.weather.heading);
    document.write(response.data.data.weather);

    document.write(response.data.data.main.heading);
    document.write(response.data.data.main);

    document.write(response.data.data.visibility.heading);
    document.write(response.data.data.visibility);

    document.write(response.data.data.wind.heading);
    document.write(response.data.data.wind);

    document.write(response.data.data.clouds.heading);
    document.write(response.data.data.clouds);

    document.write(response.data.data.name.heading);
    document.write(response.data.data.name); 

     

}

const WeatherAPI = require('./WeatherDisplay');   
const ApiCall = () => {
    if(i==1){
     response = WeatherAPI.getWeather('London,GB');
      printToScreen() ;
      i++ ;
    }

    else if(i==2){
     response = WeatherAPI.getWeather('Paris,FR');
    printToScreen();
      i++ ;
    }

    else if(i==3){
     response = WeatherAPI.getWeather('Berlin,DE');
     printToScreen() ;
     i++ ;
    }

    else if(i==4){
     response = WeatherAPI.getWeather('Dublin,IE');
     printToScreen();
     i++ ;
    }

    else if(i==5){
     response = WeatherAPI.getWeather('Madrid,ES');
     printToScreen();
     i++ ;
    }

    else {
        i = 1 ;
    }

}



window.setInterval(ApiCall() ,30000 ); 
