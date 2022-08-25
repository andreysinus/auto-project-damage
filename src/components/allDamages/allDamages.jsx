import React, { useState } from 'react'
import ImagePreview from '../imagePreview/imagePreview';
import './allDamages.scss'
//const axios = require('axios');

function AllDamages(props) {

  const [visible, setVisible] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [damagesArray, setDamagesArray] = useState([])
  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <div className='alldamages'>
      {visible? <ImagePreview visible={visible} setVisible={setVisible} imageURL={imageURL} forceUpdate={forceUpdate}/>:<div></div>}
      <p className='alldamages__title'>Повреждения детали<br/>"{props.selectedPart.name}"</p>
      {damagesArray.map(function(text, index){
      return <div className='alldamages__body' key={index}>
        <div>{index+1}</div>
        <button onClick={() =>{setImageURL("data:image/png;base64,"+text.photo); setVisible(true); setDamagesArray()}}>Открыть</button>
      </div>
    })}
    </div>
  )
}

export default AllDamages