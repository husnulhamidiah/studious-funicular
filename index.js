const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({ message: "ok" })
})

app.get('/ping', (req, res) => {
  res.send('pong 🏓')
})

const port = parseInt(process.env.PORT) || 8080
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})