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

const GreenSlopeField = (props) => (
  <Styled.Container>
    {props.label && props.displayHeader && (
      <Styled.Header>{props.label} Slopes</Styled.Header>
    )}

    <Styled.FieldContainer>
      <Field name={`${props.fieldName}Type`} validate={required}>
        {({ input, meta }) => (
          <Styled.FieldContentContainer>
            {props.label && <Styled.FieldLabel>Slope Type:</Styled.FieldLabel>}

            <Styled.FieldSelectContainer>
              <Styled.Select {...input}>
                <option />
                {props.options.map((value, i) => (
                  <option value={value} key={`option-${i + 1}`}>
                    {props.label} {value}
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
        name={`${props.fieldName}Count`}
        validate={composeValidators(required, mustBeNumber, minValue(1))}>
        {({ input, meta }) => (
          <Styled.FieldContentContainer>
            <Styled.FieldLabel>No.</Styled.FieldLabel>
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
