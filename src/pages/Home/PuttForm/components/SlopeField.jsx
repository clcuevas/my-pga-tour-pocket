import React from 'react';
import { Field } from 'react-final-form';

const GreenSlopeField = (props) => {
  const required = (value) => (value ? null : 'Required');

  const mustBeNumber = (value) =>
    Number.isNaN(value) ? 'Must be a number' : null;

  const minValue = (min) => (value) =>
    Number.isNaN(value) || value >= min
      ? null
      : `Should be greater than ${min}`;

  const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), null);

  return (
    <React.Fragment>
      {props.label && props.displayHeader && <h3>{props.label} Slopes</h3>}
      <Field name={`${props.fieldName}Type`} validate={required}>
        {({ input, meta }) => (
          <div>
            {props.label && <label>{props.label} Slope</label>}
            <select {...input}>
              <option />
              {props.options.map((value, i) => (
                <option value={value} key={`option-${i + 1}`}>
                  {props.label} {value}
                </option>
              ))}
            </select>
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        )}
      </Field>

      <Field
        name={`${props.fieldName}Count`}
        validate={composeValidators(required, mustBeNumber, minValue(1))}>
        {({ input, meta }) => (
          <div>
            <label>No.</label>
            <input {...input} type="text" placeholder="Count" />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        )}
      </Field>
    </React.Fragment>
  );
};

export default GreenSlopeField;
