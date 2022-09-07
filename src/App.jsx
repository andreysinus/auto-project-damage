import { useEffect, useState } from 'react';
import './App.scss';
import AllDamages from './components/allDamages/allDamages';
import BodyDamage from './components/bodyDamage/bodyDamage';
import Logo from './components/logo/logo';
import SelectMenu from './components/selectMenu/selectMenu';
import queryString from "query-string"
const axios = require('axios');
const telegram=window.Telegram.WebApp

function App() {
  useEffect(()=>{
    telegram.expand();
    telegram.ready();
  })
  const queryParams = queryString.parse(window.location.search)
  //const [isFirst, setIsFirst] = useState(true)
  const [selectMenuState, setSelectMenuState] = useState("1") // 1 = Добавить повреждение; 2 = Список выбранных
  const [bucketState, setBucketState] = useState([]) // Массив выбранных повреждений
  const [addProgressState, setAddProgressState] = useState("1") // 1 = выбора части авто; 2 = Выбор конкретной детали авто; 3 = Меню добавление выбранной детали 
  const [selectedPart, setSelectedPart] = useState({name:"None", object_id:999}) // Выбранная для добавления деталь -> Для определения детали для поиска повреждений в базе данных у Атимо
  const [carPart, setCarPart] = useState("None"); // Выбранная часть авто
  const [choosenCarParts, setChoosenCarParts] = useState({name:"Неизвестно", object_id:999, type:"Неизвестно", price: 0, degree: 0, photo: undefined}); // Выбранная часть авто {name:"Неизвестно", type:"Неизвестно", price: 0, degree: 0, photo: undefined}
  const [resultStep, setResultStep] = useState("1");
  const [damagesArray, setDamagesArray] = useState([])
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
    setDamagesArray([])
    if (choosenCarParts!==undefined){
      let config = {
        method: 'get',
        url: `https://тест.атимо.рф/Taksopark/hs/WebApp/GetCarDamages?grz=${queryParams.grz}&Telephone=${queryParams.telephone}&Object_id=${object_id}`,
        headers: { 
          'Authorization': 'Basic 0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YA6MzQ2MjYwOQ=='
        }
      };
        axios(config)
        .then((response) => {
            if (typeof(response.data) !== 'string'){ 
              response.data.map((text)=>{
                 addDamagesArray(text.photo);
                 return 0;
              })
            }
        })
        .catch((error) => {
          console.log(error);
        }); 
    }
  }
  // if (isFirst)
  // {
  //   setIsFirst(false);
  //   var myHeaders = new Headers();
  //   myHeaders.append("Authorization", "Basic 0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YA6MzQ2MjYwOQ==");
    
  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };
    
  //   fetch("http://тест.атимо.рф/Taksopark/hs/WebApp/GetDamage", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));

    
  // }

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
                  getCarDamages={getCarDamages}/>

      { addProgressState==="3" && selectedPart.name!=="None" && selectMenuState==="1" ? <AllDamages selectedPart={selectedPart} choosenCarParts={choosenCarParts[0]} queryParams={queryParams} damagesArray={damagesArray}/> : <div></div>}
    </div>
  );
}

export default App;
