import React from 'react'
import AddDamages from '../addDamages/addDamages'
import Bucket from '../bucket/bucket'
import './bodyDamage.scss'

function BodyDamage(props) {
  return (
    <div className='bodydamage'>
        {props.selectState==="1"? <AddDamages/> : <Bucket bucketState={props.bucketState} updateBucket={props.setBucketState}/>}
    </div>
  )
}

export default BodyDamage