import React, {Component} from 'react';
import DrawingBoardHockey from './components/DrawingBoardHockey'
import DrawingBoardSoccer from './components/DrawingBoardSoccer';
import DrawingBoardFootball from './components/DrawingBoardFootball'
import DrawingBoardBasketball from './components/DrawingBoardBasketball'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';


class App extends Component {
state = {
  Container: [<DrawingBoardHockey/>]
}

addHockey() {
  this.setState({ Container: <DrawingBoardHockey /> })
  document.getElementById('hockeybutton').classList.add("active", "btn-primary")
  
  document.getElementById('bballbutton').classList.remove("active", "btn-primary")
  document.getElementById('footballbutton').classList.remove("active", "btn-primary")
  document.getElementById('soccerbutton').classList.remove("active", "btn-primary")
}

addFootball() {
  this.setState({ Container: <DrawingBoardFootball /> })
  document.getElementById('footballbutton').classList.add("active", "btn-primary")
  
  document.getElementById('hockeybutton').classList.remove("active", "btn-primary")
  document.getElementById('bballbutton').classList.remove("active", "btn-primary")
  document.getElementById('soccerbutton').classList.remove("active", "btn-primary")
}

addSoccer() {
  this.setState({ Container: <DrawingBoardSoccer /> })
  document.getElementById('soccerbutton').classList.add("active", "btn-primary")
  
  document.getElementById('hockeybutton').classList.remove("active", "btn-primary")
  document.getElementById('bballbutton').classList.remove("active", "btn-primary")
  document.getElementById('footballbutton').classList.remove("active", "btn-primary")
}
 
 addBasketball() {
  this.setState({ Container: <DrawingBoardBasketball /> })
  document.getElementById('bballbutton').classList.add("active", "btn-primary")
  
  document.getElementById('hockeybutton').classList.remove("active", "btn-primary")
  document.getElementById('footballbutton').classList.remove("active", "btn-primary")
  document.getElementById('soccerbutton').classList.remove("active", "btn-primary")
}

render () {

  return (
    <div className="App">
    
      <div class="card-header d-flex justify-content-center" id="cardheader">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        {/* <button class="nav-link active" >Hockey</button> */}
        <button type="button" id="hockeybutton" className="nav-link active btn-primary" onClick={() => this.addHockey()}>Hockey</button>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link" href="#">Football</a> */}
         <button  type="button" id="footballbutton" className="nav-link" onClick={() => this.addFootball()}>Football</button>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link" href="#">Soccer</a> */}
        <button  type="button" id="soccerbutton" className="nav-link" onClick={() => this.addSoccer()}>Soccer</button>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link" href="#">Basketball</a> */}
         <button type="button" id="bballbutton" className="nav-link" onClick={() => this.addBasketball()}>Basketball</button>
      </li>
    </ul>
    </div>
    
      {/* <div class="btn-group mr-2 d-flex justify-content-center" role="group" >
      </div> */}
      
      {this.state.Container}
      
    </div>
  );
  }
}
export default App;
