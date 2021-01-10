import React, { Component } from 'react'
import style from './keyRow.module.css'
class KeyRow extends Component{
    row=this.props.array.map((val)=>{
        return <button className={style.button} key={val} value={val} onClick={(event)=>this.props.buttonHandler(event)} >{val}</button>
    }
    );
    render(){
        return(
            <div className={style.rows}>
                {this.row}
            </div>
        )
    }
}

export default KeyRow;