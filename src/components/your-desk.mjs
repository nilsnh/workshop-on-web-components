import { cr } from '/html-builder.mjs'

const css = `
  .outer {
    margin: 5rem 0;
    border: 1rem solid #65282b ;
    padding: 2rem;
    background-color: #e4d4cc;
    width: 50rem;
    height: 30rem;
  }
  .outer > * {
    margin: 0;
  }
`

export class YourDesk extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(
      cr(
        'div',
        { class: 'outer' },
        cr('style', css),
        cr('h3', '(Your desk)'),
        cr('div', { class: 'inner' }, cr('slot'))
      )
    )
  }
}
