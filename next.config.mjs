/**
 * @type {import('next').NextConfig}
 */

const nextConfig   = {
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: '',
    assetPrefix: './',
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