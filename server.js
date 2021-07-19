const express = require('express')
const mysql = require("mysql2");
const cors  = require("cors");
require('dotenv').config()
const bodyParser = require('body-parser');



const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});


app.post("/createweeklyassigner", (req, res) => {
    const name = req.body.name
    console.log(req.body)
    const taskAssigned = req.body.taskAssigned
    const position = req.body.position

    db.query(
        "INSERT INTO `Persons` (`Name`, `TaskAssigned`, `Position`) VALUES (?, ?, ?);",
        [name, taskAssigned, position],
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send("inserted")
            }
        }
    );
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})