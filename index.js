//jshint esversion:6
'use strict';
const express = require('express');
const moment = require('moment');
const app = express();


/* GET home page. */
app.get('/', (req, res) => {
  res.send('Timestamp Microservice');
});

/*GET timestamp*/
app.get('/:dateParam', (req,res) => {
  let timestamp;
      timestamp = (/^\d{8,}$/.test(req.params.dateParam)) ?
                            moment(req.params.dateParam, "X")
                          : moment(req.params.dateParam, "MMMM D, YYYY");
  res.json({
      unix: (timestamp.isValid()) ? timestamp.format("X") : 'Not valid',
      natural: (timestamp.isValid()) ? timestamp.format("MMMM D, YYYY") : 'Not valid'
    }); 

});

app.listen(process.env.PORT || 8080);