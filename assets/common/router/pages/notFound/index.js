const html = require('choo/html')

const notFound = (state, emitter) =>
  html`
    <section>
      <h1>404 Not Found</h1>
    </section>
  `

module.exports = notFound
