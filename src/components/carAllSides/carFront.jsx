import React from 'react'
import './carAllSides.scss'
import frontSVG from'../../img/carSides/front.svg'

function CarFront() {
  return (
    <div className='carSides'>
        <div className='carFront__image'>
            <img src={frontSVG} alt="Передняя часть авто" />
        </div>
    </div>
  )
}

export default CarFront