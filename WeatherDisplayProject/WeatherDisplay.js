

    const axios = require("axios");

    const BASE_URL = 'https://community-open-weather-map.p.rapidapi.com' ;

    module.exports = {
        getWeather : (city) => axios ({
            method : 'GET' ,
            url : BASE_URL + '/weather' ,
            headers : {
                "x-rapidapi-host": 'community-open-weather-map.p.rapidapi.com',
                "x-rapidapi-key" : 'a8477c421cmsh24b0d656f3a84b8p14f319jsn4187c07c5049'
            } ,
            params : {
                q : city 
            }
        })
    } ;

