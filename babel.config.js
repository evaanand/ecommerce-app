module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    'module:react-native-dotenv',
    'react-native-reanimated/plugin', // Must be the last plugin
  ],
};
