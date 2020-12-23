import React from 'react';
import { Field } from 'react-final-form';

import {
  composeValidators,
  minValue,
  mustBeNumber,
  required,
} from '../../../../utils/validators';

const ElevationField = () => (
  <>
    <h3>Elevation</h3>
    <Field
      name="holeFeet"
      validate={composeValidators(required, mustBeNumber, minValue(1))}>
      {({ input, meta }) => (
        <div>
          <label>Hole</label>
          <input {...input} type="text" placeholder="Feet from hole" />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>

    <Field name="elevationType" validate={required}>
      {({ input, meta }) => (
        <div>
          <label>Woot</label>
          <select {...input}>
            <option />
            <option value="up">Uphill</option>
            <option value="down">Downhill</option>
          </select>
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>

    <Field
      name="elevationInches"
      validate={composeValidators(required, mustBeNumber, minValue(0))}>
      {({ input, meta }) => (
        <div>
          <label>Inches</label>
          <input {...input} type="text" placeholder="Inches" />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  </>
);

export default ElevationField;
