//jest.config.js
module.exports = {
  //  testEnvironment: 'jsdom',
  roots: ['<rootDir>/tests'],
  testRegex: '.*spec.*',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
