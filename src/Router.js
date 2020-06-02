import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Weather from './Weather.tsx';
import Calendar from './page/Calendar';
import Memo from './page/Memo';
import Category from './Category';
import GetWeather from './GetWeather.js';

export default() => (
    <Router>
        <Category/>
        <Route exact path="/" component={GetWeather}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/memo" component={Memo}/>
    </Router>
)