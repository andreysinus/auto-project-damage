import React, { useState } from 'react'
import './choosingIssues.scss'
import backLogo from '../../img/back.svg'
import camera from '../../img/camera.svg'
import {Upload} from 'antd'

function getBase64(file, cb) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
      cb(reader.result)
  };
  reader.onerror = function (error) {
      console.log('Error: ', error);
  };
}

function ChoosingIssues (props){
  let options = props.choosenCarParts;
  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  
  function updateParts(){
    props.setChoosenCarParts(options)
    forceUpdate();
  }
  return (
    <div>
      <div className="choosingissue__header">
        <div className='choosingissue__back'><button onClick={()=>props.setAddProgressState("2")} className='carchoosen__button-back'><img src={backLogo} alt="Назад" /></button>
        </div>
        <h1 className='choosingissue__title'>{props.selectedPart.name}</h1>
      </div>
      <div className='choosingissue__body'>
        <p className='choosingissue__body-title'>Выберите тип, фотографию<br/>и степень повреждения:</p>
        {props.choosenCarParts.map((text, index)=>{
          return <div key={index}>
              <div className="choosingissue__item">
                <button className='choosingissue__add'><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.944 8.06408L12.4701 8.06338L12.4698 2.05603C12.4701 0.920515 11.5492 0 10.4137 0C9.27856 0 8.35804 0.920515 8.35804 2.05603V8.06373L2.05603 8.06338C0.920516 8.06373 0 8.98425 0 10.1194C0.000695779 11.2549 0.920516 12.1751 2.05603 12.1751H8.35804V18.944C8.35804 20.0805 9.27856 21 10.4141 21C11.5496 21 12.4697 20.0795 12.4701 18.9447V12.1751H18.9447C20.0795 12.1751 21 11.2549 21 10.1201C21.001 8.9839 20.0795 8.06338 18.944 8.06408Z" fill="white"/>
                  </svg>
                </button>
                <p className='choosingissue__item-title'>{text.type}</p>
                <Upload
                  showUploadList={false}
                  listType="picture-card"
                  accept=".png,.jpeg,.doc"
                  beforeUpload={(file)=>{
                    getBase64(file, (result)=>{
                      options[index].photo=result;
                      updateParts();
                    })
                  }}>
                  
                  <div className={props.choosenCarParts[index].photo!==undefined ?'choosingissue__photo active':'choosingissue__photo'}><img src={camera} alt="Добавить фото" /></div>
                </Upload>
                </div>
              <div className="choosingissue__item">{text.degree}</div>
            </div>
        })}
      </div>
      <div className='choosingissue__footer'>
        <button className='choosingissue__addbutton'>Добавить повреждения</button>
      </div>
    </div>
  )
}

export default ChoosingIssues