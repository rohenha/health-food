/* ──────────────────────────────────────────────────────────
►►► Vite Plugins
────────────────────────────────────────────────────────── */
import brotli from 'rollup-plugin-brotli'
import { visualizer } from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'

/* ─────────────────────────────────────────────────────── */
/* ─────────────────────────────────────────────────────── */

export default ({ isProd, isAnalyze }) => {
  const plugins = [react(), generouted()]

  if (isAnalyze) {
    return plugins.concat([
      visualizer({
        gzipSize: true,
        brotliSize: true,
        open: false,
        template: 'treemap',
      }),
      brotli(),
    ])
  }

  if (isProd) {
    return plugins.concat([brotli()])
  }

  return plugins
}
