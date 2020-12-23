import React, { useState } from 'react';
import styled from 'styled-components';

import SlopeField from './SlopeField';

const Styled = {
  Container: styled.div`
    margin: 20px auto;
  `,
  Button: styled.button`
    background-color: #ffa500;
    border: 2px solid #ff7b00;
    border-radius: 3px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    padding: 10px;

    &:hover {
      background-color: #ff7b00;
    }
  `,
};

const OrangeSlopes = () => {
  const [slopeFormFieldCount, setSlopeFormFieldCount] = useState(0);
  const [slopeUserCreatedFields, setSlopeUserCreatedFields] = useState([]);

  return (
    <Styled.Container>
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

      <Styled.Button
        type="button"
        onClick={() => {
          setSlopeUserCreatedFields([...slopeUserCreatedFields, SlopeField]);
          setSlopeFormFieldCount(slopeFormFieldCount + 1);
        }}
        disabled={slopeFormFieldCount === 3}>
        Add Orange Slope Field
      </Styled.Button>
    </Styled.Container>
  );
};

export default OrangeSlopes;
