const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('<h1> Node its ON in port 3000 using HTML'))

app.listen(80);
console.log('Server is UP on port 80');