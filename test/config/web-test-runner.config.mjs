import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';
import { litSsrPlugin } from '@lit-labs/testing/web-test-runner-ssr-plugin.js';

export default {
    files: ['src/**/*.ssr.spec.ts'],
    nodeResolve: true,
    preserveSymlinks: true,
    browsers: [playwrightLauncher({ product: 'chromium' })],
    testFramework: {
        // https://mochajs.org/api/mocha
        config: {
            ui: 'tdd',
            timeout: '60000',
        },
    },
    plugins: [litSsrPlugin(), esbuildPlugin({ ts: true })],
};
