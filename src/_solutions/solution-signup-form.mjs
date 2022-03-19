import React from 'https://cdn.skypack.dev/react@17.0.1'
import ReactDom from 'https://cdn.skypack.dev/react-dom@17.0.1'

const e = React.createElement

const css = `
  .form-wrapper {
    background-color: #557B83;
    border: 5px solid #39AEA9;
    padding: 2.8rem;
    color: white;
  }
  .form-wrapper fieldset {
    border: 0;
    padding: 0;
    display: flex;
    align-items: baseline;
    gap: 1.4rem;
  }
  .form-wrapper button {
    background-color: transparent;
    border: 2px solid white;
    padding: 1rem;
    color: white;
  }
`

const signupTargetURL = `https://requestbin.net/r/7vc0d0q8`

const NewsletterForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const onFormSubmit = (formEvent) => {
    formEvent.preventDefault()
    if (isSubmitting) {
      return // Do nothing
    }
    setIsSubmitting(true)
    fetch(signupTargetURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        email: formEvent.target.email.value,
      }),
    })
      .then(() => {
        setSubmitted(true)
      })
      .catch((err) => {
        alert(`Wops something went wrong when submitting. Error was: ${err}`)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  if (submitted) {
    return e('div', null, [
      e('style', null, css),
      e(
        'div',
        { className: 'form-wrapper' },
        e('p', null, 'Newsletter signup was successful')
      ),
    ])
  }

  return e('div', null, [
    e('style', null, css),
    e(
      'div',
      { className: 'form-wrapper' },
      e(
        'form',
        {
          onSubmit: onFormSubmit,
        },
        [
          e('p', null, 'Please signup for our newsletter.'),
          e('fieldset', null, [
            e('label', { htmlFor: 'newsletter-signup' }, 'Email:'),
            e('input', {
              type: 'email',
              id: 'newsletter-signup',
              name: 'email',
              required: true,
            }),
            e(
              'button',
              { type: 'submit', disabled: isSubmitting },
              'Sign up to newsletter'
            ),
          ]),
        ]
      )
    ),
  ])
}

let shadowRoot

export class SignupForm extends HTMLElement {
  constructor() {
    super()
    shadowRoot = this.attachShadow({ mode: 'closed' })
    ReactDom.render(e(NewsletterForm, null, null), shadowRoot)
  }

  disconnectedCallback() {
    ReactDom.unmountComponentAtNode(shadowRoot)
  }
}
