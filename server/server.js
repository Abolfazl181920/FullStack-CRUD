const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    password: '54628288',
    host: 'localhost',
    database: 'mysql'
})
db.connect((err) => {
    if (err) console.log('Connection Failed!')
    return console.log('Connection Success!')
})

app.get("/", (req, res) => {
    res.json("Home Data!")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM booksdb.books"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO booksdb.books (`title`, `descr`, `price`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.descr,
        req.body.price
    ]

    db.query(q, [ values ], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id
    const q = "DELETE FROM booksdb.books WHERE id = ?"

    db.query(q, [ bookId ], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.put("/book/:id", (req, res) => {
    const bookId = req.params.id
    const q = "UPDATE booksdb.books SET `title` = ?, `descr` = ?, `price` = ? WHERE id = ?"

    const values = [
        req.body.title,
        req.body.descr,
        req.body.price
    ]

    db.query(q, [ ...values, bookId ], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/signup", (req, res) => {
    const q = "INSERT INTO booksdb.users (`username`, `password`, `email`) VALUES (?)"
    const userData = [
        req.body.username,
        req.body.password,
        req.body.email
    ]

    db.query(q, [ userData ], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/signin", (req, res) => {
    const q = "SELECT * FROM booksdb.users WHERE username = ? AND password = ? AND email = ?"
    const userData = [
        req.body.username,
        req.body.password,
        req.body.email
    ]

    db.query(q, [ userData ], (err, data) => {
        if (err) throw err
        if (data.length === 1) {
            alert("User Exists")
        } else {
            alert("User Not Exists")
        }
    })
})

app.listen(3001, () => console.log('server is running on port 3001!'))