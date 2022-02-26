import React from 'react'


const About = () => {
  
  return (
    <div className='a'>
      <section className='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center py-4 my-5'>
              <h1 className='ab'>About</h1>
              <hr/>
               </div>
               
            <div className='col-md-6 my-5 yash'>
            <h1 className='display-5  mb-4 '>Yash Jhalani</h1>
            <p className='lead mb-5 '>I am Yash Jhalani from Dausa,Rajasthan. I Have completed my Senior Secondary education from Gargi School Dausa. At present I am pursuing my B.Tech from Chandigarh University.My aggregate CGPA is 8.0 CGPA. I have made a project by Front-end Languages and Framework.</p>

            <div className="progress my-4">
  <div className="progress-bar bg-success" role="progressbar" style={{width:"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">HTML</div>
  <span className="pro">80%</span>
</div>
<div className="progress my-4">
  <div className="progress-bar bg-info" role="progressbar" style={{width:"75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">CSS</div>
  <span className="pro">75%</span>
</div>
<div className="progress my-4">
  <div className="progress-bar bg-warning" role="progressbar" style={{width:"65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">JAVASCRIPT</div>
  <span className="pro">60%</span>
</div>
<div className="progress my-4">
  <div className="progress-bar bg-secondary" role="progressbar" style={{width:"85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">BOOTSTRAP</div>
  <span className="pro">85%</span>
</div>
<div className="progress my-4">
  <div className="progress-bar bg-danger" role="progressbar" style={{width:"70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">REACT JS</div>
  <span className="pro">70%</span>
</div>
            
            
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About