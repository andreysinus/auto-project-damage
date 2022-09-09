import React from 'react'
import './carAllSides.scss'
import CarImageButton from '../carImageButton/carImageButton'

import fFender from '../../img/carViews/side/frontFender.svg'
import rFender from '../../img/carViews/side/rearFender.svg'
import fDoor from '../../img/carViews/side/frontDoor.svg'
import rDoor from '../../img/carViews/side/rearDoor.svg'
import threshold from '../../img/carViews/side/threshold.svg'
import wheel from '../../img/carViews/side/wheel.svg'
import disk from '../../img/carViews/side/disk.svg'
import fPane from '../../img/carViews/side/frontPane.svg'
import rPane from '../../img/carViews/side/rearPane.svg'
import fGlass from '../../img/carViews/side/frontGlass.svg'
import rGlass from '../../img/carViews/side/rearGlass.svg'

function CarRightNew(props) {
  return (
    <div>
        <div className='carSides carSides__right'>
        <CarImageButton src={fFender} selectedPart="fFender" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
        <div className="carSide__wheel">
          <CarImageButton src={wheel} selectedPart="wheel" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
          <CarImageButton src={disk} selectedPart="disk" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
        </div>
        <CarImageButton src={fDoor} selectedPart="fDoor" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
        <CarImageButton src={rDoor} selectedPart="rDoor" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
        <CarImageButton src={threshold} selectedPart="rThreshold" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
        <CarImageButton src={rFender} selectedPart="rFender" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
        <div className="carSide__rearwheel">
          <CarImageButton src={wheel} selectedPart="wheel" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
          <CarImageButton src={disk} selectedPart="disk" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
        </div>
        <div className='carSide__glasses'>
         <CarImageButton src={fPane} selectedPart="fPane" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
          <CarImageButton src={fGlass} selectedPart="fGlass" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
          <CarImageButton src={rGlass} selectedPart="rGlass" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
          <CarImageButton src={rPane} selectedPart="rPane" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages} damageList={props.damageList}/>
        </div>
        </div>
    </div>
  )
}

export default CarRightNew