const path = require('path');

module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    ['@babel/preset-react', { runtime: 'automatic' }], // Include this line if you're using React
    '@babel/preset-typescript' // Include this line if you're using TypeScript
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '#root': __dirname,
          '#src': __dirname + '/src'
        }
      }
    ]
  ]
};
