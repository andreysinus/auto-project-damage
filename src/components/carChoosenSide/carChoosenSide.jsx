import React from 'react'
import './carChoosenSide.scss'
import backLogo from '../../img/back.svg'

import CarRightNew from '../carAllSides/carRightNew'
import CarRoofNew from '../carAllSides/carRoofNew'
import CarFrontNew from '../carAllSides/carFrontNew'
import CarBackNew from '../carAllSides/carBackNew'
import CarLeftNew from '../carAllSides/carLeftNew'

function CarChoosenSide(props) {
  return (
    <div>
        <div className='carchoosen__button'><button onClick={()=>props.setAddProgressState("1")} className='carchoosen__button-back'><img src={backLogo} alt="Назад" /></button></div>
        {props.carPart==="front"? <CarFrontNew addBucket={props.addBucket}
                                            selectMenuState={props.selectMenuState}
                                            setSelectMenuState={props.setSelectMenuState}
                                            setSelectedPart={props.setSelectedPart}
                                            selectedPart={props.selectedPart}
                                            addProgressState={props.addProgressState}
                                            setAddProgressState={props.setAddProgressState}
                                            carPart={props.carPart}
                                            setCarPart={props.setCarPart}
                                            setChoosenCarParts={props.setChoosenCarParts}/>:

         props.carPart==="back"? <CarBackNew addBucket={props.addBucket}
                                          selectMenuState={props.selectMenuState}
                                          setSelectMenuState={props.setSelectMenuState}
                                          setSelectedPart={props.setSelectedPart}
                                          selectedPart={props.selectedPart}
                                          addProgressState={props.addProgressState}
                                          setAddProgressState={props.setAddProgressState}
                                          setChoosenCarParts={props.setChoosenCarParts}/>:

         props.carPart==="roof"? <CarRoofNew addBucket={props.addBucket}
                                          selectMenuState={props.selectMenuState}
                                          setSelectMenuState={props.setSelectMenuState}
                                          setSelectedPart={props.setSelectedPart}
                                          selectedPart={props.selectedPart}
                                          addProgressState={props.addProgressState}
                                          setAddProgressState={props.setAddProgressState}
                                          setChoosenCarParts={props.setChoosenCarParts}/>:

         props.carPart==="left"? <CarLeftNew addBucket={props.addBucket}
                                          selectMenuState={props.selectMenuState}
                                          setSelectMenuState={props.setSelectMenuState}
                                          setSelectedPart={props.setSelectedPart}
                                          selectedPart={props.selectedPart}
                                          addProgressState={props.addProgressState}
                                          setAddProgressState={props.setAddProgressState}
                                          setChoosenCarParts={props.setChoosenCarParts}/>:
                                          
         props.carPart==="right"? <CarRightNew addBucket={props.addBucket}
                                            selectMenuState={props.selectMenuState}
                                            setSelectMenuState={props.setSelectMenuState}
                                            setSelectedPart={props.setSelectedPart}
                                            selectedPart={props.selectedPart}
                                            addProgressState={props.addProgressState}
                                            setAddProgressState={props.setAddProgressState}
                                            setChoosenCarParts={props.setChoosenCarParts}/>: <div></div>}
    </div>
  )
}

export default CarChoosenSide