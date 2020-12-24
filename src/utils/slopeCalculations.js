const calcSlope = (data) => {
  let count = 0;
  let types = Object.keys(data).filter((key) => key.includes('slopeType'));

  types.forEach((type) => {
    const slopeType = Number.parseInt(data[type], 10);
    const slopeCount = Number.parseInt(data[type.replace('Type', 'Count')], 10);

    count += slopeType * slopeCount;
  });

  return count;
};

const getSlopeSum = (data) => {
  let sum = calcSlope(data);

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
