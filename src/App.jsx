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
  const [selectedPart, setSelectedPart] = useState("Заднее правое крыло") // Выбранная для добавления деталь -> Для определения детали для поиска повреждений в базе данных у Атимо

  const addBucket = (name, type, price, degree, photo)=>{
    setBucketState((prevState)=>[...prevState, {name:name, type:type, price:price, degree: degree, photo:photo}]) // Добавление значения в массив выбранных повреждений
  }

  return (
    <div className='container'>
      <div className="logo__anim"><Logo /></div>
      <SelectMenu  selectState={selectMenuState} setSelectState={setSelectMenuState} bucketLength={bucketState.length}/>
      <BodyDamage selectState={selectMenuState}
        addBucket={addBucket}
        setAddProgressState={setAddProgressState}
        setSelectedPart={setSelectedPart}
        bucketState={bucketState}
        setBucketState={setBucketState}
      />
      { addProgressState==="3" && selectedPart!=="None" ? <AllDamages selectedPart={selectedPart}/> : <div></div>}
    </div>
  );
}

export default App;
