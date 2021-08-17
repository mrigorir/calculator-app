import React, { useState } from 'react';
import Button from './Button';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [calculateObj, setCalculateObj] = useState({});

  const handleClick = (obj, buttonName) => {
    setCalculateObj(calculate(obj, buttonName));
  };

  let display = 0;

  if (Object.keys(calculateObj).length === 0 || (calculateObj.total === null
    && calculateObj.next === null
    && calculateObj.operation === null)) {
    display = 0;
  } else {
    display = calculateObj.next !== null ? calculateObj.next : calculateObj.total;
  }

  return (
    <div className="calc-container">
      <div className="display">
        <span className="display-number">
          {display}
        </span>
      </div>
      <div className="buttonContainer">
        <div className="buttons">
          <Button buttonName="AC" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="+/-" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="&#37;" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="&divide;" classButton="button orange-button" onClick={handleClick} calcObject={calculateObj} />
        </div>
        <div className="buttons">
          <Button buttonName="7" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="8" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="9" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="x" classButton="button orange-button" onClick={handleClick} calcObject={calculateObj} />
        </div>
        <div className="buttons">
          <Button buttonName="4" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="5" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="6" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="-" classButton="button orange-button" onClick={handleClick} calcObject={calculateObj} />
        </div>
        <div className="buttons">
          <Button buttonName="1" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="2" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="3" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="+" classButton="button orange-button" onClick={handleClick} calcObject={calculateObj} />
        </div>
        <div className="buttons">
          <Button buttonName="0" classButton="button gray-button zero-button" onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="." onClick={handleClick} calcObject={calculateObj} />
          <Button buttonName="=" classButton="button orange-button" onClick={handleClick} calcObject={calculateObj} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
