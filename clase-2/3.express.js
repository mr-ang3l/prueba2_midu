const express = require('express')

const app = express()

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.json({ name: 'Hola mundo' })
})

app.post('/pokemon', (req, res) => {
  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(201).json(data)
  })
})

app.listen(PORT, () => {
  console.log(`server listening on port: https://zany-potato-5r6q7wvqj6r2v6px-${PORT}.app.github.dev/`)
})
