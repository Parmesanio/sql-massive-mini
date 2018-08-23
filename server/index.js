const express       = require('express'),
      bodyParser    = require('body-parser'),
      massive       = require('massive'),
      dotenv        = require('dotenv'),
      app           = express(),
      PORT          = 4000;
      dotenv.config();


app.use(bodyParser.json());

//MASSIVE CONFIG

massive(process.env.CONNECTION_STRING).then(db => {
    console.log(`Connected to ${db}`);
    db.query('select * from heroes').then(heroes => {
        console.log(heroes);
    })
})


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});