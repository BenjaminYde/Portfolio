/**
 * @type {import('next').NextConfig}
 */

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : './';

const nextConfig   = {
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath,
    assetPrefix: `${basePath}/`
};

export default   nextConfig;