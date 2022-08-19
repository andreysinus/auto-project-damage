import React, { useState } from 'react'
import CarViews from '../carViews/carViews'
import './addDamages.scss'

function AddDamages(props) {
  const [carPart, setCarPart] = useState("None");
  return (
    <div className='adddamages'>
      { props.addProgressState==="1" ? <CarViews carPart={carPart} setCarPart={setCarPart}/> 
      : props.addProgressState==="2" ? <div>два</div> 
      : props.addProgressState==="3" ? <div>три</div> 
      : <div>Ошибка</div>}
    </div>
  )
}

export default AddDamages