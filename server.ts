import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import ReactDOMServer from 'react-dom/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const vitePluginTransform = await vite.transformIndexHtml(url, '');

      const { store } = await vite.ssrLoadModule('./src/redux/store.ts');
      const { rickandmortyApi } = await vite.ssrLoadModule('./src/services/rickandmortyApi.ts');

      if (url === '/') {
        store.dispatch(rickandmortyApi.endpoints['searchByName'].initiate('', { force: true }));
        await Promise.all(store.dispatch(rickandmortyApi.util.getRunningQueriesThunk()));
      }

      const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
      const preloadedStateScript = `<script>
          window.__PRELOADED_STATE__ = ${preloadedState};
        </script>`;

      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');

      let didError = false;

      const stream = await render(url, {
        bootstrapModules: ['/src/entry-client.tsx'],
        onShellReady() {
          res.statusCode = didError ? 500 : 200;
          res.setHeader('Content-type', 'text/html');
          stream.pipe(res);
          res.write(vitePluginTransform);
          res.write(preloadedStateScript);
        },
        onError(x) {
          didError = true;
          console.error(x);
        },
      });
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.listen(5173, () => console.log('http://localhost:5173'));
}

createServer();
