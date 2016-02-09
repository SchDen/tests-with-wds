var baseConfig = require('./webpack.config.js');
var hostname = 'localhost';
var port = 3050;

console.log(baseConfig);

var config = {
    entry: 'mocha!./tests/index.js',
    output: {
        filename: 'test.build.js',
        path: 'tests/',
        publicPath: 'http://' + hostname + ':' + port + '/tests'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
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
    devServer: {
        host: hostname,
        port: port
    }
};

// Use aliases from base config
if (baseConfig.resolve && baseConfig.resolve.alias) {
    if (config.resolve && config.resolve.alias) {
        Object.assign(config.resolve.alias, baseConfig.resolve.alias);
    } else {
        config.resolve = config.resolve || {};
        config.resolve.alias = baseConfig.resolve.alias;
    }
}

module.exports = config;
