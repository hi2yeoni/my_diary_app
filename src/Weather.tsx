/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './Weather.css';
//import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherGrop:any ={
  0: {colors : "clear"},
  2: {colors : "thunderstorm"},
  3: {colors : "drizzle"},
  5: {colors : "rain"},
  6: {colors : "snow"},
  7: {colors : "atmosphere"},
  8: {colors : "cloud"}   
}
interface weatherParams{
  location : string;
  weather : string;
  temp : number;
  id : number;
}
const Weather = ({ location, weather, temp, id}:weatherParams) =>{
  let weatherIdValue: number= Math.floor(id/100);
  const weatherId = (id ===800? weatherGrop[0].colors: weatherGrop[weatherIdValue].colors); 
  
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


export default Weather;