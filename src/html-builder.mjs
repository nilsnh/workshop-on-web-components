/**
 * This 'cr' function is a tiny abstraction on the document.createElement()
 * function.
 *
 * Examples:
 *
 * First argument is the name of the tag you want to create.
 * const anchorTag = cr('a')
 *
 * Second and third argument can be used to provide attributes and inner-text.
 * const anchorTag = cr('a', {id: 'some-id', href: '/'}, 'this is a link')
 *
 * You can create nested trees like so:
 * cr('div',
 *  cr('p', 'My first paragraph'),
 *  cr('p', 'then there's the second paragraph')
 * )
 *
 * @param  {...any} args One or more arguments.
 * @returns One or more HTML elements.
 */
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
