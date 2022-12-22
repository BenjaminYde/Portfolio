/**
 * @type {import('next').NextConfig}
 */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig   = {
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: isProduction ? '/benjaminyde.github.io' : '',
    assetPrefix: isProduction ? '/benjaminyde.github.io/' : './',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    }
};

export default   nextConfig;