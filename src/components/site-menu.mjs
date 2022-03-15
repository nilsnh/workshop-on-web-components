import { load } from '/dependencies.mjs'

const css = `
.link-list {
  padding: 4rem 1.6rem 1.6rem 0;
  margin: 0;
}
.link-list li {
  display: inline-block;
  margin-right: 1.6rem;
}
`

export class SiteMenu extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    load('hyperscript').then(({ default: h }) => {
      this.h = h
      this.shadowRoot.appendChild(
        h(
          'header',
          h('style', css),
          h(
            'nav',
            h(
              'ul.link-list',
              h('li', h('a', { href: '/' }, 'Home')),
              h('li', h('a', { href: '/part-1.html' }, 'Part one')),
              h('li', h('a', { href: '/part-2.html' }, 'Part two')),
              h('li', h('a', { href: '/part-3.html' }, 'Part three'))
            )
          )
        )
      )
    })
  }
}
