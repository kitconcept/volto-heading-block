import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// The add-on does not depend on Volto. Its imports of @plone/volto are
// resolved to the Volto checkout that `make install` fetches into `core`.
const here = path.dirname(fileURLToPath(import.meta.url));
const voltoSrc = path.resolve(here, '../../core/packages/volto/src');

export default defineConfig({
  resolve: {
    alias: [
      { find: /^@plone\/volto\/(.*)$/, replacement: `${voltoSrc}/$1` },
    ],
  },
});
