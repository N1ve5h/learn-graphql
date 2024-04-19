fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({ query: "{ hello }" }),
}).then(r => r.json())
    .then(data => console.log("data returned:", data))

const test = require('node:test');
const assert = require('node:assert');

test('Fetch from GraphQL', async () => {
    let response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ query: "{ hello }" }),
    })
    let data = await response.json()
    assert.strictEqual('Hello World', data.data.hello)
})