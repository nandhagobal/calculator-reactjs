import React, { Component } from 'react'
import style from './operator.module.css'
class Operators extends Component{
    render(){
        return(
            <div className={style.operator}>
                <button onClick={(event)=>this.props.buttonHandler(event)} value="C">C</button>
                <button onClick={(event)=>this.props.buttonHandler(event)} value="/">/</button>
                <button onClick={(event)=>this.props.buttonHandler(event)} value="*">*</button>
                <button onClick={(event)=>this.props.buttonHandler(event)} value="-">-</button>
                <button onClick={(event)=>this.props.buttonHandler(event)} value="+">+</button>
            </div>
        )
    }
}

export default Operators;