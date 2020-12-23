import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';

import {
  composeValidators,
  minValue,
  mustBeNumber,
  required,
} from '../../../../utils/validators';

const Styled = {
  Container: styled.div`
    margin: 20px auto;
  `,
  FieldContentContainer: styled.div`
    display: flex;
    margin: 10px auto;
  `,
  FieldError: styled.span`
    color: #ff1a1a;
    font-weight: 500;
    margin-left: 10px;
  `,
  FieldLabel: styled.label`
    flex: 0 0 100px;
  `,
  FieldSelectContainer: styled.div`
    flex: 1 0 0;
  `,
  FieldInputContainer: styled.div`
    flex: 1 0 0;
  `,
  Select: styled.select`
    padding: 5px;

    max-width: 200px;
    width: 100%;
  `,
  Input: styled.input`
    padding: 5px;

    max-width: 185px;
    width: 100%;
  `,
};

const ElevationField = () => (
  <Styled.Container>
    <h3>Elevation</h3>
    <Field
      name="holeFeet"
      validate={composeValidators(required, mustBeNumber, minValue(1))}>
      {({ input, meta }) => (
        <Styled.FieldContentContainer>
          <Styled.FieldLabel>Hole</Styled.FieldLabel>
          <Styled.FieldInputContainer>
            <Styled.Input {...input} type="text" placeholder="Feet from hole" />
            {meta.error && meta.touched && (
              <Styled.FieldError>{meta.error}</Styled.FieldError>
            )}
          </Styled.FieldInputContainer>
        </Styled.FieldContentContainer>
      )}
    </Field>

    <Field name="elevationType" validate={required}>
      {({ input, meta }) => (
        <Styled.FieldContentContainer>
          <Styled.FieldLabel>Direction</Styled.FieldLabel>
          <Styled.FieldSelectContainer>
            <Styled.Select {...input}>
              <option />
              <option value="up">Uphill</option>
              <option value="down">Downhill</option>
            </Styled.Select>
            {meta.error && meta.touched && (
              <Styled.FieldError>{meta.error}</Styled.FieldError>
            )}
          </Styled.FieldSelectContainer>
        </Styled.FieldContentContainer>
      )}
    </Field>

    <Field
      name="elevationInches"
      validate={composeValidators(required, mustBeNumber, minValue(0))}>
      {({ input, meta }) => (
        <Styled.FieldContentContainer>
          <Styled.FieldLabel>Inches</Styled.FieldLabel>
          <Styled.FieldInputContainer>
            <Styled.Input {...input} type="text" placeholder="Inches" />
            {meta.error && meta.touched && (
              <Styled.FieldError>{meta.error}</Styled.FieldError>
            )}
          </Styled.FieldInputContainer>
        </Styled.FieldContentContainer>
      )}
    </Field>
  </Styled.Container>
);

export default ElevationField;
