import { Database } from "bun:sqlite"

const db = new Database("db.sqlite")

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("test")
  }
})

console.log(`listening on ${server.url}`)
