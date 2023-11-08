const express = require("express")
const app = express()

const indexRouter = require('./routes/index')

app.set('view engine','hbs')
app.set('views', __dirname +'/views')
app.set('layout', 'layouts/layout')

// app.use(express.static('public'))

app.use('/',indexRouter)

app.listen(process.env.PORT || 8000, () => {
    console.log("server started");
} )