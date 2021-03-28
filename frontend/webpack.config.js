const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // the output bundle won't be optimized for production but suitable for development
    mode: 'development',
    // the app entry point is /src/index.js
    entry: ['babel-polyfill', path.resolve(__dirname, 'src/index.jsx')],
    output: {
        // the output of the webpack build will be in /dist directory
        path: path.resolve(__dirname, '../backend/frontend/static/frontend/public/'),
        // 127.0.0.1/static/frontend/public/ where files are served from
        publicPath: "public/",
        // the filename of the JS bundle will be bundle.js
        filename: 'bundle.js'
    },
    module: {
            // configuration regarding modules
            rules: [
                {
                    // for any file with a suffix of js or jsx
                    test: /\.(js|jsx)?$/,
                    // ignore transpiling JavaScript from node_modules as it should be that state
                    exclude: /node_modules/,
                    // use the babel-loader for transpiling JavaScript to a suitable format
                    loader: 'babel-loader',
                    options: {
                        // attach the presets to the loader (most projects use .babelrc file instead)
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};