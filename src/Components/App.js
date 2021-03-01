import React from 'react'
import './App.css';
import { BrowserRouter,Route,Switch,withRouter} from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Footer from './Footer'
import Signin from './Signin'
import Signup from './Signup'
import About from './About'
import Contact from './Contact'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navigation/> 
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/signin' exact component={Signin}/>
            <Route path='/signup' exact component={Signup}/>
            <Route path='/about' exact component={About}/>
            <Route path='/contact' exact component={Contact}/>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
