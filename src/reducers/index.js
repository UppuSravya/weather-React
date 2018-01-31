import { combineReducers } from 'redux';
import getWeather from './getwaetherreducer';

const rootReducer = combineReducers({
    weatherInfo: getWeather

})

export default rootReducer;