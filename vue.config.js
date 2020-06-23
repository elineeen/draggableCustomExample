module.exports = {
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    outputDir: 'dist', publicPath: process.env.NODE_ENV === 'production' ? '/draggableCustomExample/' : '/',
    productionSourceMap:false
}