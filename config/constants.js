import {resolve} from 'path';
// respond to npm_lifecycle_event (e.g. "npm run build")
export const BUILD_CONFIG = 'build';
export const CONFIG_EVENTS = new Set([BUILD_CONFIG]);

export const ROOT_PATH = resolve('./');
export const SRC_DIR = resolve(ROOT_PATH, 'src');
export const APP_PATH = resolve(SRC_DIR, 'client/index');

export const PATHS = {
    app: resolve(SRC_DIR, 'client/index'),
    dist: resolve(ROOT_PATH, 'dist'),
};

export const BABEL_QUERY = {
    presets: [
        'react', 'es2015',
    ],
    plugins: [
        ['transform-object-rest-spread'],
        ['transform-class-properties'],
        ['transform-decorators-legacy'],
        [
            'react-transform', {
                transforms: [
                    {
                        transform: 'react-transform-hmr',
                        imports: ['react'],
                        locals: ['module'],
                    },
                ]
            },
        ],
    ],
};
