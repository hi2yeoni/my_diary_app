/* eslint-disable no-undef */
import React from 'react';
//import axios from 'axios';
import GetApi from "./GetApi"

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
      </div>
    );
  }
}
export default App;
