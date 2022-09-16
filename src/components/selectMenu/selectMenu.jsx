import React from 'react'
import './selectMenu.scss'

function SelectMenu(props) {
    let addDamClass="selectmenu__item"
    let listDamClass="selectmenu__item selectmenu__list"
    if (props.selectState==="1"){
        addDamClass+=" active"
    }
    else{
        listDamClass+=" active"
    }
  return (
    <div className='selectmenu select__anim'>
        <button className={addDamClass} onClick={()=>props.setSelectState("1")}><p>Добавить<br/>повреждение</p></button>
        <button className={listDamClass} onClick={()=>props.setSelectState("2")}><p>Список<br/>повреждений</p><div className='selectmenu__count'>{props.bucketLength}</div></button>
    </div>
  )
}

export default SelectMenu