import React from 'react'
import { TitleCheck } from '../checkTitle'
import { Unific } from './unification'
import './carImageButton.scss'
import { TitleCheckEn } from '../checkTitleEn'

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
    let lang=true
    function updateOptions(){
      let options = []
      if (props.damageList!==undefined){
        if (props.damageList[0].Object.charCodeAt(0)>122)
        {
          lang=false
        }
        else{
          lang=true
        }
      }
      props.damageList.map((text)=>{
        if (text.Object===Unific(lang?TitleCheckEn(props.selectedPart):TitleCheck(props.selectedPart))){
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
        <a href="#detail" type='button' className={buttonClass} onClick={()=> {var arr=updateOptions(lang?TitleCheckEn(props.selectedPart):TitleCheck(props.selectedPart)); props.setChoosenCarParts(arr); props.setAddProgressState("3");props.setSelectedPart({name:TitleCheck(props.selectedPart), object_id: "998"}); props.getCarDamages(arr[0].object_id);}}>
            <img src={props.src} alt={props.selectedPart}/>
        </a>
  )
}

export default CarImageButton