import React from 'react'
import AddDamages from '../addDamages/addDamages'
import Bucket from '../bucket/bucket'
import FinalDamages from '../finalDamages/finalDamages'
import SignaturePart from '../signaturePart/signaturePart'
import './bodyDamage.scss'

function BodyDamage(props) {
  return (
    <div className='bodydamage'>
      
        <AddDamages addBucket={props.addBucket}
                                              selectMenuState={props.selectMenuState}
                                              setSelectMenuState={props.setSelectMenuState}
                                              setSelectedPart={props.setSelectedPart}
                                              selectedPart={props.selectedPart}
                                              addProgressState={props.addProgressState}
                                              setAddProgressState={props.setAddProgressState}
                                              carPart={props.carPart}
                                              setCarPart={props.setCarPart}
                                              choosenCarParts={props.choosenCarParts}
                                              setChoosenCarParts={props.setChoosenCarParts}
                                              queryParams={props.queryParams}
                                              getCarDamages={props.getCarDamages}
                                              damageList={props.damageList}/>

      {props.selectMenuState==="2"? props.resultStep==="1"?
          <Bucket bucketState={props.bucketState} updateBucket={props.setBucketState} queryParams={props.queryParams} onApply={props.onApply} setResultStep={props.setResultStep}/> 
          : props.resultStep==="2"? <FinalDamages bucketState={props.bucketState} setResultStep={props.setResultStep} queryParams={props.queryParams}/>: <SignaturePart bucketState={props.bucketState} setResultStep={props.setResultStep} queryParams={props.queryParams}/>:<div></div>}
    </div>
  )
}

export default BodyDamage