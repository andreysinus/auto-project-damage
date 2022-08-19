import React from 'react'
import carViews from '../../img/carAllViews.svg'
import BigButton from '../bigButton/bigButton'
import './carViews.scss'

function CarViews(props) {
  return (
    <div>
        <BigButton carPart="front" setPart={props.setCarPart} setAddProgressState={props.setAddProgressState}/>
        <BigButton carPart="roof" setPart={props.setCarPart} setAddProgressState={props.setAddProgressState}/>
        <BigButton carPart="left" setPart={props.setCarPart} setAddProgressState={props.setAddProgressState}/>
        <BigButton carPart="right" setPart={props.setCarPart} setAddProgressState={props.setAddProgressState}/>
        <BigButton carPart="roof" setPart={props.setCarPart} setAddProgressState={props.setAddProgressState}/>
        <BigButton carPart="back" setPart={props.setCarPart} setAddProgressState={props.setAddProgressState}/>
        <div className='carviews'>
            <img src={carViews} alt="Стороны авто" />
        </div>
    </div>
  )
}

export default CarViews