import React from 'react'
import style from './headingComponent.module.css'
import { Component } from 'react'

class Heading extends Component{
    render(){
        return (
            <div className={style.container}>
                Calculator
            </div>
        )
    }
}

export default Heading;