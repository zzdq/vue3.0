import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import' // 插件引入

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ],
  publicDir: 'public', // 静态资源
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://web.deerttgx.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: ``//引用公共样式，使用vite搭建项目只安装sass即可，不需要安装node-sass,sass-loader
      }
    }
  }
})
