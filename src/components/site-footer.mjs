/**
 * This tagged template literal does nothing.
 * But Prettier sees it and will auto-format it's
 * content.
 *
 * See also:
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals}
 */
const html = (str) => {
  return str.join('')
}

const template = document.createElement('template')

template.innerHTML = html`
  <footer>
    <p>
      Except where otherwise noted, this workshop material is copyright
      <a href="https://nilsnh.no/">Nils Norman Haukås</a> 2022, and licensed
      under a
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"
        >Creative Commons Attribution-ShareAlike 4.0 International License</a
      >.
    </p>
    <p>
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"
        ><img
          alt="Creative Commons License"
          style="border-width:0"
          src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
      /></a>
    </p>
  </footer>
`

export class SiteFooter extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}
