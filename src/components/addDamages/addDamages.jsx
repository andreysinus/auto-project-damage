import React from 'react'
import CarChoosenSide from '../carChoosenSide/carChoosenSide';
import CarViews from '../carViews/carViews'
import './addDamages.scss'

function AddDamages(props) {
  return (
    <div className='adddamages'>
      { props.addProgressState==="1" ? <CarViews carPart={props.carPart} setCarPart={props.setCarPart} setAddProgressState={props.setAddProgressState}/> 
      : props.addProgressState==="2" ? <CarChoosenSide carPart={props.carPart} setAddProgressState={props.setAddProgressState}/> 
      : props.addProgressState==="3" ? <div>три</div> 
      : <div>Ошибка</div>}
    </div>
  )
}

export default AddDamages