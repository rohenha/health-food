/* ──────────────────────────────────────────────────────────
►►► Vite Plugins
────────────────────────────────────────────────────────── */
import brotli from 'rollup-plugin-brotli'
import { visualizer } from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react'

/* ─────────────────────────────────────────────────────── */
/* ─────────────────────────────────────────────────────── */

export default ({ isProd, isAnalyze }) => {
  const plugins = [react()]

  const pProd = [brotli()]

  const pAnalyze = [
    visualizer({
      gzipSize: true,
      brotliSize: true,
      open: false,
      template: 'treemap',
    }),
  ]

  if (isAnalyze) {
    return plugins.concat(pAnalyze).concat(pProd)
  }

  if (isProd) {
    return plugins.concat(pProd)
  }

  return plugins
}
