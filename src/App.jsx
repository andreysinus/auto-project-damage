import { useEffect, useState } from 'react';
import './App.scss';
import AllDamages from './components/allDamages/allDamages';
import BodyDamage from './components/bodyDamage/bodyDamage';
import Logo from './components/logo/logo';
import SelectMenu from './components/selectMenu/selectMenu';
import queryString from "query-string"
import damages from './jsons/response.json'
import ServerError from './components/serverError/serverError';
import LangSwitch from './components/langSwitch/langSwitch';
import { useTranslation } from 'react-i18next';

const axios = require('axios');
const telegram=window.Telegram.WebApp


function App() {
  useEffect(()=>{
    telegram.expand();
    telegram.ready();
  })
  const queryParams = queryString.parse(window.location.search)
  const [washing, setWashing] = useState({Object:"Мойка",Object_id:899, Type:"",Grade:"Отсутствует", need: false, price:0})
  const [documents, setDocuments] = useState()
  const [equipment, setEquipment] = useState()
  const [documentsArray, setDocumentsArray] = useState([])
  const [equipmentArray, setEquipmentArray] = useState([])
  const [selectMenuState, setSelectMenuState] = useState("1") // 1 = Добавить повреждение; 2 = Список выбранных
  const [bucketState, setBucketState] = useState([]) // Массив выбранных повреждений
  const [addProgressState, setAddProgressState] = useState("1") // 1 = выбора части авто; 2 = Выбор конкретной детали авто; 3 = Меню добавление выбранной детали 
  const [selectedPart, setSelectedPart] = useState({name:"None", object_id:999}) // Выбранная для добавления деталь -> Для определения детали для поиска повреждений в базе данных у Атимо
  const [carPart, setCarPart] = useState("None"); // Выбранная часть авто
  const [choosenCarParts, setChoosenCarParts] = useState({name:"Неизвестно", object_id:999, type:"Неизвестно", price: 0, degree: 0, photo: undefined}); // Выбранная часть авто {name:"Неизвестно", type:"Неизвестно", price: 0, degree: 0, photo: undefined}
  const [resultStep, setResultStep] = useState("1");
  const [damagesArray, setDamagesArray] = useState([])
  const [damageList, setDamageList] = useState()
  const [serverErrorVisible, setServerErrorVisible] = useState(false)
  const { t, i18n } = useTranslation();

  const addBucket = (name, type, price, degree, photo, object_id)=>{
    setBucketState((prevState)=>[...prevState, {name:name, type:type, price:price, degree: degree, photo:photo, object_id:object_id}]) // Добавление значения в массив выбранных повреждений
  }
  const updateChoosen = (array) =>{
    setChoosenCarParts(array)
  }
  const addDamagesArray = (photo) =>{
    setDamagesArray((prevState)=>[...prevState, photo]);
  }

  const getCarDamages = (object_id) =>{
    setDamagesArray()
    let data = '';
      let config = {
        method: 'GET',
        url: `${queryParams.base}/GetCarDamages?grz=${queryParams.grz}&Telephone=${queryParams.telephone}&Object_id=${object_id}`,
        headers: { 
          'Authorization': 'Basic V0E6V2E1ODUxMzM1',
        },
        data : data
      };
      
        axios(config)
        .then((response) => {
            if (typeof(response.data) !== 'string'){ 
              setDamagesArray([])
              response.data.map((text)=>{
                 if (text!==null) addDamagesArray(text.photo);
                 return 0;
              })
            }
            else{
              setDamagesArray(response.data)
            }
        })
        .catch((error) => {
          console.log(error);
        }); 
  }
    if (damageList===undefined)
    {
      let config = {
        method: 'get',
        url: `${queryParams.base}/GetDamage/?grz=${queryParams.grz}`,
        headers: { 
          'Authorization': 'Basic V0E6V2E1ODUxMzM1'
        }
      };
      axios(config)
      .then((response) => {
        let res = response.data
        setDamageList(res.Prices)
        if (documents===undefined){
          setDocuments(res.Documents)
        }
        if (equipment===undefined){
          setEquipment(res.Equipment)
        }
        res.Prices.map((text)=>{
          if (text.Object==="Мойка" || text.Object==="Washing"){
            setWashing({Object:text.Object, Object_id:text.Object_id, Type: text.Type, Grade:text.Grade, Price:text.Price, need:false});
          }
          return 0
        })
      })
      .catch((error) => {
        setDamageList(damages)
        setServerErrorVisible(true)
      });
    }
 
  const onApply = () =>{
    telegram.sendData("Повреждения были отправлены"); 
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className='container'>
      {serverErrorVisible? <ServerError setServerErrorVisible={setServerErrorVisible}/>: <div> </div>} 
      <div className="logo__anim"><Logo /></div>
      <div className='langswitch__anim'><LangSwitch t={t} changeLanguage={changeLanguage}/></div>
      <SelectMenu  selectState={selectMenuState} setSelectState={setSelectMenuState} bucketLength={bucketState.length}/>
      <BodyDamage selectMenuState={selectMenuState}
                  setSelectMenuState={setSelectMenuState}
                  addBucket={addBucket}
                  addProgressState={addProgressState}
                  setAddProgressState={setAddProgressState}
                  selectedPart={selectedPart}
                  setSelectedPart={setSelectedPart}
                  bucketState={bucketState}
                  setBucketState={setBucketState}
                  carPart={carPart}
                  setCarPart={setCarPart}
                  choosenCarParts={choosenCarParts}
                  setChoosenCarParts={updateChoosen}
                  queryParams={queryParams}
                  onApply={onApply}
                  resultStep={resultStep}
                  setResultStep={setResultStep}
                  getCarDamages={getCarDamages}
                  damageList={damageList}
                  documentsArray={documentsArray}
                  equipmentArray={equipmentArray}
                  setDocumentsArray={setDocumentsArray}
                  setEquipmentArray={setEquipmentArray}
                  washing={washing}
                  setWashing={setWashing}
                  equipment={equipment}
                  documents={documents}/>

      { addProgressState==="3" && selectedPart.name!=="None" && selectMenuState==="1" ? <AllDamages selectedPart={selectedPart} choosenCarParts={choosenCarParts[0]} queryParams={queryParams} damagesArray={damagesArray}/> : <div></div>}
    </div>
  );
}

export default App;
