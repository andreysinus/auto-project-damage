import React from 'react'
import './smallButton.scss'
import smallButton from '../../img/smallButton.svg'
import { TitleCheck } from '../checkTitle'

function SmallButton(props) {
    let classNames="smallbutton "
    classNames+="smallbutton__" + props.selectedPart
  return (
    <button type='button' className={classNames} onClick={()=> {props.setAddProgressState("3"); props.setSelectedPart({name:TitleCheck(props.selectedPart), object_id: "998"})}}><img src={smallButton} alt="Кнопка" /></button>
  )
}

export default SmallButton