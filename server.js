const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('<h1> Node its ON in port 3000 using HTML'))

app.listen(3000);
console.log('Server is UP');