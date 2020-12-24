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

const Slopes = () => {
  const [slopeFormFieldCount, setSlopeFormFieldCount] = useState(1);
  const [slopeUserCreatedFields, setSlopeUserCreatedFields] = useState([]);

  const handleOnClick = () => {
    setSlopeUserCreatedFields([...slopeUserCreatedFields, SlopeField]);
    setSlopeFormFieldCount(slopeFormFieldCount + 1);
  };

  return (
    <Styled.Container>
      <SlopeField fieldName="slope" indexLabel="0" displayHeader />

      {slopeUserCreatedFields.map((FieldComponent, index) => (
        <div key={`slope-field-${index + 1}`}>
          <FieldComponent fieldName="slope" indexLabel={`${index + 1}`} />
        </div>
      ))}

      <Styled.Button
        type="button"
        onClick={handleOnClick}
        disabled={slopeFormFieldCount === 12}>
        Add Slope
      </Styled.Button>
    </Styled.Container>
  );
};

export default Slopes;
