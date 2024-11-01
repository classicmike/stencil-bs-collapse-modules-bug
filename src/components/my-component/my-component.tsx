import {
  Component,
  h,
  Host,
  Element,
} from '@stencil/core';
import { Collapse } from 'bootstrap/dist/js/bootstrap.esm.js';

@Component({
  tag: 'my-component',
  scoped: true,
})
export class MyComponent {

  @Element() hostElement: HTMLElement;

  collapse: Collapse;

  render() {
    return (
      <Host>
        <p class="d-inline-flex gap-1">
          <button class="btn btn-primary" type="button" aria-expanded="false" aria-controls="collapseExample">
            Button with data-bs-target
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </Host>
    );
  }

  componentDidRender() {
    const collapseBtn = this.hostElement.querySelector('button');
    collapseBtn.setAttribute('data-bs-toggle', 'collapse');
    collapseBtn.setAttribute('data-bs-target', '#collapseExample');

    const collapseElement = this.hostElement.querySelector('#collapseExample');
    this.collapse = Collapse.getOrCreateInstance(collapseElement, { toggle: false });
  }
}
