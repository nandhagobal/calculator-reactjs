import React, { Component } from 'react'
import style from './display.module.css'

class Display extends Component{
    render(){
        return(
            <div className={style.area}>
                <div className={style.exp}>
                {this.props.exp}
                </div>
                 {this.props.ans?   
                <div className={style.ans}>
                    ={this.props.ans}
                </div>:null}
            </div>
        )
    }
}


export default Display;