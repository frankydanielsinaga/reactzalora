import React, {Component} from 'react';
import './style/style.css';


class App extends Component{
  render(){
    return(
      <div className="wraaper">
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <img className="imgfluid" src={require('./logo/zalora-logo.png')} />
            </div>
            <div className="menu">
             <ul>
                <li><a>wanita</a></li>
                <li><a>pria</a></li>
                <li><a>anak-anak</a></li>
             </ul>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
} 
export default App;
