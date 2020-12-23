export const required = (value) => (value ? null : 'Required');

export const mustBeNumber = (value) =>
  Number.isNaN(value) ? 'Must be a number' : null;

export const minValue = (min) => (value) =>
  Number.isNaN(value) || value >= min ? null : `Should be greater than ${min}`;

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), null);
