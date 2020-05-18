/* eslint-disable react/jsx-no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import './Weather.css';
//import {MaterialCommunityIcons} from "@expo/vector-icons";
const weatherGrop ={
  0: {colors : <style className="clear"/>},
  2: {colors : <style className="thunderstorm"/>},
  3: {colors : <style className="drizzle"/>},
  5: {colors : <style className="rain"/>},
  6: {colors : <style className="snow"/>},
  7: {colors : <style className="atmosphere"/>},
  8: {colors : <style className="cloud"/>}   
}

const Weather = ({ location, weather, temp, key}) =>{
  
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