import React from 'react'
import './carAllSides.scss'
import rearSVG from'../../img/carSides/back.svg'

function CarBack() {
  return (
    <div className='carSides'>
        <div className='carBack__image'>
            <img src={rearSVG} alt="Задняя часть авто" />
        </div>
    </div>
  )
}

export default CarBack