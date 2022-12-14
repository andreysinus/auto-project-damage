import React from 'react'
import { useTranslation } from 'react-i18next';
import './serverError.scss'

function ServerError(props) {
  const { t } = useTranslation();
  return (
    <div className='error'>
        <div className="error__body">
        
                <p className='error__body-text'>{t("error1")}<br/> {t("error2")}</p>
            <button className="error__body-button" onClick={()=>props.setServerErrorVisible(false)}>{t("close")}</button>
        </div>
    </div>
  )
}

export default ServerError