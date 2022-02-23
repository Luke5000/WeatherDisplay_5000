// Some code will go here...

/*
var axios = require("axios").default;

var options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
        q: 'London,uk',
        lat: '0',
        lon: '0',
        callback: 'test',
        id: '2172797',
        lang: 'null',
        units: 'imperial',
        mode: 'xml'
    },
    headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'a8477c421cmsh24b0d656f3a84b8p14f319jsn4187c07c5049'
    }
}; */





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
}