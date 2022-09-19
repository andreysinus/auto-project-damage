import React, { useState } from 'react'
import './missingParts.scss'

function MissingParts(props) {
    let partsArr = props.Array
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    function handleChangeSelect(id, name, price)
    {
        if (partsArr[id]===undefined){
            partsArr[id]={name: name, price:price}

        }
        else{
            partsArr.splice(id,1)
        }
    }
  return (
    <div className='missing'>
        <h1 className="missing__title">
            Выберите отсутствующие вещи
        </h1>
        <div className="missing__body">
            {props.parts.map((text, index)=>{
                return <div key={index} className="missing__item">
                    <div className="missing__item-check">
                        <input type="checkbox"  checked={partsArr[index]!==undefined?true:false} onChange={()=>{handleChangeSelect(index, text.name, text.price); forceUpdate()}}/>
                    </div>
                    <div className="missing__item-body">
                        <p className="missing__item-body-title">{text.name}</p>
                    </div>
                </div>
            })}
        </div>
        <div className="missing__footer">
            <button className="missing__footer-button" onClick={()=>{props.setAddProgressState("1"); props.setArray(partsArr)}}>Добавить предметы</button>
        </div>
    </div>
  )
}

export default MissingParts