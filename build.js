require('esbuild').build({
  entryPoints: ['src/app.jsx'],
  bundle: true,
  outfile: 'public/app.js',
}).catch(() => process.exit(1));
