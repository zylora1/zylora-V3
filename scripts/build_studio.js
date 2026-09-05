const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['studio/index.tsx'],
  bundle: true,
  outfile: 'static/studio.js',
  minify: false, // keep unminified for debugging
  sourcemap: true,
  target: ['chrome100', 'safari15'],
}).catch(() => process.exit(1));
