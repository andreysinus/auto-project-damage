import React from 'react'
import './carAllSides.scss'
import leftSVG from'../../img/carSides/leftSide.svg'

function CarLeft() {
  return (
    <div className='carSides'>
        <div className='carLeft__image'>
            <img src={leftSVG} alt="Крыша" />
        </div>
    </div>
  )
}

export default CarLeft