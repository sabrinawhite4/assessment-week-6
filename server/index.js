const express = require('express')
const path = require('path')
const gradient = require('gradient-string')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, './tictacjs.html'));
});

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(gradient.instagram(`Listening on port ${port}`))
})