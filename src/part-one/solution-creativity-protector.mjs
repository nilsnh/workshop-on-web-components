export class CreativityProtector extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    Array.from(this.children).forEach((child) => {
      this.shadowRoot.appendChild(child)
    })
  }
}
