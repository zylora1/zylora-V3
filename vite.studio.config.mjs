import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';

const entry=fileURLToPath(new URL('./studio/index.tsx',import.meta.url));

export default defineConfig({
  define: {'process.env.NODE_ENV': JSON.stringify('production')},
  resolve: {
    alias: {
      '@onlook/models': fileURLToPath(new URL('./studio/onlook/models', import.meta.url)),
      '@onlook/constants': fileURLToPath(new URL('./studio/onlook/constants', import.meta.url)),
      '@onlook/penpal': fileURLToPath(new URL('./studio/onlook/penpal', import.meta.url)),
      '@onlook/utility': fileURLToPath(new URL('./studio/onlook/utility', import.meta.url)),
      '@onlook/parser': fileURLToPath(new URL('./studio/onlook/parser', import.meta.url)),
      '@onlook/ui': fileURLToPath(new URL('./studio/onlook/ui', import.meta.url)),
      '@onlook/fonts': fileURLToPath(new URL('./studio/onlook/fonts', import.meta.url)),
      '@onlook/file-system': fileURLToPath(new URL('./studio/onlook/file-system', import.meta.url)),
      '@onlook/code-provider': fileURLToPath(new URL('./studio/onlook/code-provider', import.meta.url)),
      'strip-ansi': fileURLToPath(new URL('./studio/onlook/utility/strip-ansi.ts', import.meta.url)),
      'posthog-js/react': fileURLToPath(new URL('./studio/onlook/telemetry/posthog-stub.ts', import.meta.url)),
      'posthog-js': fileURLToPath(new URL('./studio/onlook/telemetry/posthog-stub.ts', import.meta.url)),
      'path': fileURLToPath(new URL('./studio/onlook/utility/path-browser.ts', import.meta.url)),
      '@/components/store/editor': fileURLToPath(new URL('./studio/onlook/core', import.meta.url)),
      '@/trpc/client': fileURLToPath(new URL('./studio/onlook/trpc-stub.ts', import.meta.url)),
      '@/trpc/react': fileURLToPath(new URL('./studio/onlook/trpc-stub.ts', import.meta.url)),
      '@/utils/git': fileURLToPath(new URL('./studio/onlook/utils/git.ts', import.meta.url)),
      '@': fileURLToPath(new URL('./studio/onlook', import.meta.url)),
      '@/': fileURLToPath(new URL('./studio/onlook/', import.meta.url)),
    },
  },
  build: {
    outDir: 'static',
    emptyOutDir: false,
    // The backend serves the browser bundle directly; source maps are not
    // needed at runtime and add avoidable release payload/404 noise.
    sourcemap: false,
    target: ['chrome100', 'safari15'],
    lib: {entry,name:'ZyloraStudio',formats:['iife'],fileName:()=> 'studio.js'},
    rollupOptions: {output:{assetFileNames:'studio-[name][extname]'}},
  },
});
