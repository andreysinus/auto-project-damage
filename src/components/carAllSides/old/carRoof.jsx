import React from 'react'
import './carAllSides.scss'

import SmallButton from '../../smallButton/smallButton'

function CarRoof(props) {
  return (
    <div className='carSides'>
        <div className='carSides__addbuttons'>
            <SmallButton selectedPart="roof" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
            <SmallButton selectedPart="hood" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
        </div>
        <div className='carRoof__image'>
        
        </div>
    </div>
  )
}

export default CarRoof
