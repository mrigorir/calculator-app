import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { buttonName, onClick, calcObject } = this.props;
    onClick(calcObject, buttonName);
  }

  render() {
    const { buttonName, classButton } = this.props;
    return (
      <button className={classButton} type="button" onClick={this.handleClick}>{ buttonName }</button>
    );
  }
}

Button.defaultProps = {
  buttonName: '?',
  classButton: 'button grtay-button',
};

Button.propTypes = {
  buttonName: PropTypes.string,
  classButton: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  calcObject: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Button;
