const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      'ts-wrapped-genius-sdk': path.resolve(
        __dirname,
        '../TSWrappedGeniusSDK/dist',
      ),
    },
  },
  watchFolders: [
    path.resolve(__dirname, '../TSWrappedGeniusSDK'), // Watch for changes in the SDK directory
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
