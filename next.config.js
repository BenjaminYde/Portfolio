const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    assetPrefix: !debug ? process.env.GITHUB_REPOSITORY : '',
    images: {
        unoptimized: true,
    },
};