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

export { calcGreenSlope, calcYellowSlope, calcOrangeSlope, calcRedSlope };
