import React from 'react'
import './allDamages.scss'
function AllDamages(props) {
  return (
    <div className='alldamages'><p className='alldamages__title'>Повреждения детали<br/>"{props.selectedPart}"</p></div>
  )
}

export default AllDamages