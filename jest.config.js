const configs = require('@bluebase/code-standards/jest.config');

const modules = [
  'victory-native',
  'react-native',
  'victory-core',
  'victory-shared-events'
].join('|');

module.exports = Object.assign(configs, {
  transformIgnorePatterns: [`/node_modules/(?!${modules})`],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"]
});