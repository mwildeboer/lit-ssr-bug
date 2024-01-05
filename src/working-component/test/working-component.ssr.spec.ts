import { expect, html } from "@open-wc/testing";
import { ssrFixture as litSsrFixture } from "@lit-labs/testing/fixtures.js";
import { TemplateResult } from "lit";

export function ssrFixture(template: TemplateResult) {
  return litSsrFixture(template, {
    modules: ["../../../dist/working-test-component.mjs"],
    hydrate: false,
  });
}

test("component has working attributes", async () => {
  const el = await ssrFixture(
    html`<working-test-component></working-test-component>`
  );

  const div = el.shadowRoot?.querySelector("div");
  expect(div).not.to.have.attribute("undefined");
  expect(div).to.have.attribute("id");
});
