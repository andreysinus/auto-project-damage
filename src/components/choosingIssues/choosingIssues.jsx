import React from 'react'
import './choosingIssues.scss'
import backLogo from '../../img/back.svg'
function ChoosingIssues(props) {
  return (
    <div>
      <div className="choosingissue__header">
        <div className='choosingissue__back'><button onClick={()=>props.setAddProgressState("2")} className='carchoosen__button-back'><img src={backLogo} alt="Назад" /></button>
        </div>
        <h1 className='choosingissue__title'>{props.selectedPart.name}</h1>
      </div>
      <div className='choosingissue__body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo similique sint amet et fugit debitis officiis delectus dolorem, necessitatibus dolores fugiat? Eveniet quis non, blanditiis cupiditate hic, rerum similique temporibus accusamus delectus ratione, illo itaque sed ex aperiam officia quibusdam labore ipsa ullam iusto? Incidunt cumque inventore minima quis reiciendis possimus assumenda, dolor molestias culpa blanditiis, eius aut qui? Laudantium nobis saepe recusandae ipsum eligendi laboriosam odit mollitia culpa porro? Officiis accusamus esse aut recusandae dolorum ut vel sequi voluptatibus, atque est a consequatur molestias illum harum dolorem deserunt provident odio facere sunt repudiandae error. Molestias aliquid deserunt sunt ex suscipit fugit eveniet ipsam voluptatum tempora hic quibusdam error enim velit placeat vitae nihil veritatis ipsum cupiditate cum sint unde, eaque repellat quam! Minima dicta voluptatibus perspiciatis deserunt maxime, magni omnis accusantium. Dolor minus eaque mollitia vel, dolores quam, provident ab voluptatem sed non dolorem magni accusamus incidunt error?</div>
      <div className='choosingissue__footer'>
        <button className='choosingissue__addbutton'>Добавить повреждения</button>
      </div>
    </div>
  )
}

export default ChoosingIssues