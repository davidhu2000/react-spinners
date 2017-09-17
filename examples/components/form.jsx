import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ inputs, update }) => (
  <div className='spinner-form'>
    { Object.keys(inputs).map(name => (
      <div className='spinner-form-input'>
        <input
          name={name}
          type={name === 'margin' ? 'text' : 'number'}
          value={inputs[name]}
          onChange={update(name)}
        />
        <span className={`bar`} />
        <label htmlFor={name}>
          { name }
        </label>
      </div>
    ))}
  </div>
);

Form.propTypes = {
  inputs: PropTypes.shape().isRequired,
  update: PropTypes.func.isRequired
};

export { Form };
