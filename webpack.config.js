const path = require('path');

module.exports = {
    entry: './lib/lib.ts',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist/var'),
        filename: 'console.min.js',
        library: 'PlopixConsole',
        libraryTarget: 'var',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.ts', '.js']
    },
    optimization: {
        minimize: true
    }
};
