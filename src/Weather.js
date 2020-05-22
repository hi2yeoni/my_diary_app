/* eslint-disable react/jsx-no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import './Weather.css';
//import {MaterialCommunityIcons} from "@expo/vector-icons";
const weatherGrop ={
  0: {colors : "clear"},
  2: {colors : "thunderstorm"},
  3: {colors : "drizzle"},
  5: {colors : "rain"},
  6: {colors : "snow"},
  7: {colors : "atmosphere"},
  8: {colors : "cloud"}   
}

const Weather = ({ location, weather, temp, id}) =>{

  const weatherId = id ===800? weatherGrop[0].colors: weatherGrop[parseInt(id/100)].colors; 
  document.body.className= weatherId;
  
  return (
    
    <div className="weatherGrid">
      <div className="weatherIcon">
      </div>
      <div className="weatherInfo">
        <h2> {location} {weather} </h2>
        <h3> {Math.ceil(temp - 273.15)}℃ </h3>
      </div>
    </div>
  );
}

Weather.propTypes={
  location : PropTypes.string.isRequired,
  weather : PropTypes.string.isRequired,
  temp : PropTypes.number.isRequired
}
export default Weather;