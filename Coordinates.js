import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import devmtn from './devmtn.png';

class Coordinates extends Component {
  constructor() {
    super();

    this.state = {
      homeTown: NaN,
      distance: 0
    }
    //this.homeTown = this.homeTown.bind( this );
  }

  handleChange(val) {
    console.log(val);

      if ((val + '').length === 5 && +val) {
        console.log("in the if statement")
        axios.get(`https://www.zipcodeapi.com/rest/PKcpo7IZ3aefwW8aPBBvRzPx0Gsg4kwT5IjtQ1tUbH9IEiStTuYL4Ni5uKly5Rsa/distance.json/85281/${val}`).then((response) => {
          console.log(response.data.distance);
          this.setState({
            distance: response.data.distance
          })
        })            
      }
  }
    

    render() {
      return (
<div className="body">
        <p>How many miles did you travel to DevMountain?</p>
    <div className="search">
          <input placeholder="🏠 Zip Code" className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmation-button" onClick={ () => { this.handleChange(94566) }}>Submit</button>
    </div>
    <div className= "totals">

      <div className="total">    
      <div className="line1">You traveled,</div>
      <div className="line2">{this.state.distance}</div>
      <div className="line3">miles</div>
      <div className="line4">to DevMountain</div>
    </div>

    <div className="total">
            <div className="line1">Students traveled,</div>
            <div className="line2">{this.state.distance}</div>
            <div className="line3">miles</div>
            <div className="line4">to DevMountain</div>
    </div> 
  </div>
  <p></p>     
</div>
      );
    }
  }
  export default Coordinates;






// function myFun(thing) {
//     console.log(+thing);
//     if (thing.length === 5 && +thing) {

//     }
// }
// myFun('1234567');