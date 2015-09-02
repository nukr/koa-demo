import koa from 'koa'

let port = process.env.PORT || 3000
let app = koa()

app.listen(port)
console.log(`server is listen on port ${port}`)
