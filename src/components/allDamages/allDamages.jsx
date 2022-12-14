import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ImagePreview from '../imagePreview/imagePreview';
import LoadingElement from '../loading/loadingElement';
import './allDamages.scss'




function AllDamages(props) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  console.log(props.damagesArray)
  return (
    <div className='alldamages'>
      {visible? <div className="allpreview"><ImagePreview visible={visible} setVisible={setVisible} imageURL={imageURL} forceUpdate={forceUpdate}/></div>:<div></div>}
      <p className='alldamages__title'>{t("damageDetail")}<br/>"{props.selectedPart.name}"</p>
      <div className='alldamages__body'>
      {props.damagesArray!==undefined? Array.isArray(props.damagesArray)? props.damagesArray.map(function(text, index){
       
          return <div className='alldamages__item' key={index}>
            <p className='alldamages__item-title'>{index+1}</p>
            <button className='alldamages__getpreview' onClick={() =>{setImageURL("data:image/png;base64,"+text); setVisible(true);}}>{t("open")}</button>
        </div>
      
      
    }):
    typeof(props.damagesArray)==="string" ?
    <div className='alldamages__empty'>
      <p className='alldamages__empty-title'>{t("noDamage")}</p>
    </div>
    :<LoadingElement />:<LoadingElement />}
    </div>
    </div>
  )
}

export default AllDamages