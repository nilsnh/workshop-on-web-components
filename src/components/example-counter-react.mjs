import React from 'https://cdn.skypack.dev/react@17.0.1'
import ReactDom from 'https://cdn.skypack.dev/react-dom@17.0.1'

const e = React.createElement

const Counter = () => {
  const [counter, setCounter] = React.useState(0)
  return e('p', null, [
    'React counter: ',
    e(
      'button',
      { onClick: () => setCounter((prevVal) => prevVal + 1) },
      `Clicked '${counter}' times`
    ),
  ])
}

let shadowRoot

export class ExampleCounterReact extends HTMLElement {
  constructor() {
    super()
    shadowRoot = this.attachShadow({ mode: 'open' })
    ReactDom.render(e(Counter, null, null), shadowRoot)
  }

  disconnectedCallback() {
    ReactDom.unmountComponentAtNode(shadowRoot)
  }
}
