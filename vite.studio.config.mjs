import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';

const entry=fileURLToPath(new URL('./studio/index.tsx',import.meta.url));

export default defineConfig({
  define: {'process.env.NODE_ENV': JSON.stringify('production')},
  resolve: {
    alias: [
      { find: /^@onlook\/ui\/(icons|color-picker|ai-elements)$/, replacement: fileURLToPath(new URL('./studio/onlook/ui/components/$1/index.tsx', import.meta.url)) },
      { find: /^@onlook\/ui\/(utils|hooks)$/, replacement: fileURLToPath(new URL('./studio/onlook/ui/$1/index.ts', import.meta.url)) },
      { find: /^@onlook\/ui\/globals\.css$/, replacement: fileURLToPath(new URL('./studio/onlook/ui/globals.css', import.meta.url)) },
      { find: /^@onlook\/ui\/tokens$/, replacement: fileURLToPath(new URL('./studio/onlook/ui/tokens.ts', import.meta.url)) },
      { find: /^@onlook\/ui\/(.+)$/, replacement: fileURLToPath(new URL('./studio/onlook/ui/components/$1.tsx', import.meta.url)) },
      { find: '@onlook/ui', replacement: fileURLToPath(new URL('./studio/onlook/ui', import.meta.url)) },
      { find: '@onlook/ai', replacement: fileURLToPath(new URL('./studio/onlook/ai', import.meta.url)) },
      { find: '@onlook/models', replacement: fileURLToPath(new URL('./studio/onlook/models', import.meta.url)) },
      { find: '@onlook/constants', replacement: fileURLToPath(new URL('./studio/onlook/constants', import.meta.url)) },
      { find: '@onlook/penpal', replacement: fileURLToPath(new URL('./studio/onlook/penpal', import.meta.url)) },
      { find: '@onlook/utility', replacement: fileURLToPath(new URL('./studio/onlook/utility', import.meta.url)) },
      { find: '@onlook/parser', replacement: fileURLToPath(new URL('./studio/onlook/parser', import.meta.url)) },
      { find: '@onlook/fonts', replacement: fileURLToPath(new URL('./studio/onlook/fonts', import.meta.url)) },
      { find: '@onlook/file-system/hooks', replacement: fileURLToPath(new URL('./studio/onlook/file-system/hooks', import.meta.url)) },
      { find: '@onlook/file-system', replacement: fileURLToPath(new URL('./studio/onlook/file-system', import.meta.url)) },
      { find: '@onlook/code-provider', replacement: fileURLToPath(new URL('./studio/onlook/code-provider', import.meta.url)) },
      { find: 'strip-ansi', replacement: fileURLToPath(new URL('./studio/onlook/utility/strip-ansi.ts', import.meta.url)) },
      { find: 'posthog-js/react', replacement: fileURLToPath(new URL('./studio/onlook/telemetry/posthog-stub.ts', import.meta.url)) },
      { find: 'posthog-js', replacement: fileURLToPath(new URL('./studio/onlook/telemetry/posthog-stub.ts', import.meta.url)) },
      { find: 'path', replacement: fileURLToPath(new URL('./studio/onlook/utility/path-browser.ts', import.meta.url)) },
      { find: 'motion/react', replacement: fileURLToPath(new URL('./studio/onlook/utility/motion-shim.ts', import.meta.url)) },
      { find: 'framer-motion', replacement: fileURLToPath(new URL('./studio/onlook/utility/motion-shim.ts', import.meta.url)) },
      { find: 'next/navigation', replacement: fileURLToPath(new URL('./studio/onlook/utility/next-compat.ts', import.meta.url)) },
      { find: 'next/link', replacement: fileURLToPath(new URL('./studio/onlook/utility/next-compat.ts', import.meta.url)) },
      { find: 'next/image', replacement: fileURLToPath(new URL('./studio/onlook/utility/next-compat.ts', import.meta.url)) },
      { find: 'next-themes', replacement: fileURLToPath(new URL('./studio/onlook/utility/next-themes-shim.ts', import.meta.url)) },
      { find: 'next-intl', replacement: fileURLToPath(new URL('./studio/onlook/utility/next-intl-shim.ts', import.meta.url)) },
      { find: 'use-resize-observer', replacement: fileURLToPath(new URL('./studio/onlook/utility/use-resize-observer-shim.ts', import.meta.url)) },
      { find: 'is-subdir', replacement: fileURLToPath(new URL('./studio/onlook/utility/is-subdir-shim.ts', import.meta.url)) },
      { find: '@onlook/email', replacement: fileURLToPath(new URL('./studio/onlook/utility/email-shim.ts', import.meta.url)) },
      { find: '@onlook/stripe', replacement: fileURLToPath(new URL('./studio/onlook/utility/stripe-shim.ts', import.meta.url)) },
      { find: '@/components/store/editor', replacement: fileURLToPath(new URL('./studio/onlook/core', import.meta.url)) },
      { find: '@/trpc/client', replacement: fileURLToPath(new URL('./studio/onlook/trpc-stub.ts', import.meta.url)) },
      { find: '@/trpc/react', replacement: fileURLToPath(new URL('./studio/onlook/trpc-stub.ts', import.meta.url)) },
      { find: '@/utils/git', replacement: fileURLToPath(new URL('./studio/onlook/utils/git.ts', import.meta.url)) },
      { find: /^@\/(.*)$/, replacement: fileURLToPath(new URL('./studio/onlook/$1', import.meta.url)) },
      { find: '@', replacement: fileURLToPath(new URL('./studio/onlook', import.meta.url)) },
    ],
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
