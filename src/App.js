/* eslint-disable no-undef */
import React from 'react';
//import axios from 'axios';
import Weather from './Weather';

class App extends React.Component {
  state = {
    isLoading: true,
    weather: null
  };


  getWeather = ({ latitude, longitude }) => { //GPS 받은 주소로 api 연결
    const API_KEY = '894c0c1d03546d1843b5efd334d6e479';
    //const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    //weather.data = weather.data.JSON();
    fetch(`https://api.openweathermap.org/data/2.5/weather?&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then(response => response.json()) //json으로 변환
      .then(data => {
        console.log(data);
        console.log("This is test!",data.weather[0].main);
        this.setState({ isLoading: false, weather: data })
      });
  }
  componentDidMount() { //GPS
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.getWeather(position.coords);
      },
      (error) => {
        console.log(error);
      }
    );

  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
       {isLoading ? <h1>Weather</h1> : <Weather data={this.state.weather}/>}
      </div>
    );
  }
}

export default App;
