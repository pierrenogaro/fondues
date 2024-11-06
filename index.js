const express = require('express');
const routes = require('./routes/fondues');
const app = express();
const port = 8000;

app.use(express.json());
app.use('/fondues', routes);

app.get('/', (req, res) => {
    res.send('Welcome to the fondues API');
});

app.listen(port, () => {
    console.log('OK');
});