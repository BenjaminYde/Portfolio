// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/'
let basePath = ''

if (isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

    assetPrefix = `/${repo}/`
    basePath = `/${repo}`
}

/*
const withNextOptimizedImages = require('next-optimized-images');

module.exports = withNextOptimizedImages(
    {
        assetPrefix: assetPrefix,
        basePath: basePath,
        handleImages: ['jpeg', 'png', 'gif'],
    });
*/


const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    assetPrefix: assetPrefix,
    basePath: basePath,
    handleImages: ['jpeg', 'png', 'gif'],
    optimizeImagesInDev: true
});