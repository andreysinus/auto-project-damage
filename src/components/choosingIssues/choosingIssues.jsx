import React, { useState } from 'react'
import './choosingIssues.scss'
import backLogo from '../../img/back.svg'
import plus from '../../img/plus.svg'
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
                <button className='choosingissue__add'><img src={plus} alt="Добавить повреждение" /></button>
                <p className='choosingissue__item-title'>{text.type}</p>
                <Upload
                  showUploadList={false}
                  listType="picture-card"
                  accept=".png,.jpeg,.doc"
                  beforeUpload={(file)=>{
                    getBase64(file, (result)=>{
                      options[index].photo=result;
                      updateParts();
                      forceUpdate();
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