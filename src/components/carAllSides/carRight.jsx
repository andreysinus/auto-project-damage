import React from 'react'
import './carAllSides.scss'
import rightSVG from'../../img/carSides/rightSide.svg'

function CarRight() {
  return (
    <div className='carSides'>
        <div className='carRight__image'>
            <img src={rightSVG} alt="Крыша" />
        </div>
    </div>
  )
}

export default CarRight