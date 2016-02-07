var path = require('path');
var hostname = 'localhost';
var port = 3050;

var SRC_PATH = path.join(__dirname, 'src');

module.exports = {
    // ...

    resolve: {
        // Path aliases
        alias: {
            js: path.join(SRC_PATH, 'js')
        }
    },

    // ...
};

