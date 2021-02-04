import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
// https://github.com/jpkleemans/vite-svg-loader
import svgLoader from 'vite-svg-loader'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  alias: {
    '@': resolve('src'),
    '@svgs': resolve('src/assets/svgs')
  },
  // https://vitejs.dev/config/#server-options
  server: {
    host: 'localhost',
    port: 8800,
    strictPort: true,
    https: false,
    open: '/',
    // https://vitejs.dev/config/#server-proxy
    proxy: {}
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `$injectedColor: orange;`
        additionalData: '@import "@/assets/stylesheets/globalInjectedData.scss";'
      }
    }
  },
  plugins: [vue(), svgLoader()],
}
