import React, { useState } from 'react'
import './choosingIssues.scss'
import backLogo from '../../img/back.svg'
import {Upload} from 'antd'
import SelectDegree from '../selectDegree/selectDegree';
import Resizer from 'react-image-file-resizer';

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
function returnPrice(text){
  switch (text.degree){
    case "1": return text.price[0]
    case "2": return text.price[1]
    case "3": return text.price[2]
    default: return 0
  }
}
const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1000,
      1000,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

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
                {text.user===false ? <button className='choosingissue__add' onClick={()=>{options.push({name: text.name, object_id:text.Object_id, type: text.type, price: text.price, degree: "1", photo: undefined, user: true}); updateParts();}}><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.944 8.06408L12.4701 8.06338L12.4698 2.05603C12.4701 0.920515 11.5492 0 10.4137 0C9.27856 0 8.35804 0.920515 8.35804 2.05603V8.06373L2.05603 8.06338C0.920516 8.06373 0 8.98425 0 10.1194C0.000695779 11.2549 0.920516 12.1751 2.05603 12.1751H8.35804V18.944C8.35804 20.0805 9.27856 21 10.4141 21C11.5496 21 12.4697 20.0795 12.4701 18.9447V12.1751H18.9447C20.0795 12.1751 21 11.2549 21 10.1201C21.001 8.9839 20.0795 8.06338 18.944 8.06408Z" fill="white"/>
                  </svg>
                </button> : <button className='choosingissue__delete' onClick={()=>{options.splice(index, 1); updateParts();}}>
                  <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2311 10.3047L14.5326 6.68677H15.0602C15.4595 6.68677 15.7831 6.36307 15.7831 5.96386V4.64461C15.7831 3.40044 14.7709 2.3882 13.5267 2.3882H11.0121V2.05425C11.0121 0.921454 10.0905 0 8.95787 0H6.84938C5.71665 0 4.7952 0.921454 4.7952 2.05418V2.38813H2.28057C1.03641 2.38813 0.0241699 3.40037 0.0241699 4.64453V5.96379C0.0241699 6.363 0.347867 6.6867 0.747079 6.6867H1.2747L2.25696 18.4758C2.3749 19.8912 3.57996 21 5.00032 21H10.8067C12.2102 21 13.4027 19.9173 13.5447 18.5259C15.5007 18.1225 16.9759 16.3869 16.9759 14.3132C16.976 12.4903 15.8355 10.9298 14.2311 10.3047ZM6.24102 2.05418C6.24102 1.71875 6.51395 1.44582 6.84938 1.44582H8.95787C9.29337 1.44582 9.5663 1.71875 9.5663 2.05418V2.38813H6.24102V2.05418V2.05418ZM1.46985 5.24102V4.64461C1.46985 4.1976 1.83349 3.83395 2.2805 3.83395H13.5267C13.9737 3.83395 14.3373 4.1976 14.3373 4.64461V5.24102H1.46985ZM10.8068 19.5542H5.00039C4.32599 19.5542 3.75383 19.0278 3.69783 18.3557L2.72539 6.68677H13.0818L12.8044 10.0154C12.7612 10.0141 12.7181 10.0121 12.6747 10.0121C10.3029 10.0121 8.37347 11.9416 8.37347 14.3132C8.37347 16.4802 9.98453 18.2771 12.0717 18.5713C11.9252 19.1369 11.4071 19.5542 10.8068 19.5542ZM12.6747 17.1687C11.1001 17.1687 9.81922 15.8877 9.81922 14.3132C9.81922 12.7387 11.1001 11.4578 12.6747 11.4578C14.2492 11.4578 15.5301 12.7387 15.5301 14.3132C15.5301 15.8877 14.2492 17.1687 12.6747 17.1687Z" fill="white"/>
                  <path d="M13.6972 14.3132L14.3789 13.6316C14.6611 13.3493 14.6611 12.8915 14.3787 12.6093C14.0963 12.327 13.6388 12.327 13.3564 12.6093L12.6748 13.2909L11.9931 12.6093C11.7107 12.327 11.2532 12.327 10.9708 12.6093C10.6884 12.8916 10.6884 13.3493 10.9708 13.6316L11.6524 14.3132L10.9708 14.9949C10.6884 15.2772 10.6884 15.7349 10.9708 16.0172C11.112 16.1584 11.297 16.2289 11.482 16.2289C11.667 16.2289 11.852 16.1584 11.9932 16.0172L12.6748 15.3356L13.3564 16.0172C13.4976 16.1584 13.6826 16.2289 13.8677 16.2289C14.0527 16.2289 14.2377 16.1584 14.3789 16.0172C14.6612 15.7349 14.6612 15.2772 14.3789 14.9949L13.6972 14.3132Z" fill="white"/>
                  </svg>
                </button>}
                <p className='choosingissue__item-title'>{text.type}</p>
                <Upload
                  showUploadList={false}
                  listType="picture-card"
                  accept=".png,.jpeg,.doc"
                  beforeUpload={(file)=>{
                    getBase64(file, (result)=>{
                      options[index].photo=resizeFile(result);
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
      <div className={props.choosenCarParts.length>2?'choosingissue__footer active':'choosingissue__footer'}>
        <button className='choosingissue__addbutton' onClick={()=>{props.choosenCarParts.map((text)=>{
          if (text.photo!==undefined){
            props.addBucket(text.name, text.type, returnPrice(text), text.degree, text.photo, text.object_id)
          }
          return 0
        }); props.setAddProgressState("1")}}>Добавить повреждения</button>
      </div>
    </div>
  )
}

export default ChoosingIssues