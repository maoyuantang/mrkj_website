/*
 * @Author: tmy
 * @Date: 2019-12-26 13:33:26
 * @LastEditors  : tmy
 * @LastEditTime : 2019-12-30 14:25:11
 * @Description: Do not edit
 */

 
// const outputPath = path.resolve(__dirname, '../public/web');
// console.log(outputPath);
let outputName = 'dist';
switch (process.env.VUE_TANGMODE) {
    case 'test':
        outputName = 'test';
        break;
    case 'product':
        outputName = 'product';
    default:
        break;
}
module.exports = {
    // outputDir: outputPath,
    publicPath: './',
    outputDir: outputName,
    configureWebpack: config => {

        if (process.env.NODE_ENV !== 'development') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
            config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
            return {
                output: {
                    libraryExport: 'default'
                },
                devtool: false
            };
        }

    },

    devServer: {
        host: '0.0.0.0',
        port: '80',
        proxy: {
            '/api': {
                target: 'http://p.mrrjvip.cn/',
                ws: true,
                changeOrigin: true
            },
            // '/api/wxchat/jssdk/config/get': {
            //     target: 'http://member.mrrjvip.cn:33333',
            //     ws: true,
            //     changeOrigin: true
            // }
        }
    }

};
