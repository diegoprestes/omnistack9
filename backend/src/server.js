const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

// req.query: for get params (filters)
// req.params: for route params (edit, delete)
// req.body: for body params (create, edit)

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-w0emq.mongodb.net/week9?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.use(routes);

app.listen(3333);
