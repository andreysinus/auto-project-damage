import React from 'react'
import './smallButton.scss'
import smallButton from '../../img/smallButton.svg'
import { TitleCheck } from '../checkTitle'
import damages from '../../jsons/response.json'
import { Unific } from './unification'

function SmallButton(props) {
    let classNames="smallbutton "
    classNames+="smallbutton__" + props.selectedPart

    function updateOptions(){
      let options = []
      damages.map((text) => {
        if (text.Object===Unific(TitleCheck(props.selectedPart))){
          options.push({name: text.Object, object_id:text.Object_id, type: text.Type, price: text.Price, degree: "1", photo: undefined})
          return 0
        }
        else{
          return 0
        }
      }
      )
      return options
    }
  return (
    <button type='button' className={classNames} onClick={()=> {props.setChoosenCarParts(updateOptions(TitleCheck(props.selectedPart))); props.setAddProgressState("3"); props.setSelectedPart({name:TitleCheck(props.selectedPart), object_id: "998"})}}><img src={smallButton} alt="Кнопка" /></button>
  )
}

export default SmallButton