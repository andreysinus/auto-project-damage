import React from 'react'
import './choosingIssues.scss'
import backLogo from '../../img/back.svg'
import damages from '../../jsons/response.json'
import {Unific} from './unification.js'

function ChoosingIssues (props){
  let options = []
      damages.map((text) => {
        if (text.Object===Unific(props.selectedPart.name)){
          options.push({name: text.Object, type: text.Type, price: text.Price, degree: "1", photo: undefined})
          return 0
        }
        else{
          return 0
        }
      }
      )
  //function addNewIssue(issue){}
  return (
    <div>
      <div className="choosingissue__header">
        <div className='choosingissue__back'><button onClick={()=>props.setAddProgressState("2")} className='carchoosen__button-back'><img src={backLogo} alt="Назад" /></button>
        </div>
        <h1 className='choosingissue__title'>{props.selectedPart.name}</h1>
      </div>
      <div className='choosingissue__body'>
        <p className='choosingissue__body-title'>Выберите тип, фотографию<br/>и степень повреждения:</p>
        {options.map((text, index)=>{
          return <div key={index}>{text.name} {text.type}</div>
        })}
      </div>
      <div className='choosingissue__footer'>
        <button className='choosingissue__addbutton'>Добавить повреждения</button>
      </div>
    </div>
  )
}

export default ChoosingIssues