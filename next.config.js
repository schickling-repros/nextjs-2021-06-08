module.exports = {
  webpack(config, options) {
    config.watchOptions = {
      ignored: /node_modules([\\]+|\/)+(?!\.genpkg)/,
    }

    return config
  },
  webpack5: true,
}