import React, { useState } from 'react';
import styled from 'styled-components';

import SlopeField from './SlopeField';

const Styled = {
  Container: styled.div`
    margin: 20px auto;
  `,
  Button: styled.button`
    background-color: #ff3333;
    border: 2px solid #ff1a1a;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    padding: 10px;

    &:hover {
      background-color: #ff1a1a;
    }
  `,
};

const RedSlopes = () => {
  const [slopeFormFieldCount, setSlopeFormFieldCount] = useState(0);
  const [slopeUserCreatedFields, setSlopeUserCreatedFields] = useState([]);

  return (
    <Styled.Container>
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

      <Styled.Button
        type="button"
        onClick={() => {
          setSlopeUserCreatedFields([...slopeUserCreatedFields, SlopeField]);
          setSlopeFormFieldCount(slopeFormFieldCount + 1);
        }}
        disabled={slopeFormFieldCount === 3}>
        Add Red Slope Field
      </Styled.Button>
    </Styled.Container>
  );
};

export default RedSlopes;
