/* eslint-disable no-undef */
import React from 'react';
//import axios from 'axios';
import GetApi from "./GetApi"
import Calender from './Calender';
import Category from './Category';

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
        <GetApi/>
        <Category/>
        <Calender/>

      </div>
    );
  }
}
export default App;
