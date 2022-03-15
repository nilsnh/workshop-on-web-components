export const cr = (...args) => {
  const [tagname, ...restOfArgs] = args
  const newElement = document.createElement(tagname)
  restOfArgs.forEach((arg) => {
    if (arg instanceof Element) {
      newElement.appendChild(arg)
    } else if (typeof arg === 'string' || typeof arg === 'number') {
      newElement.appendChild(document.createTextNode(arg))
    } else if (typeof arg === 'object') {
      Object.entries(arg).forEach(([key, val]) => {
        newElement.setAttribute(key, val)
      })
    }
  })
  return newElement
}
