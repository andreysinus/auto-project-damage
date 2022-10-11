import React from 'react'
import "./finalDamages.scss"

function FinalDamages(props) {
    var dict = []
    var keys = []
    var finalPrice = 0;
    if (props.washing.need===true) finalPrice+=Number(props.washing.Price)
    props.bucketState.map((text)=>{
        if (dict[text.name]!==undefined){
            dict[text.name]={
                qty: dict[text.name].qty+1,
                price: text.price+dict[text.name].price
            }
            finalPrice+=text.price
        }
        else{
            dict[text.name]={
                qty: 1,
                price: text.price,
            }
            finalPrice+=text.price
            keys.push(text.name)
        }
        return 0;
    })
  return (
  <div>
    <div className="damagelist__body">
         <div className="damagelist__header">
                <div className='damagelist__back'><button onClick={()=>props.setResultStep("1")} className='carchoosen__button-back'>
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 16.5C33 7.40212 25.5979 1.26264e-07 16.5 5.23945e-07C7.40212 9.21626e-07 -1.11892e-06 7.40212 -7.21238e-07 16.5C-3.23557e-07 25.5979 7.40212 33 16.5 33C25.5979 33 33 25.5979 33 16.5ZM1.64865 16.5C1.64865 8.31056 8.31056 1.64866 16.5 1.64865C24.6894 1.64865 31.3513 8.31056 31.3513 16.5C31.3513 24.6894 24.6894 31.3513 16.5 31.3513C8.31056 31.3513 1.64865 24.6894 1.64865 16.5Z" fill="#989898"/>
                    <path d="M14.5485 20.551L11.3185 17.321L23.6599 17.321C24.1175 17.321 24.4876 16.9509 24.4876 16.4933C24.4876 16.0357 24.1175 15.6656 23.6599 15.6656L11.3253 15.6656L14.5553 12.4356C14.7168 12.2741 14.7975 12.0655 14.7975 11.8502C14.7975 11.6348 14.7168 11.4262 14.5553 11.2647C14.2323 10.9417 13.7141 10.9417 13.3911 11.2647L8.7547 15.9011C8.4317 16.2241 8.4317 16.7423 8.7547 17.0653L13.3911 21.7017C13.7141 22.0247 14.2323 22.0247 14.5553 21.7017C14.8715 21.3989 14.8715 20.874 14.5485 20.551Z" fill="#989898"/>
                    </svg></button>
                </div>
                <p className='damagelist__title'>Акт</p>
            </div>
            <div className="damagelist__result">
                {props.washing.need===true?
                <div>
                <h3 className="damagelist__subtitle">Повреждения кузова:</h3>
                    <div className="damagelist__result-item">
                    <p className="damagelist__result-title">Мойка авто</p>
                    <p className="damagelist__result-price">{props.washing.Price}₽</p>
                    </div></div>:<></>
                }
                {props.bucketState.length>0 ?
                <div>
                {props.washing.need===false?<h3 className="damagelist__subtitle">Повреждения кузова:</h3>:<></>}
                {
                    keys.map((text)=>{
                        return <div className="damagelist__result-item">
                            <p className="damagelist__result-title">{text}</p>
                            <p className="damagelist__result-subtitle">{dict[text].qty}x</p>
                            <p className="damagelist__result-price">{dict[text].price}₽</p>
                        </div>
                    })
                }

                 <hr/>
                 </div>: props.washing.need===true? <hr/> :<></>
                }
                {props.documentsArray.length>0? <div>
                    <h3 className="damagelist__subtitle">Документы отсутствуют:</h3>
                    {props.documentsArray.map((text)=>{if(text!==undefined){finalPrice+=Number(text.price); return <div className="damagelist__result-item">
                        <p className="damagelist__result-title">{text.Object}</p>
                        <p className="damagelist__result-price">{text.price}₽</p>
                        </div>}return <></>})
                    }
                    <hr />
                </div>:<></>}
                {props.equipmentArray.length>0? <div>
                    <h3 className="damagelist__subtitle">Предметы отсутствуют:</h3>
                    {props.equipmentArray.map((text)=>{if(text!==undefined){finalPrice+=Number(text.price); return <div className="damagelist__result-item">
                        <p className="damagelist__result-title">{text.Object}</p>
                        <p className="damagelist__result-price">{text.price}₽</p>
                        </div>}return <></>})
                    }
                    <hr />
                </div>:<></>}
                <p className="damagelist__result-summary">Итого: {finalPrice}₽</p>
            </div>
            <div className="damagelist__footer">
                <button className='damagelist__confirm' onClick={()=>props.setResultStep("3")}>Поставить подпись</button>
            </div>
    </div>
        
    </div>
  )
}

export default FinalDamages