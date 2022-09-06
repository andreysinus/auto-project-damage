import React from 'react'
import CarImageButton from '../carImageButton/carImageButton'
import './carAllSides.scss'
import windshield from '../../img/carViews/front/windshield.svg'
import hood from '../../img/carViews/front/hood.svg'
import leftMirror from '../../img/carViews/front/leftMirror.svg'
import rightMirror from '../../img/carViews/front/rightMirror.svg'
import frontLeftHeadlight from '../../img/carViews/front/frontLeftHeadlight.svg'
import frontRightHeadlight from '../../img/carViews/front/frontRightHeadlight.svg'
import frontBumper from '../../img/carViews/front/frontBumper.svg'

function CarFrontNew(props) {
  return (
    <div>
        <div className='carFront'>
                <div className='carfront__underpath'>
                    <svg width="210" height="90" viewBox="0 0 210 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M2.33008 88.112V71.4392C2.33008 71.4392 10.1181 66.5814 13.9955 59.3805C13.9955 59.3805 19.0195 58.3447 20.6591 48.8894C22.2986 39.4341 31.7207 10.0823 41.6911 6.20487C51.6616 2.32748 104.837 1.65724 104.837 1.65724C104.837 1.65724 161.336 3.4353 167.983 6.20487C174.63 8.97443 181.128 14.3696 191.176 50.4459C191.176 50.4459 193.463 56.611 197.341 58.8266C197.341 58.8266 200.675 67.4344 207.594 71.4392L208.159 88.461" stroke="#747474" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='carfront__windshield'>
                <CarImageButton src={windshield} selectedPart="windshield" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages}/>
                </div>
                
                <CarImageButton src={hood} selectedPart="hood" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages}/>
                <div className='carfront__mirrors'>
                <CarImageButton src={rightMirror} selectedPart="rMirror" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages}/>
                <CarImageButton src={leftMirror} selectedPart="lMirror" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages}/>
                </div>
                <div className='carfront__headlights'>
                <CarImageButton src={frontRightHeadlight} selectedPart="rHeadlight" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages}/>
                <CarImageButton src={frontLeftHeadlight} selectedPart="lHeadlight" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages}/>
                </div>
                <CarImageButton src={frontBumper} selectedPart="fBumper" setAddProgressState={props.setAddProgressState} setSelectedPart={props.setSelectedPart} setChoosenCarParts={props.setChoosenCarParts} getCarDamages={props.getCarDamages}/>
        </div>
    </div>
  )
}

export default CarFrontNew