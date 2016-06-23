import React from 'react';

const TodoInput = ({ className, type, defaultValue, onChange, placeholder }) => {
  const handleChange = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onChange(event.target.value);
  };

  return (<input
    className={ className }
    onChange={ handleChange }
    type={ type }
    value={ defaultValue }
    placeholder={ placeholder }
  />);
};

TodoInput.propTypes = {
  className: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  type: React.PropTypes.string.isRequired,
  defaultValue: React.PropTypes.string,
  placeholder: React.PropTypes.string
};

export default TodoInput;
