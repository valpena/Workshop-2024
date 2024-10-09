// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/', // chemin public pour le serveur de développement
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'public'), // mise à jour de contentBase à static
        compress: true,
        port: 3000, // port à utiliser
        hot: true, // active le rechargement à chaud
        historyApiFallback: true, // permet le rafraîchissement de l'historique de l'API
    },
};
