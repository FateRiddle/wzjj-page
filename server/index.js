'use strict'

const app = require('./app')

const PORT = process.env.PORT || 9090

app.listen(PORT, () => {
  console.log(`App listens on ${PORT}`)
})
