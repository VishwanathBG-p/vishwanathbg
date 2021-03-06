const express = require('express')
const app = express()
const port = 3000
app.set('views','./views')
app.set('view engine','ejs');

app.use(express.static("public"))


app.get('/', (req, res) => {
    res.render("index")
    
})

app.get("/home", (req, res) => {
  res.render("home",{name:req.query.name})

  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})