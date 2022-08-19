import React from 'react'
import CarFront from '../carAllSides/carFront'
import './carChoosenSide.scss'
import backLogo from '../../img/back.svg'
import CarBack from '../carAllSides/carBack'
import CarRoof from '../carAllSides/carRoof'
import CarLeft from '../carAllSides/carLeft'
import CarRight from '../carAllSides/carRight'

function CarChoosenSide(props) {
  return (
    <div>
        <div className='carchoosen__button'><button onClick={()=>props.setAddProgressState("1")} className='carchoosen__button-back'><img src={backLogo} alt="Назад" /></button></div>
        {props.carPart==="front"? <CarFront />:
        props.carPart==="back"? <CarBack />:
        props.carPart==="roof"? <CarRoof />:
        props.carPart==="left"? <CarLeft />:
        props.carPart==="right"? <CarRight />: <div></div>}
    </div>
  )
}

export default CarChoosenSide