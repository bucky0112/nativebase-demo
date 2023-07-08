module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@Components': './src/components',
            '@Screens': './src/screens',
            '@Stores': './src/stores',
            '@Assets': './assets',
            "@Api": "./src/api",
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      ],
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env'
        }
      ]
    ]
  }
}
