/* eslint-disable react/jsx-no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import './Weather.css';
//import {MaterialCommunityIcons} from "@expo/vector-icons";

function Weather({location, weather, temp}) {
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