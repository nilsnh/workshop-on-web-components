import { cr } from '/html-builder.mjs'

export class Powerpointer3000 extends HTMLElement {
  constructor() {
    super()
    this.slideNum = 0
    this.attachShadow({ mode: 'open' })
    this.listener = this.listener.bind(this)
    this.render()
  }

  static get observedAttributes() {
    return ['slide-number']
  }

  get slideNum() {
    return Number.parseInt(this.getAttribute('slide-number'), 10)
  }

  set slideNum(number) {
    this.setAttribute('slide-number', number)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render()
  }

  render() {
    if (this.spanWithSlideNum) {
      this.spanWithSlideNum.innerHTML = this.slideNum
      return
    }
    this.spanWithSlideNum = cr('span', this.slideNum)
    this.shadowRoot.appendChild(
      cr(
        'div',
        cr('p', `PowerPointer3000 is at slide number: `, this.spanWithSlideNum)
      )
    )
  }

  listener(event) {
    console.log('advance-powerpoint was triggered', event)
    this.slideNum = this.slideNum + 1
    this.render()
  }

  connectedCallback() {
    this.addEventListener('advance-powerpoint', this.listener)
  }

  disconnectedCallback() {
    this.removeEventListener('advance-powerpoint', this.listener)
  }
}
