import React from 'react'
import CarChoosenSide from '../carChoosenSide/carChoosenSide';
import CarViews from '../carViews/carViews'
import ChoosingIssues from '../choosingIssues/choosingIssues';
import './addDamages.scss'



function AddDamages(props) {

  return (
    <div className='adddamages'>
      { props.addProgressState==="1" ? <CarViews carPart={props.carPart} setCarPart={props.setCarPart} setAddProgressState={props.setAddProgressState}/> 
      : props.addProgressState==="2" ? <CarChoosenSide addBucket={props.addBucket}
                                                       selectMenuState={props.selectMenuState}
                                                       setSelectMenuState={props.setSelectMenuState}
                                                       setSelectedPart={props.setSelectedPart}
                                                       selectedPart={props.selectedPart}
                                                       addProgressState={props.addProgressState}
                                                       setAddProgressState={props.setAddProgressState}
                                                       carPart={props.carPart}
                                                       setCarPart={props.setCarPart}
                                                       setChoosenCarParts={props.setChoosenCarParts}
                                                       /> 

      : props.addProgressState==="3" ?  <ChoosingIssues selectedPart={props.selectedPart} setAddProgressState={props.setAddProgressState}
                                        choosenCarParts={props.choosenCarParts}
                                        setChoosenCarParts={props.setChoosenCarParts}/>
      : <div>Ошибка</div>}
    </div>
  )
}

export default AddDamages