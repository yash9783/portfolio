
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Service from './Components/Service';
import Contact from './Components/Contact';
import About from './Components/About';
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/service' component={Service}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>

     
      
    </div>
  );
}

export default App;
