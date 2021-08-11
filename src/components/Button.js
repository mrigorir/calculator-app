import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonName, classButton } = this.props;
    return (
      <button className={classButton} type="button">{ buttonName }</button>
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
};

export default Button;
