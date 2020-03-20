import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({
  description,
  name,
  onChange,
  onKeyPress,
  placeholder,
  type,
  value
}) => (
  <div className="input input__wrapper">
    <input
      className="input__field"
      name={name}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      type={type}
      value={value}
    />
    {description && <span className="input__description">{description}</span>}
  </div>
);

Input.defaultProps = {
  description: undefined,
  onChange: undefined,
  onKeyPress: () => null,
  placeholder: '',
  type: 'text',
  value: null
};

Input.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Input;
