import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';

const entry=fileURLToPath(new URL('./studio/index.tsx',import.meta.url));

export default defineConfig({
  define: {'process.env.NODE_ENV': JSON.stringify('production')},
  build: {
    outDir: 'static',
    emptyOutDir: false,
    sourcemap: true,
    target: ['chrome100', 'safari15'],
    lib: {entry,name:'ZyloraStudio',formats:['iife'],fileName:()=> 'studio.js'},
    rollupOptions: {output:{assetFileNames:'studio-[name][extname]'}},
  },
});
