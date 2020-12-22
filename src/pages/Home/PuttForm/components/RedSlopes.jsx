import React, { useState } from 'react';

import SlopeField from './SlopeField';

const RedSlopes = () => {
  const [slopeFormFieldCount, setSlopeFormFieldCount] = useState(0);
  const [slopeUserCreatedFields, setSlopeUserCreatedFields] = useState([]);

  return (
    <div>
      {slopeUserCreatedFields.map((FieldComponent, index) => (
        <div key={`red-slope-field-${index + 1}`}>
          <FieldComponent
            fieldName={`redSlope${index + 1}`}
            label="Red"
            options={[10, 11, 12]}
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
        Add Red Slope Field
      </button>
    </div>
  );
};

export default RedSlopes;
