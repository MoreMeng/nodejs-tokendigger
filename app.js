const fs = require('fs')
const md5 = require('md5')
const http = require('http')
const dotenv = require('dotenv').config()

const nhsoToken = process.env.TOKENPATH
console.log(`Watching for file changes on ${nhsoToken}`)

let md5Previous = null
let fsWait = false

fs.watch(nhsoToken, (event, filename) => {
  if (filename) {
    if (fsWait) return
    fsWait = setTimeout(() => {
      fsWait = false
    }, 100)
    const md5Current = md5(fs.readFileSync(nhsoToken))
    if (md5Current === md5Previous) {
      return
    }
    md5Previous = md5Current

    console.log(`${filename} file Changed`)

    const token = (fs.readFileSync(nhsoToken) + '').replace(/(\r\n|\n|\r|\\n|\s|\t)/gm, '')
    console.log(`${token}`)

    // const options = {
    //   hostname: process.env.SERV,
    //   port: process.env.PORT,
    //   path: '/token',
    //   method: 'POST',
    // }
    // const req = http.request(options, res => {
    //   console.log(`statusCode: ${res.statusCode}`)
    //   res.on('data', d => {
    //     process.stdout.write(d)
    //   })
    // })

    // req.on('error', error => {
    //   console.error(error)
    // })

    // req.write(token)
    // req.end()
  }
})