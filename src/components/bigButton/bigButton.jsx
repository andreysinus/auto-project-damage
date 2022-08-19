import React from 'react'
import './bigButton.scss'
import bigButton from '../../img/bigButton.svg'

function BigButton(props) {
    let classNames="bigbutton "
    classNames+="bigbutton__" + props.carPart
  return (
    <button type='button' className={classNames} onClick={()=> {props.setActive(true); props.setPart(props.carPart)}}><img src={bigButton} alt="Кнопка" /></button>
  )
}

export default BigButton