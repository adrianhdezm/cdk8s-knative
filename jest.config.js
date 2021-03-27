const path = require('path');
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: path.resolve(__dirname, 'tests'),
  collectCoverage: false,
  testRegex: '.spec.ts$',
  // A map from regular expressions to paths to transformers
  transform: {
    ...tsjPreset.transform
  }
};
