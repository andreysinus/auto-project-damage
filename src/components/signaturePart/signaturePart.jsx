import React, { useRef, useState } from 'react'
import './signaturePart.scss'
import SignaturePad from 'react-signature-canvas';
import LoadingPage from '../loading/loadingPage.jsx';
const axios = require('axios');
const telegram=window.Telegram.WebApp

function SignaturePart(props) {
    const [visibleLoading, setVisibleLoading] = useState(false)
    const sigCanvas = useRef({});
    
    const getSignature = () =>{
        return sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    }

    const postDamages = () =>{
        let res = undefined
        let x=0
        let array=[]
        const regex = /data:.*base64,/
        var currentdate = new Date();
        props.bucketState.map((text)=>{
            array.push({
            "Object_id":text.object_id,"Type": text.type,
            "Grade": text.degree,
            "Price": text.price,
            "Photos":[{
                "name":`${text.name.replace(" ", "")}_${currentdate.getDate()}${currentdate.getMonth()}${currentdate.getFullYear()}${currentdate.getHours()}${currentdate.getMinutes()}${currentdate.getSeconds()}${x}`,
                "photo":text.photo.replace(regex, "")
            }]});
            x++;
            return 0;}
        )

        let send = {"Sign":getSignature().replace(regex, ""), "Damages":array}
        setVisibleLoading(true)
           let config = {
           method: 'post',
           url: `${props.queryParams.base}/PostDamages?grz=${props.queryParams.grz}&Telephone=${props.queryParams.telephone}`,
           headers: { 
               'Authorization': 'Basic V0E6V2E1ODUxMzM1', 
               'Content-Type': 'application/json'
           },
           data : send
           };
           axios(config)
           .then((response) => {
             res = "Акт был сформирован"
             telegram.sendData(res)
           })
           .catch((error) => {
             res = error.response.data.Error;
             if (res===undefined){
                res="Ошибка выполнения запроса передачи информации"
             }
             telegram.sendData(res)
           });
    }
  return (
    <div>
        {visibleLoading? <div className="signaturepart__loading">
            <LoadingPage/>
        </div>: <></>}
        <div className="signaturepart__body">
        <div className="signaturepart__header">
                <div className='signaturepart__back'><button onClick={()=>props.setResultStep("2")} className='carchoosen__button-back'>
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 16.5C33 7.40212 25.5979 1.26264e-07 16.5 5.23945e-07C7.40212 9.21626e-07 -1.11892e-06 7.40212 -7.21238e-07 16.5C-3.23557e-07 25.5979 7.40212 33 16.5 33C25.5979 33 33 25.5979 33 16.5ZM1.64865 16.5C1.64865 8.31056 8.31056 1.64866 16.5 1.64865C24.6894 1.64865 31.3513 8.31056 31.3513 16.5C31.3513 24.6894 24.6894 31.3513 16.5 31.3513C8.31056 31.3513 1.64865 24.6894 1.64865 16.5Z" fill="#989898"/>
                    <path d="M14.5485 20.551L11.3185 17.321L23.6599 17.321C24.1175 17.321 24.4876 16.9509 24.4876 16.4933C24.4876 16.0357 24.1175 15.6656 23.6599 15.6656L11.3253 15.6656L14.5553 12.4356C14.7168 12.2741 14.7975 12.0655 14.7975 11.8502C14.7975 11.6348 14.7168 11.4262 14.5553 11.2647C14.2323 10.9417 13.7141 10.9417 13.3911 11.2647L8.7547 15.9011C8.4317 16.2241 8.4317 16.7423 8.7547 17.0653L13.3911 21.7017C13.7141 22.0247 14.2323 22.0247 14.5553 21.7017C14.8715 21.3989 14.8715 20.874 14.5485 20.551Z" fill="#989898"/>
                    </svg></button>
                </div>
                <p className='signaturepart__title'>Распишитесь</p>
            </div>
            <div className="signaturepart">
                <div className='signaturepart__pole'>
                    <SignaturePad ref={sigCanvas}
                    canvasProps={{
                        className: 'signaturepart__field'
                    }}/>
                </div>
            </div>
            <div className="signaturepart__footer">
                <button className='signaturepart__confirm' onClick={()=>{postDamages();}}>
                    Cформировать
                </button>
            </div>
        </div>
    </div>
  )
}

export default SignaturePart