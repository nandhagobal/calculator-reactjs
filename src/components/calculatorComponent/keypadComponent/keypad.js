import React, { Component } from 'react'
import style from './keypad.module.css'
import KeyNum from '../keyNum/keyNum'
import Operators from '../operatorComponent/operator'

class Keypad extends Component{
    render(){
        return(
            <div className={style.keypad}>
                <KeyNum buttonHandler={this.props.buttonHandler}></KeyNum>
                <Operators buttonHandler={this.props.buttonHandler}></Operators>
            </div>
        )
    }
}

export default Keypad;