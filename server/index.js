const express       = require('express'),
      bodyParser    = require('body-parser'),
      massive       = require('massive'),
      app           = express(),
      PORT          = 4000;


app.use(bodyParser.json());

//MASSIVE CONFIG
massive('postgres://xbssegyxhkvpyh:7ee81589b8e7e4dbc0506331ac83bb44e771de0190c344d3166bc4d9449fb939@ec2-54-243-216-33.compute-1.amazonaws.com:5432/dcp7krmbkdehok?ssl=true').then(db => console.log(`Connected to ${db}`));


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});