const path = require("path");

module.exports = {
    entry: "./src/app.js",
    mode: "development",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/,
            // use: {
            //     loader: "babel-loader'",
            //     options: {
            //         presets: ['@babel/preset-env', '@babel/preset-react'],
            //         plugins: ['@babel/plugin-proposal-class-properties']
            //     }
            // }
        }, {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        static: path.join(__dirname, "public")
    }
};

