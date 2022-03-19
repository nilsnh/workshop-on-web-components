import m from 'https://cdn.skypack.dev/mithril'

let count = 0

const counter = {
  view() {
    return m('p', [
      'Mithril counter: ',
      m(
        'button',
        { type: 'button', onclick: () => count++ },
        `Clicked '${count}' times`
      ),
    ])
  },
}

export class ExampleCounterMithril extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    m.mount(this.shadowRoot, counter)
  }

  disconnectedCallback() {
    m.mount(this.shadowRoot, null)
  }
}
