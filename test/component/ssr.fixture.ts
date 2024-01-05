import { ssrFixture as litSsrFixture } from '@lit-labs/testing/fixtures.js';
import { TemplateResult } from 'lit';

export function ssrFixture(template: TemplateResult) {
    return litSsrFixture(template, {
        modules: ['../../../dist/kpn-components.mjs'],
        hydrate: false
    });
}
