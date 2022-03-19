import { cr } from '/html-builder.mjs'

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
  <style>
    .container {
      padding: 1.4rem;
      border: 30px solid white;
      border-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌴</text></svg>')
        100% repeat;
      border-image-repeat: repeat;
    }
    ::slotted(*):before,
    ::slotted(*):after {
      content: '🌴';
    }
  </style>
  <div class="container">
    <slot></slot>
  </div>
`

const animals = ['🦍', '🐯', '🦄']

export class TheJungle extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.jungleTicker = this.jungleTicker.bind(this)
    this.animalEatsNode = this.animalEatsNode.bind(this)
    this.animalIndex = -1
  }

  animalEatsNode(node) {
    this.animalIndex = this.animalIndex + 1
    if (this.animalIndex > animals.length - 1) {
      // Loop around
      this.animalIndex = 0
    }
    node.replaceWith(
      cr(
        'p',
        `Wops! ${node.tagName} was eaten by a ${animals[this.animalIndex]}`
      )
    )
  }

  jungleTicker() {
    const lookForEdibles = (nodes = []) => {
      Array.from(nodes).forEach((node) => {
        if (['BUTTON', 'INPUT'].includes(node.tagName)) {
          this.animalEatsNode(node)
        } else if (node.shadowRoot) {
          lookForEdibles(node.shadowRoot.children)
        } else {
          lookForEdibles(node.children)
        }
      })
    }
    lookForEdibles(this.children)
  }

  connectedCallback() {
    this.intervalID = setInterval(this.jungleTicker, 1000)
  }

  disconnectedCallback() {
    clearInterval(this.intervalID)
  }
}
