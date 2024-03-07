import express from 'express';
import compression from 'compression';

const buildDir = new URL('../dist', import.meta.url).pathname;
const assetsDir = new URL('../dist/assets', import.meta.url).pathname;

const app = express();

app.use(compression());
app.disable('x-powered-by');

// Server static build
app.use(
  '/assets',
  express.static(assetsDir, { immutable: true, maxAge: '1y' }), // Vite build creates hashed filenames
);
app.use(express.static(buildDir, { maxAge: '1h' }));

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Express server listening at http://localhost:${port}`),
);
