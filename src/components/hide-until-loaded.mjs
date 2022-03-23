import { cr } from '/html-builder.mjs'

export class HideUntilLoaded extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(cr('slot'))
  }
}
