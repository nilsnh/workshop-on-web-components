import { cr } from '/html-builder.mjs'

const css = `

.surf-it {
  animation-duration: 1s;
  animation-name: surf;
  animation-direction: alternate;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  display: inline-block;
}

@keyframes surf {
  from {
    transform: translateY(-3rem);
  }
  to {
    transform: translateY(3rem);
  }
}
`

/**
 * Gives a small animation to anything it wraps.
 *
 * See also: {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion}
 */
export class SurfIt extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    this.shadowRoot.appendChild(
      cr(
        'span',
        { class: !mediaQuery || mediaQuery.matches ? '' : 'surf-it' },
        cr('style', css),
        cr('slot')
      )
    )
  }
}
