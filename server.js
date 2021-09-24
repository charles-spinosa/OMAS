const path = require('path');
const express = require('express')
const app = express()
const port = process.env.port || 8080

// app.get('/')
// app.use(express.static('./public/OMAS.html'))

app.get('/', (req, res) => {
  console.log('found a req')
  res.sendFile(path.join(__dirname + '/public/OMAS.html'))
})

app.listen(port)