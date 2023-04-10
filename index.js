const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 8000;
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routers/homeRouter'));
app.use('/', require('./routers/addRouter'));
app.use('/', require('./routers/deleteRouter'));
app.use(express.static('src'));
//getting connection with database
const db = require('./config/connection');
const Todo = require('./models/todo');

//setting view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
//requiring router







app.listen(8000, () => {
    console.log(`I am listening at port ${port}`);
})