import React, { useState } from 'react';

import SlopeField from './SlopeField';

const YellowSlopes = () => {
  const [slopeFormFieldCount, setSlopeFormFieldCount] = useState(0);
  const [slopeUserCreatedFields, setSlopeUserCreatedFields] = useState([]);

  return (
    <div>
      {slopeUserCreatedFields.map((FieldComponent, index) => (
        <div key={`yellow-slope-field-${index + 1}`}>
          <FieldComponent
            fieldName={`yellowSlope${index + 1}`}
            label="Yellow"
            options={[4, 5, 6]}
            displayHeader={index === 0}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => {
          setSlopeUserCreatedFields([...slopeUserCreatedFields, SlopeField]);
          setSlopeFormFieldCount(slopeFormFieldCount + 1);
        }}
        disabled={slopeFormFieldCount === 3}>
        Add Yellow Slope Field
      </button>
    </div>
  );
};

export default YellowSlopes;
