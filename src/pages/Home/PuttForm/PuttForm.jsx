import React from 'react';
import { Form } from 'react-final-form';
import styled from 'styled-components';

import { calcElevation, getSlopeSum } from '../../../utils/slopeCalculations';

import Slopes from './Slopes';
import ElevationField from './ElevationField';

const Styled = {
  Form: styled.form`
    max-width: 500px;
    width: 100%;
  `,
  SubmitButton: styled.button`
    background-color: #4e9af1;
    border: 2px solid #368def;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    margin-top: 20px;
    padding: 10px 20px;

    &:hover {
      background-color: #368def;
    }
  `,
};

const PuttForm = (props) => {
  const handleOnSubmit = (data) => {
    const elevationData = calcElevation(data);
    const sum = getSlopeSum(data);

    props.renderResults({ clickCount: sum, elevationData });
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      {(props) => (
        <Styled.Form onSubmit={props.handleSubmit}>
          <Slopes />
          <ElevationField />
          <Styled.SubmitButton type="submit">Submit</Styled.SubmitButton>
        </Styled.Form>
      )}
    </Form>
  );
};

export default PuttForm;
