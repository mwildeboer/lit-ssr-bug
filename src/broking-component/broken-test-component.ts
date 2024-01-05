import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { ref, createRef } from "lit/directives/ref.js";

@customElement("broken-test-component")
export class BrokenTestComponent extends LitElement {
  private _testRef: Ref<HTMLDivElement> = createRef();

  private get _id() {
    return "some-id";
  }

  private get _title() {
    return "some-title";
  }

  render() {
    return html`<div
      ${ref(this._testRef)}
      class="some-div"
      id=${this._id}
      title=${this._title}
    >
      Hello World
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "broken-test-component": BrokenTestComponent;
  }
}
