module.exports = {
  modulePaths:[
    '../'
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFiles: [
    '<rootDir>/testconfig/setup.js',
  ],
  testMatch: [
    "<rootDir>/**/?(*.)+(spec|test).[jt]s?(x)"
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/testconfig/'
  ],
  transform: {
    '\\.js$': ['babel-jest', { configFile: './testconfig/.babelrc.json' }]
  },
  roots: ['../']
};
