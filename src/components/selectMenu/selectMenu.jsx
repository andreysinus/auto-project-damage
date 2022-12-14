
import React from 'react'
import { useTranslation } from 'react-i18next';
import './selectMenu.scss'

function SelectMenu(props) {
    const { t } = useTranslation();
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
        <button className={addDamClass} onClick={()=>props.setSelectState("1")}><p>{t("addDamage")}</p></button>
        <button className={listDamClass} onClick={()=>props.setSelectState("2")}><p>{t("listOfDamages")}</p><div className='selectmenu__count'>{props.bucketLength}</div></button>
    </div>
  )
}

export default SelectMenu