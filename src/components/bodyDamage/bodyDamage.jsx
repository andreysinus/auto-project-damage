import React from 'react'
import AddDamages from '../addDamages/addDamages'
import Bucket from '../bucket/bucket'
import './bodyDamage.scss'

function BodyDamage(props) {
  return (
    <div className='bodydamage'>
        {props.selectMenuState==="1"? <AddDamages addBucket={props.addBucket}
                                              selectMenuState={props.selectMenuState}
                                              setSelectMenuState={props.setSelectMenuState}
                                              setSelectedPart={props.setSelectedPart}
                                              selectedPart={props.selectedPart}
                                              addProgressState={props.addProgressState}
                                              setAddProgressState={props.setAddProgressState}
                                              carPart={props.carPart}
                                              setCarPart={props.setCarPart}/>
                                              

        :<Bucket bucketState={props.bucketState} updateBucket={props.setBucketState}/>}
    </div>
  )
}

export default BodyDamage