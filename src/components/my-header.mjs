import { load } from '/dependencies.mjs'

const links = {
  'Part one': '/part-one',
  'Part two': '/part-two',
  'Part three': '/part-three',
}

export class MyHeader extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    load('hyperscript').then(({ default: h }) => {
      this.h = h
      this.shadowRoot.appendChild(
        h(
          'header',
          h('a', { href: '/' }, h('h1', 'Web Components Workshop')),
          h(
            'ul',
            Object.entries(links).map(([key, val]) =>
              h('li', h('a', { href: val }, key))
            )
          )
        )
      )
    })
  }
}
