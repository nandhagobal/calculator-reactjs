import React, { Component } from 'react';
// import logo from './logo.svg';
import style from './App.module.css';
import Heading from './components/headingComponent/headingComponent';
import Calculator from './components/calculatorComponent/calculator/calculator';

class App extends Component {
  render(){
  return (
    <div className={style.container}>
      <Heading></Heading>
      <Calculator></Calculator>
    </div>
  );
}
}
export default App;
