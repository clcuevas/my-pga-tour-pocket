import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';

import {
  composeValidators,
  minValue,
  mustBeNumber,
  required,
} from '../../../utils/validators';

const Styled = {
  Container: styled.div``,
  Header: styled.h3``,
  FieldContainer: styled.div``,
  FieldContentContainer: styled.div`
    display: flex;

    margin: 20px auto;
  `,
  FieldError: styled.span`
    color: #ff1a1a;
    font-weight: 500;
    margin-left: 10px;
  `,
  FieldLabel: styled.label`
    flex: 0 0 100px;

    margin-right: 20px;
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

const slopes = [
  { type: 'green', value: 1 },
  { type: 'green', value: 2 },
  { type: 'green', value: 3 },
  { type: 'yellow', value: 4 },
  { type: 'yellow', value: 5 },
  { type: 'yellow', value: 6 },
  { type: 'orange', value: 7 },
  { type: 'orange', value: 8 },
  { type: 'orange', value: 9 },
  { type: 'red', value: 10 },
  { type: 'red', value: 11 },
  { type: 'red', value: 12 },
];

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const GreenSlopeField = (props) => (
  <Styled.Container>
    {props.displayHeader && <Styled.Header>Slopes</Styled.Header>}

    <Styled.FieldContainer>
      <Field
        name={`${props.fieldName}Type${props.indexLabel}`}
        validate={required}>
        {({ input, meta }) => (
          <Styled.FieldContentContainer>
            <Styled.FieldLabel>Slope Type</Styled.FieldLabel>
            <Styled.FieldSelectContainer>
              <Styled.Select {...input}>
                <option />
                {slopes.map(({ type, value }, i) => (
                  <option value={value} key={`option-${i + 1}`}>
                    {capitalize(type)} {value}
                  </option>
                ))}
              </Styled.Select>
              {meta.error && meta.touched && (
                <Styled.FieldError>{meta.error}</Styled.FieldError>
              )}
            </Styled.FieldSelectContainer>
          </Styled.FieldContentContainer>
        )}
      </Field>

      <Field
        name={`${props.fieldName}Count${props.indexLabel}`}
        validate={composeValidators(required, mustBeNumber, minValue(1))}>
        {({ input, meta }) => (
          <Styled.FieldContentContainer>
            <Styled.FieldLabel>Slope Count</Styled.FieldLabel>
            <Styled.FieldInputContainer>
              <Styled.Input {...input} type="text" placeholder="Count" />
              {meta.error && meta.touched && (
                <Styled.FieldError>{meta.error}</Styled.FieldError>
              )}
            </Styled.FieldInputContainer>
          </Styled.FieldContentContainer>
        )}
      </Field>
    </Styled.FieldContainer>
  </Styled.Container>
);

export default GreenSlopeField;
