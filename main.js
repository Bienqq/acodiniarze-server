const http = require('http');
const dns = require('dns')
const os = require('os')
const app = require('./app/app')

const server = http.createServer(app)

const port = process.env.PORT || 8080

dns.lookup(os.hostname(), () => {
    server.listen(port, () => {
        console.log(`Hostname: ${os.hostname()}`)
        console.log(`Server is listening on port ${port}`)
    })
})