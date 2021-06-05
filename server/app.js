const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send('Hello');
});

const port = 4000;
app.listen(port, () => {
 console.log(`Listening on ${port}`);
});