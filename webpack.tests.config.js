var path = require('path');

// Include base config
var baseConfig = require('./webpack.config.js');

// Hostname for webpack-dev-server
var hostname = 'localhost';
// Port for webpack-dev-server
var port = 3050;

// Browser tests for develop mode
var DEV_MODE = process.env.NODE_ENV === 'develop';

// Path to tests dir
var TESTS_DIR = path.join(__dirname, 'tests');

var config = {
    entry: './tests/index.js',
    output: {
        filename: 'test.build.js',
        path: TESTS_DIR,
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            tests: TESTS_DIR,
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                }
            }
        ]
    },
};

// Use webpack-dev-server and mocha-loader
if (DEV_MODE) {
    config.entry = 'mocha!./tests/index.js';
    config.output.publicPath = 'http://' + hostname + ':' + port + '/tests';

    config.devServer = {
        host: hostname,
        port: port
    };
}

// Merge aliases from base config
if (baseConfig.resolve && baseConfig.resolve.alias) {
    if (config.resolve && config.resolve.alias) {
        Object.assign(config.resolve.alias, baseConfig.resolve.alias);
    } else {
        config.resolve = config.resolve || {};
        config.resolve.alias = baseConfig.resolve.alias;
    }
}

module.exports = config;
