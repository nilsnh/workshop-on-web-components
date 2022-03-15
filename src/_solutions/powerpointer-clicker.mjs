import { cr } from '/html-builder.mjs'

export class PowerpointerClicker extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.button = cr('button', cr('slot'))
    this.shadowRoot.appendChild(this.button)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    const powerpointers = document.querySelectorAll('powerpointer-3000')
    Array.from(powerpointers).forEach((elem) => {
      elem.dispatchEvent(new Event('advance-powerpoint'))
    })
  }

  connectedCallback() {
    this.button.addEventListener('click', this.clickHandler)
  }

  disconnectedCallback() {
    this.button.removeEventListener('click', this.clickHandler)
  }
}
