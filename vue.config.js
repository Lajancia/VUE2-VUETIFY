module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => { config.plugin('html').tap(args => { args[0].title = 'Lajancia Portfolio'; return args; }); },
  configureWebpack: config => {
    
    if (process.env.NODE_ENV === 'production') {
        config.mode = 'production';
                     // Package file size configuration
        config.performance = {
          maxEntrypointSize: 10000000,
          maxAssetSize: 30000000
        }
    }
},
}
