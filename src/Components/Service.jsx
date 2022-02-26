import React from 'react'
import DATA from './Data'

const Service = () => {

  const card=(props)=>{
    return(
    <div className='col-md-4 '>
      <div className="card " key={props.id}>
  <img src={props.img} className="card-img-top mx-auto p-2" alt={props.title}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
  </div>
</div>
    </div>
    )
  }
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center py-4 mb-5'>
            <h1>Service</h1>
            <hr/>

          </div>
        </div>
        <div className='row'>
          {DATA.map(card)}
        </div>
      </div>
    </div>
  )
}

export default Service