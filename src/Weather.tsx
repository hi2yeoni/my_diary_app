/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './Weather.css';
import {createStore} from "redux";
import { act } from 'react-dom/test-utils';
//import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherGrop:{[key:number]:{colors:string}} ={
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
  let weatherIdValue: number= Math.floor(id/100); //weather id 계산

  const weatherModify = (state:any, action:{type:number}) =>{ //reducer
    switch(action.type){
      case 800:
        return weatherGrop[0].colors;
      default:
        return weatherGrop[weatherIdValue].colors;
    }
  };
  const weatherStore = createStore(weatherModify); //create store
  const updateWeather = () =>{  
    document.body.className=weatherStore.getState();
  };

  weatherStore.subscribe(updateWeather);
  weatherStore.dispatch({type: id});

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