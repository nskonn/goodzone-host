import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpack from 'webpack';

// @ts-ignore
import { SHARED_MODULES } from './tools/consts.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type SharedConfig = {
    singleton: boolean;
};

type Shared = {
    [packageName: string]: SharedConfig;
};

const createSharedConfig = (modules: string[]) => {
    return modules.reduce<Shared>((shared, pkg) => {
        shared[pkg] = {
            singleton: true,
        };
        return shared;
    }, {});
};

export default (env: Record<string, string>) => {
    const isDev = !!env.development;

    return {
        entry: './src/app/index.tsx',
        mode: isDev ? 'development' : 'production',
        devServer: {
            port: 3000,
            historyApiFallback: true,
            static: path.join(__dirname, 'dist'),
            hot: true,
        },
        output: {
            filename: '[name].[contenthash].js',
            publicPath: 'auto',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                        },
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
            alias: {
                pages: path.resolve(__dirname, 'src/pages'),
                routing: path.resolve(__dirname, 'src/routing'),
                home: path.resolve(__dirname, 'src/home'),
                shared: path.resolve(__dirname, 'src/shared'),
            },
        },
        plugins: [
            new webpack.container.ModuleFederationPlugin({
                name: 'host',
                filename: 'remoteEntry.js',
                remotes: {
                    home: 'home@http://localhost:3001/remoteEntry.js',
                },
                shared: createSharedConfig(SHARED_MODULES),
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html',
            }),
        ],
    };
};
