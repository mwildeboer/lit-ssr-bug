import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { ref, createRef, Ref } from "lit/directives/ref.js";

@customElement("working-test-component")
export class WorkingTestComponent extends LitElement {
  private _testRef: Ref<HTMLDivElement> = createRef();

  private get _id() {
    return "some-id";
  }

  private get _title() {
    return "some-title";
  }

  render() {
    return html`<div
      class="some-div"
      id=${this._id}
      title=${this._title}
      ${ref(this._testRef)}
    >
      Hello World
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "working-test-component": WorkingTestComponent;
  }
}
