const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));

// Hiện thông tin trả về post {...}
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
//Http logger 
//app.use(morgan('combined'));

// Template engine
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));
// console.log('PATH:',path.join(__dirname,'resources/views'));

//Home, seach, contact



//Routes init
route(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});