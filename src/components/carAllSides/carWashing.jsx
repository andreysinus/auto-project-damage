import React from 'react'

function CarWashing(props) {
  return (
    <div className='carwashing'>
        <div className='carwashing__body'>
            <p className="carwashing__title">Авто требуется мойка?</p>
            <div className="carwashing__buttons">
                <button className="carwashing__button decline" onClick={()=>{props.setAddProgressState("1")} }>Нет</button>
                <button className="carwashing__button accept" onClick={()=>{props.setAddProgressState("1")} }>Да</button>
            </div>
        </div>
    </div>
  )
}

export default CarWashing