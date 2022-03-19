import { createApp } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js'
import { html } from '/html-builder.mjs'

function Counter(props) {
  return {
    count: props.initialCount,
    inc() {
      this.count++
    },
  }
}

const template = document.createElement('template')
template.innerHTML = html`
  <p v-scope="Counter({ initialCount: 0 })">
    Petite Vue counter:
    <button @click="inc">Clicked '{{ count }}' times</button>
  </p>
`

let shadowRoot

export class ExampleCounterVue extends HTMLElement {
  constructor() {
    super()
    shadowRoot = this.attachShadow({ mode: 'closed' })
    shadowRoot.appendChild(template.content.cloneNode(true))
    const pTag = shadowRoot.querySelector('p')
    this.app = createApp({ Counter }).mount(pTag)
  }
  disconnectedCallback() {
    this.app.unmount()
  }
}
