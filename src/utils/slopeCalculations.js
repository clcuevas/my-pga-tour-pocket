const calcGreenSlope = (data) => {
  let count = 0;

  let props = Object.keys(data).filter((key) => key.includes('greenSlope'));

  props.forEach((key) => {
    if (key.includes('Count')) {
      const userInputCount = data[key];
      const typeKey = key.replace('Count', 'Type');
      const userInputType = data[typeKey];

      count +=
        Number.parseInt(userInputCount, 10) *
        Number.parseInt(userInputType, 10);
    }
  });

  return count;
};

const calcYellowSlope = (data) => {
  let count = 0;

  let props = Object.keys(data).filter((key) => key.includes('yellowSlope'));

  props.forEach((key) => {
    if (key.includes('Count')) {
      const userInputCount = data[key];
      const typeKey = key.replace('Count', 'Type');
      const userInputType = data[typeKey];

      count +=
        Number.parseInt(userInputCount, 10) *
        Number.parseInt(userInputType, 10);
    }
  });

  return count;
};

const calcOrangeSlope = (data) => {
  let count = 0;

  let props = Object.keys(data).filter((key) => key.includes('orangeSlope'));

  props.forEach((key) => {
    if (key.includes('Count')) {
      const userInputCount = data[key];
      const typeKey = key.replace('Count', 'Type');
      const userInputType = data[typeKey];

      count +=
        Number.parseInt(userInputCount, 10) *
        Number.parseInt(userInputType, 10);
    }
  });

  return count;
};

const calcRedSlope = (data) => {
  let count = 0;

  let props = Object.keys(data).filter((key) => key.includes('redSlope'));

  props.forEach((key) => {
    if (key.includes('Count')) {
      const userInputCount = data[key];
      const typeKey = key.replace('Count', 'Type');
      const userInputType = data[typeKey];

      count +=
        Number.parseInt(userInputCount, 10) *
        Number.parseInt(userInputType, 10);
    }
  });

  return count;
};

const getSlopeSum = (data) => {
  const greenSlopeCount = calcGreenSlope(data);
  const yellowSlopeCount = calcYellowSlope(data);
  const orangeSlopeCount = calcOrangeSlope(data);
  const redSlopeCount = calcRedSlope(data);

  let sum =
    greenSlopeCount + yellowSlopeCount + orangeSlopeCount + redSlopeCount;

  if (data.elevationType === 'down') {
    // We need to adjust the sum when working with a downhill putt.
    // For every 2 inches, we want to add 1 to our sum.
    const adjustment = Math.floor(
      Number.parseInt(data.elevationInches, 10) / 2,
    );

    sum += adjustment;
  }

  return sum;
};

const calcElevation = (data) => {
  const feetHole = Number.parseInt(data.holeFeet, 10);
  const inches = Number.parseInt(data.elevationInches, 10);

  const feetAdjustment = data.elevationType === 'up' ? inches * 1.5 : inches;
  const adjustedTotalFeet =
    data.elevationType === 'up'
      ? feetHole + feetAdjustment
      : feetHole - feetAdjustment;

  const isFiftyFeetOrMore = adjustedTotalFeet >= 50;

  return {
    feetAdjustment,
    adjustedTotalFeet: isFiftyFeetOrMore
      ? adjustedTotalFeet / 2
      : adjustedTotalFeet,
    isFiftyFeetOrMore,
    direction: data.elevationType,
  };
};

export { getSlopeSum, calcElevation };
