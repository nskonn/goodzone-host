import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { container } from 'webpack';

const { ModuleFederationPlugin } = container;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        static: path.join(__dirname, 'public'),
        hot: true,
    },
    output: {
        publicPath: 'auto',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                remoteApp: 'remoteApp@http://localhost:3001/remoteEntry.js',
            },
            shared: {
                react: { singleton: true, requiredVersion: '^18.0.0' },
                'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],
};
