import React, {Component } from 'react';
import './App.css';
import Display from './Display' ;
class App extends Component {
    render(){
        return (
            <div className="background">
            <h1 className ='div-class'> React Form! </h1>
            <button className ='button-app'> Switch users </button>
            <Display name="Bhavika" age="20" month="Nov" />
            <Display name="Gupta" age="19" month="Nov" />
            </div>
        );
    }
}
export default App;