import React from 'react'
import carViews from '../../img/carAllViews.svg'
import './addDamages.scss'

function AddDamages() {
  return (
    <div className='adddamages'>
      <div className='carviews'>
        <img src={carViews} alt="Стороны авто" />
      </div>
    </div>
  )
}

export default AddDamages