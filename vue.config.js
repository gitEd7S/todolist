module.exports = {
    chainWebpack: config => {
        config.module.rule('svg-sprite').use('svgo-loader').loader('svgo-loader');
    },
    pluginOptions: {
        svgSprite: {
            dir: 'src/assets/icons',
            test: /\.(svg)(\?.*)?$/,
            loaderOptions: {
                extract: true,
                spriteFilename: 'img/sprite.[hash:8].svg'
            },
            pluginOptions: {
                plainSprite: true
            }
        }
    }
}
