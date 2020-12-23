import React, { useState } from 'react';
import styled from 'styled-components';

import SlopeField from './SlopeField';

const Styled = {
  Container: styled.div`
    margin: 20px auto;
  `,
  Button: styled.button`
    background-color: #77dd77;
    border: 2px solid #4ed34e;
    border-radius: 3px;
    color: #444c44;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    padding: 10px;

    &:hover {
      background-color: #4ed34e;
    }
  `,
};

const GreenSlopes = () => {
  const [greenSlopeFormFieldCount, setGreenSlopeFormFieldCount] = useState(1);
  const [
    greenSlopeUserCreatedFields,
    setGreenSlopeUserCreatedFields,
  ] = useState([]);

  return (
    <Styled.Container>
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

      <Styled.Button
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
      </Styled.Button>
    </Styled.Container>
  );
};

export default GreenSlopes;
