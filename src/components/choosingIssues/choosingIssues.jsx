import React, { useState } from 'react'
import './choosingIssues.scss'
import backLogo from '../../img/back.svg'
import {Upload} from 'antd'
import SelectDegree from '../selectDegree/selectDegree';

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
                <button className='choosingissue__add' onClick={()=>{options.push({name: text.name, object_id:text.Object_id, type: text.type, price: text.price, degree: "1", photo: undefined}); updateParts();}}><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  
                  <div className={props.choosenCarParts[index].photo!==undefined ?'choosingissue__photo active':'choosingissue__photo'}><svg width="25" height="25" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.50005 12.1906C10.1369 12.1906 10.6532 11.6744 10.6532 11.0375C10.6532 10.4007 10.1369 9.8844 9.50005 9.8844C8.8632 9.8844 8.34692 10.4007 8.34692 11.0375C8.34692 11.6744 8.8632 12.1906 9.50005 12.1906Z" fill="white"/>
                        <path d="M14.8815 5.6563H12.5752V4.50317C12.5752 3.99346 12.3728 3.50462 12.0123 3.1442C11.6519 2.78378 11.1631 2.5813 10.6534 2.5813H8.34712C7.83741 2.5813 7.34857 2.78378 6.98815 3.1442C6.62773 3.50462 6.42524 3.99346 6.42524 4.50317V5.6563H4.11899C3.50734 5.6563 2.92073 5.89928 2.48823 6.33178C2.05572 6.76429 1.81274 7.35089 1.81274 7.96255V14.1125C1.81274 14.7242 2.05572 15.3108 2.48823 15.7433C2.92073 16.1758 3.50734 16.4188 4.11899 16.4188H14.8815C15.4931 16.4188 16.0798 16.1758 16.5123 15.7433C16.9448 15.3108 17.1877 14.7242 17.1877 14.1125V7.96255C17.1877 7.35089 16.9448 6.76429 16.5123 6.33178C16.0798 5.89928 15.4931 5.6563 14.8815 5.6563ZM7.96274 4.50317C7.96274 4.40123 8.00324 4.30346 8.07532 4.23138C8.14741 4.1593 8.24518 4.1188 8.34712 4.1188H10.6534C10.7553 4.1188 10.8531 4.1593 10.9252 4.23138C10.9972 4.30346 11.0377 4.40123 11.0377 4.50317V5.6563H7.96274V4.50317ZM9.50024 13.7282C8.96809 13.7282 8.44788 13.5704 8.00541 13.2747C7.56294 12.9791 7.21808 12.5589 7.01443 12.0672C6.81078 11.5756 6.7575 11.0346 6.86132 10.5126C6.96514 9.9907 7.22139 9.51128 7.59768 9.13499C7.97398 8.7587 8.4534 8.50244 8.97533 8.39862C9.49726 8.2948 10.0383 8.34809 10.5299 8.55173C11.0215 8.75538 11.4418 9.10025 11.7374 9.54272C12.0331 9.98519 12.1909 10.5054 12.1909 11.0375C12.1909 11.7511 11.9074 12.4355 11.4028 12.9401C10.8982 13.4447 10.2138 13.7282 9.50024 13.7282Z" fill="white"/>
                        </svg>
                  </div>
                </Upload>
                </div>
              <div className="choosingissue__item"><SelectDegree options={options[index]} title="Легкое" degree="1" updateParts={updateParts}/>
                                                   <SelectDegree options={options[index]} title="Среднее" degree="2" updateParts={updateParts}/>
                                                   <SelectDegree options={options[index]} title="Тяжелое" degree="3" updateParts={updateParts}/></div>
              
            </div>
        })}
      </div>
      <div className='choosingissue__footer'>
        <button className='choosingissue__addbutton' onClick={()=>{props.choosenCarParts.map((text)=>{
          if (text.photo!==undefined){
            props.addBucket(text.name, text.type, text.price, text.degree, text.photo, text.object_id)
          }
          return 0
        }); props.setAddProgressState("1")}}>Добавить повреждения</button>
      </div>
    </div>
  )
}

export default ChoosingIssues