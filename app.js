const fs = require('fs')
const http = require('http')
const dotenv = require('dotenv').config()

const nhsoToken = process.env.TOKENPATH
console.log(`Watching for file changes on ${nhsoToken}`)

fs.watchFile(nhsoToken, (curr, prev) => {
  const token = fs.readFileSync(nhsoToken)
  console.log(`${token}`)

  const options = {
    hostname: process.env.SERV,
    port: process.env.PORT,
    path: '/token',
    method: 'POST',
  }
  const req = http.request(options, res => {
    console.log (`statusCode: ${res.statusCode}`)
    res.on('data', d => {
      process.stdout.write(d)
    })
  })

  req.on('error', error => {
    console.error(error)
  })

  req.write(token)
  req.end()
})