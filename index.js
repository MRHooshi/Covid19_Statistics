const express = require('express')
const config = require('./config')
const {get} = require('./api')
const app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    get().then((result) =>{
        return res.render('index' , {data:result})}        
    ).catch(err => {
        console.log(err)
    })
    
});


app.listen(config.port , () => console.log('listening on port '+config.port))