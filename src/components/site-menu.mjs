import { cr } from '/html-builder.mjs'

const css = `
.link-list {
  padding: 4rem 1.6rem 1.6rem 0;
  margin: 0;
}
.link-list li {
  display: inline-block;
  margin-right: 1.6rem;
}

*:visited {
  color: blue;
}
`

export class SiteMenu extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(
      cr(
        'header',
        cr('style', css),
        cr(
          'nav',
          cr(
            'ul',
            { class: 'link-list' },
            cr('li', cr('a', { href: '/' }, 'Home')),
            cr('li', cr('a', { href: '/part-1.html' }, 'Part one')),
            cr('li', cr('a', { href: '/part-2.html' }, 'Part two')),
            cr('li', cr('a', { href: '/part-3.html' }, 'Part three')),
            cr('li', cr('a', { href: '/tests.html' }, 'Tests')),
            cr('li', cr('a', { href: '/references.html' }, 'References'))
          )
        )
      )
    )
  }
}
