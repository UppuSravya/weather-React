import axios from 'axios';
const weatherkey = 'fffff1b8b30bbeac682f039fd7e46f9e';
const rootURL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+weatherkey;
// const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${weatherkey}`;
export default function getWeather(city) {
  
    const  url = `${rootURL}&q=${city},IN`;
    // console.log(url);

    /*axios gets data from yrl*/

    let data = axios.get(url);
    return {
        type: 'GET_WEATHER',
        payload: data
    }
}