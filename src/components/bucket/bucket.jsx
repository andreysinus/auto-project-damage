import React from 'react'
import './bucket.scss'
//import deleteIMG from '../../img/delete.svg'

const Bucket = ({bucketState}) => {
    //const [, updateState] = useState();
    //const forceUpdate = React.useCallback(() => updateState({}), []);
    //var arrBucket = bucketState;
  return (
    <div className='bucketbody'>
         {bucketState.length>0 ? bucketState.map(function(d, index){
            return <div className='bucket__item' key={index}>
                 
            </div>;
              }): <p className='bucket__none'>Повреждения<br/>не выбраны</p>}
    </div>
  )
}

export default Bucket