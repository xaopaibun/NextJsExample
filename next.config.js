module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      loader: 'file-loader',
    })

    return config
  },
}