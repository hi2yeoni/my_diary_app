/* eslint-disable react/jsx-no-undef */
import React from 'react';
import WeatherCss from './Weather.css';

const Weather = ({ data }) => {
  return (
    <div class="weatherGrid">
      <div class="weatherIcon">
        
      </div>
      <div class="weatherInfo">
        <h2> {data.weather[0].main} </h2>
        <h3> {Math.ceil(data.main.temp - 273.15)}℃ </h3>
      </div>
    </div>
  );
}

export default Weather;