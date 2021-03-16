const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('hello world')
});

const port = process.env.PORT || 3000;
console.log(`Server is listen on port ${port}`);
app.listen(port);