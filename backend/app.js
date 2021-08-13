var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 4000;
var cliente_route = require('./routes/cliente');
var URI = "mongodb://localhost/tienda";

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => console.log('base de datos conectada'))
mongoose.connection.on('error', () => console.log('error'))


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    next();
});

app.use('/api', cliente_route);

app.listen(port, () => console.log('server running on port ' + port))

module.exports = app;