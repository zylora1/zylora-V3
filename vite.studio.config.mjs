import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';

const entry=fileURLToPath(new URL('./studio/index.tsx',import.meta.url));

export default defineConfig({
  define: {'process.env.NODE_ENV': JSON.stringify('production')},
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
