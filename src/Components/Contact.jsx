import React,{useState}from 'react'


const Contact = () => {

  const[data,setData]=useState({
    name:'',
    email:'',
    msg:''
  })

  const eventHandler=(event)=>{
    const{name,value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      }
    })
  }

  const submitHandler=(event)=>{
    event.preventDefault();
    alert(`Name:${data.name},Email:${data.email},Msg:${data.msg}`)
  }
  return (
    <div>
      <section className='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center py-4 mb-5'>
              <h1>Contact</h1>
              <hr/>

            </div>
          </div>

          <div className='container'>
            <div className='row d-flex justify-content-center'>
              <div className='col-md-9'>
                
                <form onSubmit={submitHandler}>
  <div className="mb-3">
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label  d-flex justify-content-left">Full Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='name' onChange={eventHandler} value={data.name}/>
  </div>
    <label htmlFor="exampleInputEmail1" className="form-label d-flex justify-content-left">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name='email' onChange={eventHandler} value={data.email}/>
    <div id="emailHelp" className="form-text d-flex justify-content-left">We'll never share your email with anyone else.</div>
  </div>
  
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label d-flex justify-content-left">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='msg' onChange={eventHandler} value={data.msg}></textarea>
</div>
  <button type="submit" className=" sub btn  d-flex justify-content-left" >Submit</button>
</form>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact