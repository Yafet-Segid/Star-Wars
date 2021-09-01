import React, { Component } from "react";
import "./Next.css";
export default class Button extends Component {
  //   constructor(props) {
  //     super(props);

  //     TogglePrev = TogglePrev.bind;
  //     ToggleNext = ToggleNext.bind;
  //   }

  // ToggleNext(){
  //     const selectList =
  // }

  //   const pStyle = {
  //     fontSize: '15px',
  //     textAlign: 'center'
  //   };

  render() {
    return (
      <div>
        <div>
          <button className="prev button">Prev</button>
          <button className="one button">1</button>
          <button className="two button">2</button>
          <button className="three button">3</button>
          <button className="four button">4</button>
          <button className="five button">5</button>
          <button className="six button">6</button>
          <button className="seven button">7</button>
          <button className="next button">Next</button>
        </div>
      </div>
    );
  }
}
