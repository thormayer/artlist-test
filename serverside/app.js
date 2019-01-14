const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', require('./routes/Users/users.route'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server is on port ... ${PORT}`));