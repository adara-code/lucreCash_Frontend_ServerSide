const express = require('express')
const path = require('path')
const app = express()
const port = 4000


//serves static files ie css, images and js
app.use(express.static(path.join(__dirname, 'public')));

//ejs template engine integrated into express. Searches for the views directory
app.set('view engine', 'ejs')

app.get('/', (req,res) => res.render("home"))
app.get('/signup', (req,res) => res.render("signup"))
app.get('/login', (req,res) => res.render("login"))

app.listen(port, () => console.log(`frontend server loading on port ${port}`))