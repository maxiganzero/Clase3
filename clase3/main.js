import fetch from "node-fetch"

const apiNasa = 'https://api.nasa.gov/planetary/apod?api_key=3ccRPcxBnfteDLocumVutnjQFTZYXzQS6PCcwVCM'
const pokeApi = 'https://pokeapi.co/api/v2/pokemon-species'
const apiWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=47255f266c2180f734233c10c15d3ac4'
//const MarvelApi = 'http://developer.marvel.com/v1/public/comics?ts=1&apikey=d5cc16b3a7f5e47464b014201980b10b'
const ChuckApi = 'https://api.chucknorris.io/jokes/random'
const RickAndMortyApi = 'https://rickandmortyapi.com/api/character'
const DogApi = 'https://dog.ceo/api/breeds/list/all'


/*Promise.allSettled([apiNasa, pokeApi, apiWeather])
    .then(response => response.json())
    .then(data => mostrarData(data))

    const mostrarData = (data) => {
        console.log(data)
    }
*/
fetch(apiNasa)
    .then(response => response.json())
    .then(data => mostrarNasaData(data))

    const mostrarNasaData = (data) => {
        console.log(data)
    }



fetch(pokeApi)
    .then(response => response.json())
    .then(data => mostrarPokeData(data))

    const mostrarPokeData = (data) => {
        console.log(data)
    }


fetch(apiWeather)
    .then(response => response.json())
    .then(data => mostrarWeatherData(data))

    const mostrarWeatherData = (data) => {
        console.log(data)
    }


/*fetch(MarvelApi)
    .then(response => response.json())
    .then(data => mostrarMarvelData(data))

    const mostrarMarvelData = (data) => {
        console.log(data)
    }
*/

fetch(ChuckApi)
    .then(response => response.json())
    .then(data => mostrarChuckData(data))

    const mostrarChuckData = (data) => {
        console.log(data)
    }



fetch(RickAndMortyApi)
    .then(response => response.json())
    .then(data => mostrarRickData(data))

    const mostrarRickData = (data) => {
        console.log(data)
    }


fetch(DogApi)
    .then(response => response.json())
    .then(data => mostrarDogData(data))

    const mostrarDogData = (data) => {
        console.log(data)
    }
