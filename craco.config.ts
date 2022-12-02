import path from 'path';
import { CracoConfig } from '@craco/types';

const config: CracoConfig = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '~': path.resolve(__dirname, './'),
        },
    },
};

module.exports = config;
