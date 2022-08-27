import React from 'react'
import AddDamages from '../addDamages/addDamages'
import Bucket from '../bucket/bucket'
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
                                              queryParams={props.queryParams}/>
                                              

       {props.selectMenuState==="2"? <Bucket bucketState={props.bucketState} updateBucket={props.setBucketState} queryParams={props.queryParams} onApply={props.onApply}/> :<div></div>}
    </div>
  )
}

export default BodyDamage