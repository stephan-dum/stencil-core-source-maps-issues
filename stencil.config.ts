import type { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'xyz',
    srcDir: 'src',
    sourceMap: true,
    outputTargets: [
        {
            type: 'dist',
        },
    ],
};
