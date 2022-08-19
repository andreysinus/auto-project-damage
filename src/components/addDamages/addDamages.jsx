import React, { useState } from 'react'
import CarChoosenSide from '../carChoosenSide/carChoosenSide';
import CarViews from '../carViews/carViews'
import './addDamages.scss'

function AddDamages(props) {
  const [carPart, setCarPart] = useState("None");
  return (
    <div className='adddamages'>
      { props.addProgressState==="1" ? <CarViews carPart={carPart} setCarPart={setCarPart} setAddProgressState={props.setAddProgressState}/> 
      : props.addProgressState==="2" ? <CarChoosenSide carPart={carPart}/> 
      : props.addProgressState==="3" ? <div>три</div> 
      : <div>Ошибка</div>}
    </div>
  )
}

export default AddDamages