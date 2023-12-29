import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import getPlugins from './vite.plugins'
import { dependencies } from './package.json'

function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const folder = path.resolve(__dirname, 'src')

const env = process.env.NODE_ENV

const config = {
  env: {
    isDev: env === 'dev',
    isProd: env === 'prod' || env === 'analyze',
    isAnalyze: env === 'analyze',
  },
}

export default defineConfig({
  resolve: {
    alias: {
      '@styles/': `${folder}/styles/`,
      '@components/': `${folder}/components/`,
      '@store/': `${folder}/store/`,
      '@pages/': `${folder}/pages/`,
      '@libs/': `${folder}/libs/`,
      '@hooks/': `${folder}/hooks/`,
      '@contexts/': `${folder}/contexts/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // path to your scss variables
        additionalData: `@import "@styles/config.scss";`,
      },
    },
  },
  json: {
    stringify: true,
  },
  build: {
    sourcemap: config.env.isProd ? false : 'inline',
    minify: config.env.isProd ? 'esbuild' : false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          // ...renderChunks(dependencies),
        },
      },
    },
  },
  plugins: getPlugins(config.env),
  test: {
    include: ['sources/tests/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
