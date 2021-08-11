import React from 'react';
import '../styles/calculatorStyles.css';
import Button from './Button';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

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
            <Button buttonName="AC" />
            <Button buttonName="+/-" />
            <Button buttonName="&#37;" />
            <Button buttonName="&divide;" classButton="button orange-button" />
          </div>
          <div className="buttons">
            <Button buttonName="7" />
            <Button buttonName="8" />
            <Button buttonName="9" />
            <Button buttonName="&#215;" classButton="button orange-button" />
          </div>
          <div className="buttons">
            <Button buttonName="4" />
            <Button buttonName="5" />
            <Button buttonName="6" />
            <Button buttonName="-" classButton="button orange-button" />
          </div>
          <div className="buttons">
            <Button buttonName="1" />
            <Button buttonName="2" />
            <Button buttonName="3" />
            <Button buttonName="+" classButton="button orange-button" />
          </div>
          <div className="buttons">
            <Button buttonName="0" classButton="button gray-button zero-button" />
            <Button buttonName="." />
            <Button buttonName="=" classButton="button orange-button" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
