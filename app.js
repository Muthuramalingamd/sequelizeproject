var express        = require('express');
var bodyParser     = require('body-parser');
var cors = require('cors');
var app = express();
//fetch form data from the request
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())
app.use('/api/v1/project', require('./routes/project'));
var port = process.env.PORT || 3000;
app.listen(port,()=>console.log('server runing at port '+port));
