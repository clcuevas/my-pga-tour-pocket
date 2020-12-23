import React, { useState } from 'react';
import styled from 'styled-components';

import SlopeField from './SlopeField';

const Styled = {
  Container: styled.div`
    margin: 20px auto;
  `,
  Button: styled.button`
    background-color: #ffff89;
    border: 2px solid #e2e2e2;
    border-radius: 3px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    padding: 10px;

    &:hover {
      background-color: #e2e2e2;
    }
  `,
};

const YellowSlopes = () => {
  const [slopeFormFieldCount, setSlopeFormFieldCount] = useState(0);
  const [slopeUserCreatedFields, setSlopeUserCreatedFields] = useState([]);

  return (
    <Styled.Container>
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

      <Styled.Button
        type="button"
        onClick={() => {
          setSlopeUserCreatedFields([...slopeUserCreatedFields, SlopeField]);
          setSlopeFormFieldCount(slopeFormFieldCount + 1);
        }}
        disabled={slopeFormFieldCount === 3}>
        Add Yellow Slope Field
      </Styled.Button>
    </Styled.Container>
  );
};

export default YellowSlopes;
