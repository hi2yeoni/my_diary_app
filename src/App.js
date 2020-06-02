/* eslint-disable no-undef */
import React from 'react';
//import axios from 'axios';
import GetApi from "./GetWeather.js"
import Routes from "./Router";

class App extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount() { //GPS
    document.title = "My Diary"
  }
  
  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;
