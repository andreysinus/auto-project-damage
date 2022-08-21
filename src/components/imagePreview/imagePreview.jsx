import React from 'react'
import './imagePreview.scss'

function ImagePreview(props) {
  return (
    <div>
         <div className={props.visible ? "imagepreview active" : "imagepreview"} onClick={()=>props.setVisible(false)}> 
            
          <div className="imagepreview__content" onClick={e => e.stopPropagation()}>
          <button onClick={()=>props.setVisible(false)} className='imagepreview__close'><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13" cy="13" r="13" fill="#989898"/>
                    <path d="M18.2089 15.7317L15.1574 12.6796L17.9892 9.84752C18.5246 9.3124 18.5244 8.44436 17.9892 7.90908C17.454 7.37395 16.5862 7.37395 16.0509 7.90924L13.2188 10.7413L10.2482 7.77034C9.71273 7.23521 8.84486 7.23521 8.30974 7.77034C7.77479 8.30595 7.77462 9.17333 8.30991 9.70861L11.2807 12.6794L8.08982 15.8703C7.55405 16.4061 7.55454 17.2734 8.08982 17.8087C8.62511 18.344 9.49281 18.3439 10.0279 17.8091L13.2191 14.6179L16.2713 17.67C16.8062 18.205 17.674 18.2051 18.2089 17.6702C18.745 17.135 18.7445 16.2667 18.2089 15.7317Z" fill="white"/>
                    </svg></button>
                <img src={props.imageURL} alt="Повреждение" width="290"/>
                </div>
          </div>
    </div>
  )
}

export default ImagePreview