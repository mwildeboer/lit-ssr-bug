import { expect, html } from "@open-wc/testing";
import { ssrFixture as litSsrFixture } from "@lit-labs/testing/fixtures.js";
import { TemplateResult } from "lit";

export function ssrFixture(template: TemplateResult) {
  return litSsrFixture(template, {
    modules: ["../../../dist/broken-test-component.mjs"],
    hydrate: false,
  });
}

test("component has broken attributes", async () => {
  const el = await ssrFixture(
    html`<broken-test-component></broken-test-component>`
  );

  const div = el.shadowRoot?.querySelector("div");
  expect(div).to.have.attribute("undefined");
  expect(div).not.to.have.attribute("id");
});
