import { useState } from 'react';
import './App.scss';
import AllDamages from './components/allDamages/allDamages';
import BodyDamage from './components/bodyDamage/bodyDamage';
import Logo from './components/logo/logo';
import SelectMenu from './components/selectMenu/selectMenu';

function App() {
  const [selectMenuState, setSelectMenuState] = useState("1") // 1 = Добавить повреждение; 2 = Список выбранных
  const [bucketState, setBucketState] = useState([]) // Массив выбранных повреждений
  const [addProgressState, setAddProgressState] = useState("1") // 1 = выбора части авто; 2 = Выбор конкретной детали авто; 3 = Меню добавление выбранной детали 
  const [selectedPart, setSelectedPart] = useState({name:"None", object_id:999}) // Выбранная для добавления деталь -> Для определения детали для поиска повреждений в базе данных у Атимо
  const [carPart, setCarPart] = useState("None"); // Выбранная часть авто
  const [choosenCarParts, setChoosenCarParts] = useState({name:"Неизвестно", object_id:999, type:"Неизвестно", price: 0, degree: 0, photo: undefined}); // Выбранная часть авто {name:"Неизвестно", type:"Неизвестно", price: 0, degree: 0, photo: undefined}
  
  const addBucket = (name, type, price, degree, photo, object_id)=>{
    setBucketState((prevState)=>[...prevState, {name:name, type:type, price:price, degree: degree, photo:photo, object_id:object_id}]) // Добавление значения в массив выбранных повреждений
  }
  const updateChoosen = (array) =>{
    setChoosenCarParts(array)
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
                  setChoosenCarParts={updateChoosen}/>

      { addProgressState==="3" && selectedPart.name!=="None" && selectMenuState==="1" ? <AllDamages selectedPart={selectedPart}/> : <div></div>}
    </div>
  );
}

export default App;
