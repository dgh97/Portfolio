const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.set('view engine', 'ejs');
app.set('views', './public');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(request, response) => {
    response.render('home');
});


app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
});