import React, { useRef } from 'react'
import './signaturePart.scss'
import SignaturePad from 'react-signature-canvas';

function SignaturePart(props) {
    var dict = []
    var keys = []
    var finalPrice = 0;
    const sigCanvas = useRef({});
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
        <div className="signaturepart__body">
            <div className="signaturepart__header">
                <div className='signaturepart__back'><button onClick={()=>props.setResultStep("1")} className='carchoosen__button-back'>
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 16.5C33 7.40212 25.5979 1.26264e-07 16.5 5.23945e-07C7.40212 9.21626e-07 -1.11892e-06 7.40212 -7.21238e-07 16.5C-3.23557e-07 25.5979 7.40212 33 16.5 33C25.5979 33 33 25.5979 33 16.5ZM1.64865 16.5C1.64865 8.31056 8.31056 1.64866 16.5 1.64865C24.6894 1.64865 31.3513 8.31056 31.3513 16.5C31.3513 24.6894 24.6894 31.3513 16.5 31.3513C8.31056 31.3513 1.64865 24.6894 1.64865 16.5Z" fill="#989898"/>
                    <path d="M14.5485 20.551L11.3185 17.321L23.6599 17.321C24.1175 17.321 24.4876 16.9509 24.4876 16.4933C24.4876 16.0357 24.1175 15.6656 23.6599 15.6656L11.3253 15.6656L14.5553 12.4356C14.7168 12.2741 14.7975 12.0655 14.7975 11.8502C14.7975 11.6348 14.7168 11.4262 14.5553 11.2647C14.2323 10.9417 13.7141 10.9417 13.3911 11.2647L8.7547 15.9011C8.4317 16.2241 8.4317 16.7423 8.7547 17.0653L13.3911 21.7017C13.7141 22.0247 14.2323 22.0247 14.5553 21.7017C14.8715 21.3989 14.8715 20.874 14.5485 20.551Z" fill="#989898"/>
                    </svg></button>
                </div>
                <p className='signaturepart__title'>Итого</p>
            </div>
            <div className="signaturepart__result">
                {
                    keys.map((text)=>{
                        return <div className="signaturepart__result-item">
                            <p className="signaturepart__result-title">{text}</p>
                            <p className="signaturepart__result-subtitle">{dict[text].qty}x</p>
                            <p className="signaturepart__result-price">{dict[text].price}₽</p>
                        </div>
                    })
                }
                <hr />
                <p className="signaturepart__result-summary">Итого: {finalPrice}₽</p>
            </div>
            <div className="signaturepart">
                <p className="signaturepart__subtitle">Поставьте подпись</p>
                <div className='signaturepart__pole'>
                    <SignaturePad ref={sigCanvas}
                    canvasProps={{
                        className: 'signaturepart__field'
                    }}/>
                </div>
            </div>
            <div className="signaturepart__footer">
                <button className='signaturepart__confirm' onClick={()=>{}}>
                    Cформировать
                </button>
            </div>
        </div>
    </div>
  )
}

export default SignaturePart