import React from 'react'
import CarImageButton from '../carImageButton/carImageButton'
import underPath from '../../img/carViews/roof/underPath.svg'
import hood from '../../img/carViews/roof/hood-2.svg'
import roof from '../../img/carViews/roof/roof-2.svg'
import windshield from '../../img/carViews/roof/windshield-2.svg'
import trunkGlass from '../../img/carViews/roof/trunk.svg'

function CarRoofNew(props) {
  return (
    <div>
        <div className='carSides'>
                <img className='carRoof__underpath' src={underPath} alt='Авто'/>
                <CarImageButton src={hood} selectedPart="hood" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
                <CarImageButton src={windshield} selectedPart="windshield" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
                <CarImageButton src={roof} selectedPart="roof" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
                <CarImageButton src={trunkGlass} selectedPart="rearGlass" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
        </div>
    </div>
  )
}

export default CarRoofNew