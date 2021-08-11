import React from 'react';
import '../styles/calculatorStyles.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="display">
          <span className="display-number">
            0
          </span>
        </div>
        <div className="buttonContainer">
          <div className="buttons">
            <button className="button gray-button" type="button"> 0 </button>
            <button className="button gray-button" type="button">+/- </button>
            <button className="button gray-button" type="button">&#37; </button>
            <button className="button orange-button" type="button">&divide;</button>
          </div>
          <div className="buttons">
            <button className="button gray-button" type="button">7  </button>
            <button className="button gray-button" type="button">8 </button>
            <button className="button gray-button" type="button">9   </button>
            <button className="button orange-button" type="button">&#215; </button>
          </div>
          <div className="buttons">
            <button className="button gray-button" type="button">4  </button>
            <button className="button gray-button" type="button">5 </button>
            <button className="button gray-button" type="button">6   </button>
            <button className="button orange-button" type="button"> - </button>
          </div>
          <div className="buttons">
            <button className="button gray-button" type="button">1    </button>
            <button className="button gray-button" type="button">2    </button>
            <button className="button gray-button" type="button">3    </button>
            <button className="button orange-button" type="button"> + </button>
          </div>
          <div className="buttons">
            <button className="button gray-button zero-button" type="button"> 0  </button>
            <button className="button gray-button" type="button">.   </button>
            <button className="button orange-button" type="button"> = </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
