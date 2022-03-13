const verifyAndLoad = ({ type = 'js', id, url, integrity }) => {
  if (type !== 'js') {
    throw new Error('Only loading JS resources is supported')
  }
  if (!id) {
    throw new Error('Please provide an id for the script')
  }
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.type = 'module'
    s.src = url
    if (integrity) {
      s.integrity = integrity
    }
    // Called if integrity check fails.
    s.onerror = reject
    s.onload = () => {
      import(url).then(resolve)
    }
    document.head.appendChild(s)
  })
}

const vettedDependencies = {
  hyperscript: {
    url: 'https://cdn.skypack.dev/pin/hyperscript@v2.0.2-pXTVyqvUnEFCuCwtO8NV/mode=imports/optimized/hyperscript.js',
    integrity:
      'sha384-SQs2ZOYHufS5xAMeRfd5aSOUDy2h7+z0v4QBCLphyuWvOLhiz7twjklZ4Q+nlsru',
  },
}

export const load = (id) => {
  const { url, integrity } = vettedDependencies[id]
  return verifyAndLoad({ id, url, integrity })
}
