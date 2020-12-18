const CracoLessPlugin = require('craco-less')
const path = require('path')

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@common': pathResolve('src/common'),
      '@components': pathResolve('src/components'),
      '@utils': pathResolve('src/utils'),
      // 此处是一个示例，实际可根据各自需求配置
    },
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', style: true }],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://42.192.23.19:8081',
        ws: false, // websocket
        changeOrigin: true, //是否跨域
        secure: false, // 如果是https接口，需要配置这个参数
      },
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
