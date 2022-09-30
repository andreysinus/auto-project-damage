import { useEffect, useState } from 'react';
import './App.scss';
import AllDamages from './components/allDamages/allDamages';
import BodyDamage from './components/bodyDamage/bodyDamage';
import Logo from './components/logo/logo';
import SelectMenu from './components/selectMenu/selectMenu';
import queryString from "query-string"
import damages from './jsons/response.json'

const axios = require('axios');
const telegram=window.Telegram.WebApp


function App() {
  useEffect(()=>{
    telegram.expand();
    telegram.ready();
  })
  const queryParams = queryString.parse(window.location.search)
  const [washing, setWashing] = useState({need: false, price:0})
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
          'Accept': '*/*',
          'Content-Type':'application/json',
        },
        data : data
      };
      
        axios(config)
        .then((response) => {
            if (typeof(response.data) !== 'string'){ 
              setDamagesArray([])
              response.data.map((text)=>{
                 addDamagesArray(text.photo);
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
        let x = response.data
        setDamageList(x.Prices)
      })
      .catch((error) => {
        setDamageList(damages)
      });
    }
  const onApply = () =>{
    telegram.sendData("Повреждения были отправлены"); 
  }
  return (
    <div className='container'>
      <div className="logo__anim"><Logo /></div>
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
                  setWashing={setWashing}/>

      { addProgressState==="3" && selectedPart.name!=="None" && selectMenuState==="1" ? <AllDamages selectedPart={selectedPart} choosenCarParts={choosenCarParts[0]} queryParams={queryParams} damagesArray={damagesArray}/> : <div></div>}
    </div>
  );
}

export default App;
