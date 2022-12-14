import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './missingParts.scss'

function MissingParts(props) {
    const { t } = useTranslation();
    let partsArr = props.Array
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    
    function handleChangeSelect(id, name, price, Object_id, Type, Grade)
    {
        if (partsArr[id]===undefined){
            partsArr[id]={Object: name, Object_id:Object_id, Type:Type, price:price, Grade:Grade}
        }
        else{
            partsArr[id]=undefined
        }
    }
  return (
    <div className='missing'>
        <h1 className="missing__title">
            {t("chooseEmptyThings")}
        </h1>
        
        <div className={props.parts.length>5?"missing__body more":"missing__body"}>
            {props.parts.map((text, index)=>{
                return <div key={index} className="missing__item">
                    <div className="missing__item-check">
                        <input className="missing__checkbox" type="checkbox"  checked={partsArr[index]!==undefined?true:false} onChange={()=>{handleChangeSelect(index, text.Object, text.Price, text.Object_id, text.Type, text.Grade); forceUpdate()}}/>
                    </div>
                    <div className="missing__item-body">
                        <p className="missing__item-body-title">{text.Object}</p>
                    </div>
                </div>
            })}
             <div className={props.parts.length>5?"missing__footer more":"missing__footer"}>
            <button className="missing__footer-button" onClick={()=>{props.setAddProgressState("1"); props.setArray(partsArr)}}>{t("addThings")}</button>
        </div>
        </div>
        
    </div>
  )
}

export default MissingParts