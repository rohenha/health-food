import { defineConfig } from 'vite'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import getPlugins from './plugins'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folder = path.resolve(__dirname, 'src')

const env = process.env.NODE_ENV

const config = {
  env: {
    isDev : env === 'dev',
    isProd : env === 'prod' || env === 'analyze',
    isAnalyze : env === 'analyze',
  }
}

export default defineConfig({
  resolve: {
    alias: {
      '@styles/': `${folder}/styles/`,
      '@scripts/': `${folder}/scripts/`,
      '@components/': `${folder}/components/`,
      '@routes/': `${folder}/routes/`,
      '@libs/': `${folder}/libs/`,
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // path to your scss variables
        additionalData: `@import "@styles/config.scss";`
      }
    }
  },
  build: {
    sourcemap: config.env.isProd ? false : 'inline',
    minify: config.env.isProd ? 'esbuild' : false,
  },
  plugins: getPlugins(config.env),
  test: {
    include: ['sources/tests/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
