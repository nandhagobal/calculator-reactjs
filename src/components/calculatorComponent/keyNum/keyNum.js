import React, { Component } from 'react'
import style from './keyNum.module.css'
import KeyRow from '../keyRow/keyRow';

class KeyNum extends Component{
    render(){
        return(
            <div className={style.keyNum}>
                <KeyRow array={['1','2','3']} buttonHandler={this.props.buttonHandler}></KeyRow>
                <KeyRow array={['4','5','6']} buttonHandler={this.props.buttonHandler}></KeyRow>
                <KeyRow array={['7','8','9']} buttonHandler={this.props.buttonHandler}></KeyRow>
                <KeyRow array={['.','0','=']} buttonHandler={this.props.buttonHandler}></KeyRow>
            </div>
        )
    }
}

export default KeyNum;