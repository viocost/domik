const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');


module.exports = {
    entry: "./src/domik.js",
    output: {
        path: path.resolve(__dirname),
        filename: "index.js"
    },


    optimization: {
        minimize: true,
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
