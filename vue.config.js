const path = require('path');
// axios请求代理的包 返回的是promise对象 
// less less-loader 预处理器
// vue add style-resources-loader

module.exports = {
  // // 是否打包sourcemap
  // productionSourceMap: false,

  // // 设置输出目录
  // outputDir: './myDist',
  // // 配置路径。判断是否是生产环境。如果是开发环境就使用/
  // publicPath: process.env.NODE_ENV === 'production' ? 'http://www.duyiedu.com' : '/',
  // // 设置静态资源路径
  // assetsDir: 'assets',
  // // 设置别名
  // chainWebpack: config => {
  //   config.resolve.alias.set('_v', path.resolve(__dirname, 'src/views'))
  // },

  configureWebpack: {//webpage配置
    // plugin: [],
    // module: {}
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
  },

  // devServer: {// 设置代理，服务器代理处理跨域问题
  //   proxy: 'http://api.duyiedu.com'
  //   // proxy: {
  //   //   '/api/chat/sendMsg': {
  //   //     target: 'http://api.duyiedu.com'
  //   //   }
  //   // }
  // },

  // pluginOptions: {// vue提供的style-resources-loader插件的配置
  //   'style-resources-loader': {//可把选中文件注入到全局中
  //     preProcessor: 'less',
  //     patterns: [
  //       path.resolve(__dirname, 'src/assets/styles/variable.less')
  //     ]
  //   }
  // }
}
