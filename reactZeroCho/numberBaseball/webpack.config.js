const path = require("path");
const webpack = require("webpack");

module.exports = {
    name: "NumberBaseball-setting",
    mode: "development",
    devtool: "eval",
    resolve: {
        extensions: [".js", ".jsx"],
    },

    entry: {
        app: ["./client"],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env',{
                    targets: {
                        browsers: ['> 5% in KR'],
                    }
                }],"@babel/preset-react"],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },


    plugins: [
        new webpack.LoaderOptionsPlugin({debug: true}),
    ],

    output:{
        path: path.join(__dirname, "dist"), 
        filename: "app.js",
    }
};