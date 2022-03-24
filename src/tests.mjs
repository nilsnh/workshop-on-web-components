import { cr } from '/html-builder.mjs'

export async function test(nameOfTest, funcThatMustReturnTrue) {
  const li = document.createElement('li')
  li.innerHTML = `<p>Testing 🚧 ${nameOfTest}</p>`
  if (!window['test-reporter']) {
    alert('No ID "test-reporter" found on page')
  }
  window['test-reporter'].appendChild(li)
  // Regardless if it's a promise me wrap it so that we can await it.
  const result = await Promise.resolve(funcThatMustReturnTrue())
  if (!result) {
    li.innerHTML = `<p>Failed! 💥 ${nameOfTest}</p>`
  } else if (typeof result === 'string') {
    li.innerHTML = `<p>Failed! 💥 ${nameOfTest}, and error message was "${result}"</p>`
  } else {
    li.innerHTML = `<p>Success! ✅ ${nameOfTest}</p>`
  }
}

export function expect(expectedToBeTrue, errorMessage) {
  if (!expectedToBeTrue) {
    return errorMessage
  }
  return expectedToBeTrue
}

/**
 * Creates web component element and attaches it to the page for testing.
 * @param {String} componentName name of component to create
 * @returns reference to the node and a tearDown() function.
 */
export function renderForTesting(componentName) {
  const node = cr(componentName)
  const testContainer = cr('div', { display: 'none' }, node)
  document.body.appendChild(testContainer)
  return {
    node,
    tearDown() {
      document.body.removeChild(testContainer)
    },
  }
}

export const waitFor = async (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, milliseconds)
  })
}
