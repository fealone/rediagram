import { RediagramGlobalConfig } from './types';

export function createDefaultConfig(): RediagramGlobalConfig {
  return {
    filepath: null,
    scope: {
      includes: ['**/*.rediagram.{jsx,tsx}'],
      excludes: ['**/node_modules/**/*'],
    },
    output: {
      dir: process.cwd(),
      format: 'png',
    },
    dot: {
      timeout: 10_000,
    },
  };
}