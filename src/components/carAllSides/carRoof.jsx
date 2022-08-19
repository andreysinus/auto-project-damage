import React from 'react'
import './carAllSides.scss'
import roofSVG from'../../img/carSides/roof.svg'

function CarRoof() {
  return (
    <div className='carSides'>
        <div className='carRoof__image'>
            <img src={roofSVG} alt="Крыша" />
        </div>
    </div>
  )
}

export default CarRoof
