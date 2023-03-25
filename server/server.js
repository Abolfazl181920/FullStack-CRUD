const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const app = express()

app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    user: 'root',
    password: '54628288',
    host: 'localhost',
    database: 'mysql'
})
connection.connect((err) => {
    if (err) console.log('Connection Failed!')
    return console.log('Connection Success!')
})

app.get("/", (req, res) => {
    res.json("Home Data!")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM booksdb.books"
    connection.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(3001, () => console.log('server is running on port 3001!'))