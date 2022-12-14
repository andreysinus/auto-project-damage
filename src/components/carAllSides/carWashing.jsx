
import React from 'react'
import { useTranslation } from 'react-i18next';

function CarWashing(props) {
  const { t } = useTranslation();
  return (
    <div className='carwashing'>
        <div className='carwashing__body'>
            <p className="carwashing__title">{t("carNeedWash")}</p>
            <div className="carwashing__buttons">
                <button className="carwashing__button decline" onClick={()=>{props.setAddProgressState("1"); let wash=props.washing; wash.need=false; props.setWashing(wash)} }>{t("no")}</button>
                <button className="carwashing__button accept" onClick={()=>{props.setAddProgressState("1");let wash=props.washing; wash.need=true; props.setWashing(wash)} }>{t("yes")}</button>
            </div>
        </div>
    </div>
  )
}

export default CarWashing