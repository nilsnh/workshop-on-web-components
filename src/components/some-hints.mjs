import { cr } from '/html-builder.mjs'

const css = `
  div {
    margin: 5rem 0;
    padding: 2rem;
    background-color: #ffff8e;
    max-width: 300px;
  }
`

export class SomeHints extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(
      cr('div', cr('h2', 'Some hints'), cr('style', css), cr('slot'))
    )
  }
}
