import React from 'react'
import './choosingIssues.scss'
import backLogo from '../../img/back.svg'
function ChoosingIssues(props) {
  return (
    <div>
      <div className="choosingissue__header">
        <div className='choosingissue__back'><button onClick={()=>props.setAddProgressState("2")} className='carchoosen__button-back'><img src={backLogo} alt="Назад" /></button>
        </div>
        <h1 className='choosingissue__title'>{props.selectedPart.name}</h1>
      </div>
    </div>
  )
}

export default ChoosingIssues