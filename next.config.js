// set up dotenv
const { parsed: localEnv } = require('dotenv').config(); 
// bring in webpack
const webpack = require('webpack');

// get access to our current webpack config
module.exports = {
    webpack(config) {
        // push new plugin into existing plugins
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
        return config;
    }
};