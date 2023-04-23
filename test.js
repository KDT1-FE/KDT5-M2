function createDelay() {
  let done = false
  let promise = null
  return {
    read() {
      if (done) {
        return
      }
      if (promise) {
        throw promise
      }
      promise = new Promise((resolve) => {
        setTimeout(() => {
          done = true
          promise = null
          resolve()
        }, 4000)
      })
      throw promise
    },
  }
}
console.log('foo')
try {
  const ctx = createDelay()
  ctx.read()
} catch (err) {
  console.error(err)
}
console.log('bar')
