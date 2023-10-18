import express from "express";

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hell World!')
})

app.get('/nome', (req, res) => {
    res.send('Hell World! nome')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})