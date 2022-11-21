import React from 'react'
import './serverError.scss'
function ServerError(props) {
  return (
    <div className='error'>
        <div className="error__body">
        
                <p className='error__body-text'>Ошибка соединения с сервером!!!<br/> Приложение может работать не корректно</p>
            <button className="error__body-button" onClick={()=>props.setServerErrorVisible(false)}>Закрыть окно</button>
        </div>
    </div>
  )
}

export default ServerError