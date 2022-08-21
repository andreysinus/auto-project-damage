import './selectDegree.scss'
import React from 'react'

function SelectDegree(props) {
    let classButton='selectdegree__button'
    if (props.options.degree === props.degree){
        classButton+= ' active'
    }
    return (
        <div>
            <button className={classButton} onClick={()=>{props.options.degree=props.degree; props.updateParts()}}>{props.title}</button>
        </div>
    )
}

export default SelectDegree