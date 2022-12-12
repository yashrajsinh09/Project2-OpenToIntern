const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/router');
const multer = require("multer")
const app = express();

app.use(express.json());

app.use(multer().any())

mongoose.connect('mongodb+srv://yashrajsinh09:yashraj2727@assignment.lhpfmud.mongodb.net/group1Database', { useNewUrlParser: true})
.then(() => console.log('MongoDb is connected.'))
    .catch(err => console.log(err));

app.use('/', route);

app.use((req, res) => res.status(400).send({ status: false, message: 'Invalid URL' }));
app.listen(3001, () => console.log('Express app is running on port 3001.'));
