// webpack.config.js

const path = require('path');

module.exports = {
    mode: 'production', // O 'production' si estás en producción
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

