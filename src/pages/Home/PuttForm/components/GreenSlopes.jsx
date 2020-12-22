import React, { useState } from 'react';

import SlopeField from './SlopeField';

const GreenSlopes = () => {
  const [greenSlopeFormFieldCount, setGreenSlopeFormFieldCount] = useState(1);
  const [
    greenSlopeUserCreatedFields,
    setGreenSlopeUserCreatedFields,
  ] = useState([]);

  return (
    <div>
      <SlopeField
        fieldName="greenSlope"
        label="Green"
        options={[1, 2, 3]}
        displayHeader
      />

      {greenSlopeUserCreatedFields.map((FieldComponent, index) => (
        <div key={`green-slope-field-${index + 1}`}>
          <FieldComponent
            fieldName={`greenSlope${index + 1}`}
            label="Green"
            options={[1, 2, 3]}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => {
          setGreenSlopeUserCreatedFields([
            ...greenSlopeUserCreatedFields,
            SlopeField,
          ]);
          setGreenSlopeFormFieldCount(greenSlopeFormFieldCount + 1);
        }}
        disabled={greenSlopeFormFieldCount === 3}>
        Add Green Slope Field
      </button>
    </div>
  );
};

export default GreenSlopes;
