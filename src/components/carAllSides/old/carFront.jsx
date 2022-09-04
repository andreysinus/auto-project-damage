import React from 'react'
import SmallButton from '../../smallButton/smallButton'
import '../carAllSides.scss'

function CarFront(props) {
  return (
    <div className='carSides'>
      <div className='carSides__addbuttons'>
          <SmallButton selectedPart="fBumper" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <SmallButton selectedPart="lHeadlight" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <SmallButton selectedPart="rHeadlight" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <SmallButton selectedPart="rFoglight" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <SmallButton selectedPart="lFoglight" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <SmallButton selectedPart="rMirror" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <SmallButton selectedPart="lMirror" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <SmallButton selectedPart="windshield" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          <div className='carFront__hood'>
            <SmallButton selectedPart="hood" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts}/>
          </div>
        </div>
    </div>
  )
}

export default CarFront