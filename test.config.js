const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');


module.exports = {
    entry: "./test/test.js",
    output: {
        path: path.resolve(__dirname, "test"),
        filename: "bundle.js"
    },


    optimization: {
        minimize: false,
    },

    plugins: [

        // ---------------------------------------------------------------------------------------------------------------------------
        // uncomment to generate module stats
        //new Visualizer({
          //filename: './stat.html'
        //})
    ],

    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    "@babel/env",
                                ],
                            ]
                        }
                    }
                ]
            },
        ]
    },
};
