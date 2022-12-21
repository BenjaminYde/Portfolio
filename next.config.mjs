/**
 * @type {import('next').NextConfig}
 */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig   = {
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: isProduction ? '/portfolio' : '',
    assetPrefix: isProduction ? '/portfolio/' : './',
};

export default   nextConfig;