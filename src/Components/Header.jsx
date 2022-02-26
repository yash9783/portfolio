import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const Header = () => {
  const[progress,setProgress]=useState(0)

  return (
    <>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    
    
    <div className='name'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <NavLink className="navbar-brand" to="/">Portfolio</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li div className="nav-item">
          <NavLink className="nav-link" to="/about" onClick={() => setProgress(progress + 10)}>About</NavLink>
         </li>
         <li div className="nav-item">
          <NavLink className="nav-link" to="/service" onClick={() => setProgress(progress + 50)}>Service</NavLink>
         </li>
         <li div className="nav-item">
          <NavLink className="nav-link" to="/contact" onClick={() => setProgress(progress + 100)}>Contact</NavLink>
         </li>
        
         </ul>
        
    </div>
  </div>
</nav>
    </div>
    </>
  )
}

export default Header