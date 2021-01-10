import React, { Component } from 'react'
import style from './calculator.module.css'
import Display from '../display/display'
import Keypad from '../keypadComponent/keypad'
import Operators from '../operatorComponent/operator'

class Calculator extends Component{
    state={
        expression:"",
        ans:null
    }
    buttonClickHandler=(e)=>{
        console.log(e.target.value);
        if(e.target.value=='C'){
            
            this.setState({
                expression:'',
                ans:null
            })
            return;
        }
        if(e.target.value=='='){
            
        this.setState({
            ans:eval(this.state.expression)
        })
            return;
        }
        this.setState({
            expression:this.state.expression+e.target.value,
        })
    }
    render(){
        return(
    <div className={style.Calculator}>
        <Display ans={this.state.ans} exp={this.state.expression}></Display>
        <Keypad buttonHandler={this.buttonClickHandler}></Keypad>
    </div>
        );
    }
}


export default Calculator;