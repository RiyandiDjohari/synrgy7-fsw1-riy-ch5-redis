const express = require('express');
const app = express();
const port = 8000;
const Router = require('./routes')

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(Router);

app.listen(port, () => {
    console.log(`App Running on Port ${port}`)
})
