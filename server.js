const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/createweeklyassigner", (req, res) => {
    /*/ 
    props from website to db
    db.query

    ///template///
    const user = req.body.user;
    const pass = req.body.pass;
    
    db.query(
        "INSERT INTO `users` (`username`, `name`,) VALUES (?,?);",
        [user, pass],
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send("inserted")
            }
        }
    );
    ///template///

    /*/
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})