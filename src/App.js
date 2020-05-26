/* eslint-disable no-undef */
import React from 'react';
//import axios from 'axios';
import GetApi from "./GetApi"
import Calender from './Calender';
import Category from './Category';
import Test from './Testfile';
import DemoApp from './DemoApp';

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
        <Test/>

      </div>
    );
  }
}
export default App;
