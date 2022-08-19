import React from 'react'
import carViews from '../../img/carAllViews.svg'
import './carViews.scss'

function CarViews(props) {
  return (
    <div>
        <div className='carviews'>
            <img src={carViews} alt="Стороны авто" />
        </div>
    </div>
  )
}

export default CarViews