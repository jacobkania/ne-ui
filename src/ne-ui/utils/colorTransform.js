const targets = {
  shadow: 0,
  highlight: 1,
  darkerAccent: 2,
  lighterAccent: 3,
};

const darken = ([R, G, B], amount = 0.8) => {
  R *= amount;
  G *= amount;
  B *= amount;
  return [R, G, B].map((color) => Math.floor(color));
};

const lighten = ([R, G, B], amount = 1.1) => {
  R *= amount;
  G *= amount;
  B *= amount;
  return [R, G, B].map((color) => Math.min(Math.floor(color), 255));
};

const makeHex = ([R, G, B]) => {
  return "#" + R.toString(16) + G.toString(16) + B.toString(16);
};

const colorTransform = (color, target) => {
  // gets the colors into an array of format: [RRR, GGG, BBB]
  const colors = color
    .substring(1)
    .match(/.{2}/g)
    .map((strVal) => parseInt(strVal, 16));

  switch (target) {
    case targets.shadow:
      return makeHex(darken(colors), 0.8);
    case targets.highlight:
      return makeHex(lighten(colors), 1.1);
    case targets.darkerAccent:
      return makeHex(darken(colors), 0.95);
    case targets.lighterAccent:
      return makeHex(lighten(colors), 1.025);
    default:
      return color;
  }
};

export default colorTransform;
export { targets };
