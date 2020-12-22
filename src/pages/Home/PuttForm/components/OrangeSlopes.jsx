import React, { useState } from 'react';

import SlopeField from './SlopeField';

const OrangeSlopes = () => {
  const [slopeFormFieldCount, setSlopeFormFieldCount] = useState(0);
  const [slopeUserCreatedFields, setSlopeUserCreatedFields] = useState([]);

  return (
    <div>
      {slopeUserCreatedFields.map((FieldComponent, index) => (
        <div key={`orange-slope-field-${index + 1}`}>
          <FieldComponent
            fieldName={`orangeSlope${index + 1}`}
            label="Orange"
            options={[7, 8, 9]}
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
        Add Orange Slope Field
      </button>
    </div>
  );
};

export default OrangeSlopes;
