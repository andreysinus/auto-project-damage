import React, { useState } from 'react'
import './bucket.scss'
import ImagePreview from '../imagePreview/imagePreview';
//import deleteIMG from '../../img/delete.svg'

const Bucket = ({bucketState}) => {
  function setDegree(degree){
    switch (degree){
      case "1": return "Слабое"
      case "2": return "Среднее"
      case "3": return "Тяжелое"
      default: return "Нет"
    }
  }
  const [visible, setVisible] = useState(false);
  const [imageURL, setImageURL] = useState("");
    const [, updateState] = useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    //var arrBucket = bucketState;
  return (
    <div>
    {visible? <ImagePreview visible={visible} setVisible={setVisible} imageURL={imageURL} forceUpdate={forceUpdate}/>:<div></div>}
    <div className='bucketbody'>
         {bucketState.length>0 ? bucketState.map(function(d, index){
            return <div className='bucket__item' key={index}>
                <button className='bucket__delete'><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13" cy="13" r="13" fill="#989898"/>
                    <path d="M18.2089 15.7317L15.1574 12.6796L17.9892 9.84752C18.5246 9.3124 18.5244 8.44436 17.9892 7.90908C17.454 7.37395 16.5862 7.37395 16.0509 7.90924L13.2188 10.7413L10.2482 7.77034C9.71273 7.23521 8.84486 7.23521 8.30974 7.77034C7.77479 8.30595 7.77462 9.17333 8.30991 9.70861L11.2807 12.6794L8.08982 15.8703C7.55405 16.4061 7.55454 17.2734 8.08982 17.8087C8.62511 18.344 9.49281 18.3439 10.0279 17.8091L13.2191 14.6179L16.2713 17.67C16.8062 18.205 17.674 18.2051 18.2089 17.6702C18.745 17.135 18.7445 16.2667 18.2089 15.7317Z" fill="white"/>
                    </svg>
                </button>
                <div className="bucket__box">
                  <p className="bucket__title">{d.name}</p>
                  <div className="bucket__values">
                    <div className="bucket__type">
                      <div className="bucket__valuetitle">Тип:</div>
                      <div className="bucket__valuedesc">{d.type}</div>
                    </div>
                    <div className="bucket__degree">
                      <div className="bucket__valuetitle">Степень:</div>
                      <div className="bucket__valuedesc">{setDegree(d.degree)}</div>
                    </div>
                    <button className="bucket__preview" onClick={() =>{ console.log(imageURL); setImageURL(d.photo); setVisible(true);}}>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.8914 0.210876H2.10863C0.94593 0.210876 0 1.15681 0 2.3195V19.6805C0 20.8432 0.94593 21.7892 2.10863 21.7892H19.8914C21.0541 21.7892 22 20.8432 22 19.6805V2.3195C22 1.15681 21.0541 0.210876 19.8914 0.210876ZM19.8914 2.3195L19.8921 11.5432L16.3297 8.19765C16.0806 7.9638 15.7616 7.83504 15.4314 7.83504C15.0297 7.83504 14.6538 8.02348 14.4001 8.35193L10.2065 13.7821C10.0706 13.9581 9.85256 14.0631 9.62321 14.0631C9.46696 14.0631 9.31928 14.0156 9.19614 13.9257L6.47088 11.9354C6.19943 11.7371 5.84778 11.628 5.48088 11.628C5.06302 11.628 4.67229 11.7642 4.38088 12.0115L2.10863 13.9387V2.3195H19.8914Z" fill="#393939"/>
                      <path d="M8.08297 8.57508C9.28439 8.57508 10.2619 7.59759 10.2619 6.39617C10.2619 5.19474 9.28439 4.21725 8.08297 4.21725C6.88154 4.21725 5.90405 5.19474 5.90405 6.39617C5.90405 7.59759 6.88154 8.57508 8.08297 8.57508Z" fill="#393939"/>
                      </svg>
                      </button>
                  </div>
                  <p className="bucket__price">={d.price} ₽</p>
                </div>
                
            </div>;
              }): <p className='bucket__none'>Повреждения<br/>не выбраны</p>}
              
    </div>
    </div>
  )
}

export default Bucket