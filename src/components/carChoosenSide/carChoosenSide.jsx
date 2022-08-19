import React from 'react'
import CarFront from '../carAllSides/carFront'
import './carChoosenSide.scss'

function CarChoosenSide(props) {
  return (
    <div>
        {props.carPart==="front"? <CarFront />: <div></div>}
    </div>
  )
}

export default CarChoosenSide