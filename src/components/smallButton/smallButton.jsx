import React from 'react'
import './smallButton.scss'
import { TitleCheck } from '../checkTitle'
import damages from '../../jsons/response.json'
import { Unific } from './unification'




function SmallButton(props) {
  
    let classNames="smallbutton "
    classNames+="smallbutton__" + props.selectedPart

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
    <button type='button' className={classNames} onClick={()=> {props.setChoosenCarParts(updateOptions(TitleCheck(props.selectedPart))); props.setAddProgressState("3"); props.setSelectedPart({name:TitleCheck(props.selectedPart), object_id: "998"})}}><svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="29" height="29" rx="7" fill="#615187" stroke="white" stroke-width="4"/>
    <path d="M24.944 14.0641L18.4701 14.0634L18.4698 8.05603C18.4701 6.92052 17.5492 6 16.4137 6C15.2786 6 14.358 6.92052 14.358 8.05603V14.0637L8.05603 14.0634C6.92052 14.0637 6 14.9842 6 16.1194C6.0007 17.2549 6.92052 18.1751 8.05603 18.1751H14.358V24.944C14.358 26.0805 15.2786 27 16.4141 27C17.5496 27 18.4697 26.0795 18.4701 24.9447V18.1751H24.9447C26.0795 18.1751 27 17.2549 27 16.1201C27.001 14.9839 26.0795 14.0634 24.944 14.0641Z" fill="white"/>
    </svg>
    </button>
  )
}

export default SmallButton