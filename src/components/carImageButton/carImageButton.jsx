import React from 'react'
import { TitleCheck } from '../checkTitle'
import damages from '../../jsons/response.json'
import { Unific } from './unification'
import './carImageButton.scss'

function CarImageButton(props) {
    let buttonClass="carImageButton "
    buttonClass+="carImageButton__" + props.selectedPart

    function findType(options, dam){
      var mapIndex=false
      
      options.map((text, index)=>{
        if (text.object_id===dam.Object_id && text.type===dam.Type){
          mapIndex=index
        }
        return 0
      })
      return mapIndex
    }
    function updateOptions(){
      let options = []
      damages.map((text)=>{
        if (text.Object===Unific(TitleCheck(props.selectedPart))){
          let x = findType(options, text)
          if (x!==false){
            switch (text.Grade){
              case "1": options[x].price[0]=text.Price; break
              case "2": options[x].price[1]=text.Price; break
              case "3": options[x].price[2]=text.Price; break
              default: break
            }
          }
          else{
            options.push({name: text.Object, object_id:text.Object_id, type: text.Type, price: [0,0,0], degree: "1", photo: undefined, user: false})
            x=options.length-1;
            switch (text.Grade){
              case "1": options[x].price[0]=text.Price; break
              case "2": options[x].price[1]=text.Price; break
              case "3": options[x].price[2]=text.Price; break
              default: break
            }
          }
        }
        return 0
      })
      return options
    }
  return (
        <button type='button' className={buttonClass} onClick={()=> {props.setChoosenCarParts(updateOptions(TitleCheck(props.selectedPart))); props.setAddProgressState("3");props.setSelectedPart({name:TitleCheck(props.selectedPart), object_id: "998"})}}>
            <img src={props.src} alt={props.selectedPart}/>
        </button>
  )
}

export default CarImageButton