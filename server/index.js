const express       = require('express'),
      bodyParser    = require('body-parser'),
      massive       = require('massive'),
      app           = express(),
      PORT          = 4000;


app.use(bodyParser.json());

//MASSIVE CONFIG
massive(process.ip.ENV).then(db => console.log(`Connected to ${db}`));


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});