import React from 'react';
import { Form } from 'react-final-form';

import {
  calcGreenSlope,
  calcYellowSlope,
  calcOrangeSlope,
  calcRedSlope,
} from '../../../utils/slopeCalculations';

import GreenSlopes from './components/GreenSlopes';
import YellowSlopes from './components/YellowSlopes';
import OrangeSlopes from './components/OrangeSlopes';
import RedSlopes from './components/RedSlopes';

const PuttForm = () => {
  const handleOnSubmit = (data) => {
    // The data here is the "name" value we are adding to the <Field /> component.
    // For example <Field name="greenSlopeType" />. The data will return an object
    // with the key/value of { greenSlopeType: <option value> } (i.e. what the
    // user selected).
    const greenSlopeCount = calcGreenSlope(data);
    const yellowSlopeCount = calcYellowSlope(data);
    const orangeSlopeCount = calcOrangeSlope(data);
    const redSlopeCount = calcRedSlope(data);

    const sum =
      greenSlopeCount + yellowSlopeCount + orangeSlopeCount + redSlopeCount;

    console.log(sum);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <GreenSlopes />
          <YellowSlopes />
          <OrangeSlopes />
          <RedSlopes />
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
};

export default PuttForm;
