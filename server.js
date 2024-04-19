const express = require("express")
const { createHandler } = require("graphql-http/lib/use/express")
const { buildSchema } = require("graphql")
const { ruruHTML } = require("ruru/server")

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

const root = {
    hello() {
        return "Hello World"
    }
}

const app = express();

app.all("/graphql", createHandler({schema: schema, rootValue: root}))

app.get('/', (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: '/graphql' }))
})

app.listen(4000)
console.log("Running a GraphQL API server");