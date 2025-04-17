import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    { input: 'src/index.ts' },
    { input: 'src/cli.ts', name: 'cli' },
  ],
  clean: true,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      target: 'node16',
      minify: true,
    },
    output: {
      banner: '#!/usr/bin/env node',
    },
  },
})
