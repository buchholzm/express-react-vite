import express from 'express';
import compression from 'compression';
import apiRouter from './api/index.js';

const app = express();

app.use(compression());
app.disable('x-powered-by');

app.use('/api', apiRouter);

const viteDevServer =
  process.env.NODE_ENV === 'production'
    ? undefined
    : await import('vite').then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        }),
      );

if (viteDevServer) {
  app.use(viteDevServer.middlewares);
} else {
  const buildDir = new URL('../dist', import.meta.url).pathname;
  const assetsDir = new URL('../dist/assets', import.meta.url).pathname;
  app.use(
    '/assets',
    express.static(assetsDir, { immutable: true, maxAge: '1y' }),
  );
  app.use(express.static(buildDir, { maxAge: '1h' }));
}

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Express server listening at http://localhost:${port}`),
);
