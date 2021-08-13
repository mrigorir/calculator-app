import React from 'react';
import '../styles/calculatorStyles.css';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculateObj: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj, buttonName) {
    this.setState({ calculateObj: calculate(obj, buttonName) });
  }

  render() {
    const { calculateObj } = this.state;
    let display = 0;

    if (Object.keys(calculateObj).length === 0 || (calculateObj.total === null
      && calculateObj.next === null
      && calculateObj.operation === null)) {
      display = 0;
    } else {
      display = calculateObj.next !== null ? calculateObj.next : calculateObj.total;
    }
    return (
      <div className="container">
        <div className="display">
          <span className="display-number">
            {display}
          </span>
        </div>
        <div className="buttonContainer">
          <div className="buttons">
            <Button buttonName="AC" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="+/-" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="&#37;" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="&divide;" classButton="button orange-button" onClick={this.handleClick} calcObject={calculateObj} />
          </div>
          <div className="buttons">
            <Button buttonName="7" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="8" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="9" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="x" classButton="button orange-button" onClick={this.handleClick} calcObject={calculateObj} />
          </div>
          <div className="buttons">
            <Button buttonName="4" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="5" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="6" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="-" classButton="button orange-button" onClick={this.handleClick} calcObject={calculateObj} />
          </div>
          <div className="buttons">
            <Button buttonName="1" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="2" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="3" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="+" classButton="button orange-button" onClick={this.handleClick} calcObject={calculateObj} />
          </div>
          <div className="buttons">
            <Button buttonName="0" classButton="button gray-button zero-button" onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="." onClick={this.handleClick} calcObject={calculateObj} />
            <Button buttonName="=" classButton="button orange-button" onClick={this.handleClick} calcObject={calculateObj} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
