const path = require('path');
const express = require('express')
const app = express()
const port = 3000

// app.get('/')
// app.use(express.static('./public/OMAS.html'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/OMAS.html')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})